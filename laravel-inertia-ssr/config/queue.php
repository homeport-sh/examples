<?php

// Jobs run as they're dispatched: no worker, no jobs table.
return [
    'default' => env('QUEUE_CONNECTION', 'sync'),
];
