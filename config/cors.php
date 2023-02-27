<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['GET', 'POST'],
    'allowed_origins' => [
        'http://127.0.0.1:8000',
        'http://127.0.0.1:8080',
        'http://127.0.0.1',
        'http://localhost',
    ],
    'allowed_origins_patterns' => ['*'],
    'allowed_headers' => ['X-Custom-Header', 'Upgrade-Insecure-Requests', '*'],
    'exposed_headers' => false,
    'max_age' => 0,
    'supports_credentials' => true,
];
