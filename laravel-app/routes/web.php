<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::get('/health', fn () => response()->json([
    'status' => 'ok',
    'laravel' => app()->version(),
    'php' => PHP_VERSION,
]));
