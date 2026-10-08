<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::get('/health', fn () => response()->json([
    'status' => 'ok',
    'laravel' => app()->version(),
    'php' => PHP_VERSION,
]));

// Shows whether a database is attached and answering. Add one from the
// app's Database tab and this turns to "connected".
Route::get('/db', function () {
    try {
        $time = DB::scalar('select now()');
    } catch (Throwable) {
        return response()->json(['database' => 'not connected'], 503);
    }

    return response()->json([
        'database' => 'connected',
        'driver' => DB::connection()->getDriverName(),
        'time' => $time,
    ]);
});
