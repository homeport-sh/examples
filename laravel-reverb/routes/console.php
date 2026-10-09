<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('hello', function () {
    $this->info('Hello from Laravel on homeport.');
})->purpose('Say hello');
