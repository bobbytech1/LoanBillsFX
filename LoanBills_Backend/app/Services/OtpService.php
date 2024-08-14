<?php

namespace App\Services;

use App\Models\User;
use App\Models\UserOtp;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpEmail;

class OtpService
{
    public function generateOtp(User $user)
    {
        // Delete existing OTPs
        UserOtp::where('user_id', $user->id)->delete();

        // Generate and save new OTP
        $otp = rand(100000, 999999);
        UserOtp::create([
            'user_id' => $user->id,
            'otp' => $otp,
            'expires_at' => now()->addMinutes(1),
        ]);

        // Send OTP email
        Mail::to($user->email)->send(new OtpEmail($otp));

        return $otp;
    }

    public function verifyOtp(User $user, $otp)
    {
        return UserOtp::where('user_id', $user->id)
                      ->where('otp', $otp)
                      ->where('expires_at', '>=', now())
                      ->first();
    }
}
