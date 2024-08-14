<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\PasswordResetSuccess;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;


class PasswordResetController extends Controller
{
   
    public function sendResetLinkEmail(Request $request)
{
    // Validate the request
    $request->validate(['email' => 'required|email']);
    
    // Attempt to send the reset link
    $response = Password::sendResetLink($request->only('email'));

    // Determine the response based on the outcome
    switch ($response) {
        case Password::RESET_LINK_SENT:
            return response()->json(['message' => 'Reset link sent to your email.']);
        
        case Password::INVALID_USER:
            return response()->json(['message' => 'Invalid email address.'], 400);

        default:
            return response()->json(['message' => 'Failed to send reset link.'], 400);
    }
}

    public function showResetForm(Request $request, $token = null)
{
    return view('auth.passwords.reset')->with(
        ['token' => $token, 'email' => $request->email]
    );
}

public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:8',
        ]);

        $response = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->save();

                // Send the password reset success email
                Mail::to($user->email)->send(new PasswordResetSuccess($user->email));
            }
        );

        return $response === Password::PASSWORD_RESET
                    ? response()->json(['message' => 'Password has been reset.'])
                    : response()->json(['message' => 'Failed to reset password.'], 400);
    }
}
