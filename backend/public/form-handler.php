<?php

// Load .env from project root (two levels up from backend/public/)
$envFile = dirname(__DIR__, 2) . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || strpos($line, '=') === false) {
            continue;
        }
        [$name, $value] = explode('=', $line, 2);
        $name  = trim($name);
        $value = trim($value, " \t\"'");
        if (!empty($name) && getenv($name) === false) {
            putenv("{$name}={$value}");
        }
    }
}

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'method_not_allowed']);
    exit;
}

require_once dirname(__DIR__) . '/vendor/autoload.php';

use App\Database;
use App\Mailer;
use App\EmailTemplate;

// 1. Honeypot: silently redirect bots
$fax = trim($_POST['fax'] ?? '');
if ($fax !== '') {
    echo json_encode(['success' => true]);
    exit;
}

// 2. Time trap: reject submissions faster than 3 seconds
$renderTime = (int)($_POST['_t'] ?? 0);
if ($renderTime > 0 && (time() - $renderTime) < 3) {
    echo json_encode(['error' => 'spam_detected']);
    exit;
}

// 3. reCAPTCHA v3 validation
$recaptchaToken  = $_POST['g-recaptcha-response'] ?? '';
$recaptchaSecret = getenv('RECAPTCHA_SECRET');

if (empty($recaptchaToken)) {
    echo json_encode(['error' => 'token_missing']);
    exit;
}

if (!empty($recaptchaSecret)) {
    $verifyCtx = stream_context_create(['http' => [
        'method'  => 'POST',
        'header'  => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query(['secret' => $recaptchaSecret, 'response' => $recaptchaToken]),
        'timeout' => 5,
    ]]);
    $verifyRaw = @file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $verifyCtx);
    $verify    = $verifyRaw ? json_decode($verifyRaw, true) : [];

    if (empty($verify['success']) || ($verify['score'] ?? 0) < 0.5) {
        echo json_encode(['error' => 'recaptcha_failed']);
        exit;
    }
}

// 4. Sanitize and validate required fields
$nombre   = trim($_POST['NOMBRE']    ?? '');
$apellido = trim($_POST['APELLIDOS'] ?? '');
$provincia = trim($_POST['PROVINCIA'] ?? '');
$empresa  = trim($_POST['EMPRESA']   ?? '');
$telefono = trim($_POST['SMS']       ?? '');
$email    = trim($_POST['EMAIL']     ?? '');
$consulta = trim($_POST['CONSULTA']  ?? '');
$location = trim($_POST['LOCATION']  ?? 'footer');
$submissionId = trim($_POST['SUBMISSION_ID'] ?? '');

if (empty($nombre) || empty($apellido) || empty($email) || empty($consulta)) {
    echo json_encode(['error' => 'validation_failed']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['error' => 'validation_failed']);
    exit;
}

// 5. Persist to database (non-blocking: failure doesn't abort the response)
try {
    $db   = Database::getConnection();
    $stmt = $db->prepare('
        INSERT INTO consultas
            (submission_id, nombre, apellido, provincia, empresa, telefono, email, consulta, location, ip_address, user_agent)
        VALUES
            (:submission_id, :nombre, :apellido, :provincia, :empresa, :telefono, :email, :consulta, :location, :ip, :ua)
    ');
    $stmt->execute([
        'submission_id' => $submissionId,
        'nombre'        => $nombre,
        'apellido'      => $apellido,
        'provincia'     => $provincia,
        'empresa'       => $empresa,
        'telefono'      => $telefono,
        'email'         => $email,
        'consulta'      => $consulta,
        'location'      => $location,
        'ip'            => $_SERVER['REMOTE_ADDR'] ?? '',
        'ua'            => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 500),
    ]);
} catch (Throwable $e) {
    error_log('[form-handler] DB error: ' . $e->getMessage());
}

// 6. Send emails (non-blocking: failure doesn't abort the response)
try {
    $template = new EmailTemplate();
    $mailer   = new Mailer();

    $emailData = [
        'nombre'        => $nombre,
        'apellido'      => $apellido,
        'provincia'     => $provincia,
        'empresa'       => $empresa,
        'telefono'      => $telefono,
        'email'         => $email,
        'consulta'      => $consulta,
        'submission_id' => $submissionId,
    ];

    // Admin notification
    $toAdmin = getenv('SMTP_TO');
    if (!empty($toAdmin)) {
        $mailer->send(
            $toAdmin,
            'Nueva solicitud de presupuesto — ' . $nombre . ' ' . $apellido,
            $template->adminNotification($emailData)
        );
    }

    // Confirmation to the user
    $mailer->send(
        $email,
        '¡Recibimos tu consulta! — Galpones Plegables',
        $template->userConfirmation($emailData)
    );
} catch (Throwable $e) {
    error_log('[form-handler] Mail error: ' . $e->getMessage());
}

echo json_encode(['success' => true]);
