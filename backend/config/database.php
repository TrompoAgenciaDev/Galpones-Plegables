<?php

return [
    'host' => getenv('DB_HOST') ?: 'localhost',
    'database' => getenv('DB_NAME') ?: 'galpones_plegables',
    'username' => getenv('DB_USER') ?: 'root',
    'password' => getenv('DB_PASS') ?: '',
    'charset' => 'utf8mb4',
];
