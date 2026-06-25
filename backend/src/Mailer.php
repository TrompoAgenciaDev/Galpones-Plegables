<?php

namespace App;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception as MailerException;

class Mailer
{
    private array $config;

    public function __construct()
    {
        $this->config = require __DIR__ . '/../config/smtp.php';
    }

    public function send(string $toEmail, string $subject, string $htmlBody): void
    {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host       = $this->config['host'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $this->config['username'];
        $mail->Password   = $this->config['password'];
        $mail->SMTPDebug  = $this->config['debug'];
        $mail->Port       = $this->config['port'];

        $encryption = strtolower($this->config['encryption']);
        if ($encryption === 'ssl') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } else {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        }

        $fromEmail = $this->config['from_email'] ?: $this->config['username'];
        $mail->setFrom($fromEmail, 'Galpones Plegables');
        $mail->addAddress($toEmail);

        $bcc = $this->config['bcc_email'];
        if (!empty($bcc)) {
            $mail->addBCC($bcc);
        }

        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';
        $mail->Subject = $subject;
        $mail->Body    = $htmlBody;
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $htmlBody));

        $mail->send();
    }
}
