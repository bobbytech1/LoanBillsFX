<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/test-email', function () {
    $details = [
        'title' => 'Test Mail',
        'body' => 'This is a test email sent using Gmail SMTP'
    ];
    
    Mail::to('hackanonymous2023@gmail.com')->send(new \App\Mail\TestMail($details));
    return 'Email sent successfully!';
});

Route::get('reset-password/{token}', [PasswordResetController::class, 'showResetForm'])->name('password.reset');

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});


require __DIR__.'/auth.php';
