<?php

// Sessions live in an encrypted cookie: no database, nothing on disk.
return [
    'driver' => env('SESSION_DRIVER', 'cookie'),
];
