<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserOtp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpEmail;

class UserAuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'country' => 'required|string|max:50',
        'password' => 'required|string|min:8',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'country' => $request->country,
        'password' => Hash::make($request->password),
        'otp' => rand(100000, 999999),  // Generate a 6-digit OTP
        'otp_expiration' => now()->addMinutes(2),  // Set expiration time
    ]);

    // Send OTP email
    Mail::to($user->email)->send(new OtpEmail($user->otp));

    return response()->json(['message' => 'Registration successful. Please check your email for the OTP.'], 201);
}

    public function verifyOtp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'otp' => 'required|string|size:6',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
    
        $user = User::where('email', $request->email)->first();
    
        // Debug output
        \Log::info('User OTP:', ['otp' => $user->otp, 'input_otp' => $request->otp]);
        \Log::info('OTP Expiration:', ['expires_at' => $user->otp_expiration, 'current_time' => now()]);
    
        if ($user && $user->otp === $request->otp && now()->lessThanOrEqualTo($user->otp_expiration)) {
            $user->update(['otp' => null, 'otp_expiration' => null, 'verified' => true]);
            return response()->json(['message' => 'OTP verified successfully']);
        }
    
        return response()->json(['message' => 'Invalid OTP or OTP expired'], 401);
    }


    public function resendOtp(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|string|email|max:255',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $user = User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    // Delete existing OTPs
    UserOtp::where('user_id', $user->id)->delete();

    // Generate and save new OTP
    $otp = rand(100000, 999999);
    UserOtp::create([
        'user_id' => $user->id,
        'otp' => $otp,
        'expires_at' => now()->addMinutes(5),
    ]);

    // Send new OTP via Email
    Mail::to($user->email)->send(new OtpEmail($otp));

    return response()->json(['message' => 'New OTP sent to your email.'], 200);
}

public function login(Request $request)
{
    if (!auth()->attempt($request->only('email', 'password'))) {
        return response()->json(['message' => 'Invalid login details'], 401);
    }

    $user = User::where('email', $request->email)->firstOrFail();

    if (!$user->verified) {
        return response()->json(['message' => 'Email not verified'], 403);
    }

    return response()->json(['token' => $user->createToken('auth_token')->plainTextToken]);
}
}
