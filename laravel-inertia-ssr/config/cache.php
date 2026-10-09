<?php

// The file cache, in storage/: no database or Redis needed.
return [
    'default' => env('CACHE_STORE', 'file'),
];
