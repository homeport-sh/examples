<?php

use App\Events\Pinged;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

// Broadcasts a ping to every open page, through Reverb.
Route::post('/ping', function (Request $request) {
    $message = substr((string) $request->input('message', 'ping'), 0, 100);
    Pinged::dispatch($message, now()->toIso8601String());

    return response()->json(['sent' => $message]);
});

Route::get('/health', fn () => response()->json([
    'status' => 'ok',
    'laravel' => app()->version(),
    'php' => PHP_VERSION,
]));
