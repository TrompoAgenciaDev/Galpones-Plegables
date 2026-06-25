<?php

namespace App;

class EmailTemplate
{
    private function base(string $content, string $title): string
    {
        $year = date('Y');
        return <<<HTML
<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{$title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f0f0;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f0f0;padding:30px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;margin:0 auto;">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#001B73;padding:36px 40px 28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#EE4B00;">INFRAESTRUCTURA MODULAR</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:1px;text-transform:uppercase;line-height:1.1;">GALPONES <span style="color:#EE4B00;">PLEGABLES</span></p>
                  </td>
                  <td width="56" align="right" valign="middle">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="56" height="56" align="center" valign="middle" style="background-color:#00249A;border-radius:28px;">
                          <span style="font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:900;color:#EE4B00;line-height:56px;">GP</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ORANGE STRIPE -->
          <tr>
            <td height="4" style="background-color:#EE4B00;font-size:1px;line-height:1px;">&nbsp;</td>
          </tr>

          <!-- CONTENT -->
          {$content}

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#001B73;padding:28px 40px;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.5);">
                © {$year} Galpones Plegables — Todos los derechos reservados
              </p>
              <p style="margin:8px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:rgba(255,255,255,0.3);">
                Este mensaje fue generado automáticamente, por favor no responder a este correo.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
    }

    public function adminNotification(array $data): string
    {
        $nombre      = htmlspecialchars($data['nombre'] ?? '', ENT_QUOTES, 'UTF-8');
        $apellido    = htmlspecialchars($data['apellido'] ?? '', ENT_QUOTES, 'UTF-8');
        $provincia   = htmlspecialchars($data['provincia'] ?? '', ENT_QUOTES, 'UTF-8');
        $empresa     = htmlspecialchars($data['empresa'] ?? '', ENT_QUOTES, 'UTF-8');
        $telefono    = htmlspecialchars($data['telefono'] ?? '', ENT_QUOTES, 'UTF-8');
        $email       = htmlspecialchars($data['email'] ?? '', ENT_QUOTES, 'UTF-8');
        $consulta    = nl2br(htmlspecialchars($data['consulta'] ?? '', ENT_QUOTES, 'UTF-8'));
        $submissionId = htmlspecialchars($data['submission_id'] ?? '', ENT_QUOTES, 'UTF-8');
        $fecha       = date('d/m/Y H:i');

        $rows = [
            ['Nombre',     $nombre],
            ['Apellido',   $apellido],
            ['Email',      "<a href=\"mailto:{$email}\" style=\"color:#00249A;text-decoration:none;\">{$email}</a>"],
            ['Teléfono',   $telefono],
            ['Provincia',  $provincia],
            ['Empresa',    $empresa],
        ];

        $tableRows = '';
        foreach ($rows as $i => [$label, $value]) {
            $bg = ($i % 2 === 0) ? '#ffffff' : '#f7f8fc';
            $tableRows .= <<<ROW
            <tr>
              <td width="150" style="background-color:{$bg};padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;color:#001B73;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #e8e8f0;">{$label}</td>
              <td style="background-color:{$bg};padding:12px 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;border-bottom:1px solid #e8e8f0;">{$value}</td>
            </tr>
            ROW;
        }

        $content = <<<HTML
          <!-- TITLE ROW -->
          <tr>
            <td style="background-color:#ffffff;padding:36px 40px 20px;">
              <p style="margin:0 0 6px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#EE4B00;">Nueva solicitud</p>
              <h2 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:900;color:#001B73;line-height:1.2;">Presupuesto recibido</h2>
              <p style="margin:10px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#666666;">{$fecha}</p>
            </td>
          </tr>

          <!-- DIVIDER -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <hr style="border:none;border-top:2px solid #f0f0f0;margin:0;">
            </td>
          </tr>

          <!-- DATA TABLE -->
          <tr>
            <td style="background-color:#ffffff;padding:20px 40px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:4px;overflow:hidden;border:1px solid #e8e8f0;">
                {$tableRows}
              </table>
            </td>
          </tr>

          <!-- CONSULTA -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f8fc;border-left:4px solid #EE4B00;border-radius:0 4px 4px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#001B73;">Consulta</p>
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.6;">{$consulta}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SUBMISSION ID -->
          <tr>
            <td style="background-color:#f7f8fc;padding:14px 40px;border-top:1px solid #e8e8f0;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#999999;">
                ID de seguimiento: <span style="font-family:monospace;color:#666666;">{$submissionId}</span>
              </p>
            </td>
          </tr>
HTML;

        return $this->base($content, 'Nueva solicitud de presupuesto');
    }

    public function userConfirmation(array $data): string
    {
        $nombre   = htmlspecialchars($data['nombre'] ?? '', ENT_QUOTES, 'UTF-8');
        $apellido = htmlspecialchars($data['apellido'] ?? '', ENT_QUOTES, 'UTF-8');
        $consulta = nl2br(htmlspecialchars($data['consulta'] ?? '', ENT_QUOTES, 'UTF-8'));

        $content = <<<HTML
          <!-- HERO -->
          <tr>
            <td style="background-color:#00249A;padding:50px 40px;text-align:center;">
              <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#EE4B00;">¡Gracias!</p>
              <h2 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:900;color:#ffffff;line-height:1.2;">
                {$nombre}, recibimos<br>tu solicitud.
              </h2>
              <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:rgba(255,255,255,0.8);line-height:1.6;">
                Un representante de nuestro equipo<br>se comunicará con vos a la brevedad.
              </p>
            </td>
          </tr>

          <!-- ORANGE MINI STRIPE -->
          <tr>
            <td height="3" style="background-color:#EE4B00;font-size:1px;line-height:1px;">&nbsp;</td>
          </tr>

          <!-- MESSAGE BODY -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">
              <p style="margin:0 0 20px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#333333;line-height:1.7;">
                Hola <strong style="color:#001B73;">{$nombre} {$apellido}</strong>,<br>
                recibimos tu solicitud de presupuesto. Nuestro equipo revisará tu consulta y te contactará en el menor tiempo posible.
              </p>

              <!-- CONSULTA RESUMEN -->
              <p style="margin:0 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#001B73;">Tu consulta</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f8fc;border-left:4px solid #EE4B00;border-radius:0 4px 4px 0;margin-bottom:32px;">
                <tr>
                  <td style="padding:18px 22px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#444444;line-height:1.7;">{$consulta}</p>
                  </td>
                </tr>
              </table>

              <!-- WHAT'S NEXT -->
              <p style="margin:0 0 10px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#001B73;">¿Qué sigue?</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="36" valign="top" style="padding:4px 12px 16px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" height="28" align="center" valign="middle" style="background-color:#EE4B00;border-radius:14px;">
                          <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:900;color:#ffffff;">1</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding-bottom:16px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.6;">Nuestro equipo técnico revisará los detalles de tu proyecto.</p>
                  </td>
                </tr>
                <tr>
                  <td width="36" valign="top" style="padding:4px 12px 16px 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" height="28" align="center" valign="middle" style="background-color:#EE4B00;border-radius:14px;">
                          <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:900;color:#ffffff;">2</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top" style="padding-bottom:16px;">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.6;">Un representante te contactará por email o teléfono para coordinar los detalles.</p>
                  </td>
                </tr>
                <tr>
                  <td width="36" valign="top" style="padding:4px 12px 0 0;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" height="28" align="center" valign="middle" style="background-color:#EE4B00;border-radius:14px;">
                          <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:900;color:#ffffff;">3</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="top">
                    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#333333;line-height:1.6;">Recibirás una propuesta personalizada para tu infraestructura.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA STRIP -->
          <tr>
            <td style="background-color:#f7f8fc;padding:24px 40px;border-top:1px solid #e8e8f0;text-align:center;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#666666;">
                ¿Necesitás más información? Nuestro equipo está a tu disposición.
              </p>
            </td>
          </tr>
HTML;

        return $this->base($content, '¡Recibimos tu consulta! — Galpones Plegables');
    }
}
