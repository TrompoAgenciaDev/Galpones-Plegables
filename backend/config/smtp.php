<?php

return [
    'host'       => getenv('SMTP_HOST')       ?: 'smtp.gmail.com',
    'port'       => (int)(getenv('SMTP_PORT') ?: 587),
    'encryption' => getenv('SMTP_ENCRYPTION') ?: 'tls',
    'username'   => getenv('SMTP_USER')       ?: '',
    'password'   => getenv('SMTP_PASS')       ?: '',
    'from_email' => getenv('SMTP_FROM')       ?: '',
    'to_email'   => getenv('SMTP_TO')         ?: '',
    'bcc_email'  => getenv('SMTP_CCO')        ?: '',
    'debug'      => (int)(getenv('SMTP_DEBUG') ?: 0),
];
