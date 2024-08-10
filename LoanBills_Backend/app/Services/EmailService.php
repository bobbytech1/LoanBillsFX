<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;
use App\Models\User;

class EmailService
{
    public function sendWelcomeEmail(User $user)
    {
        Mail::to($user->email)->send(new WelcomeMail($user));
    }
}
