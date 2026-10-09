<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('home', [
    'laravel' => app()->version(),
    'php' => PHP_VERSION,
    'renderedAt' => now()->toIso8601String(),
]));

Route::get('/health', fn () => response()->json([
    'status' => 'ok',
    'laravel' => app()->version(),
    'php' => PHP_VERSION,
]));
