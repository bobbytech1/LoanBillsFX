<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserOtp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Services\OtpService;
use App\Services\EmailService;

class UserAuthController extends Controller
{
    protected $otpService;
    protected $emailService;

    public function __construct(OtpService $otpService, EmailService $emailService)
    {
        $this->otpService = $otpService;
        $this->emailService = $emailService;
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'country' => 'required|string|max:50',
            'password' => 'required|string|min:8',
        ]);
        
        $existingUser = User::where('email', $request->email)->first();

        if ($existingUser) {
            // Resend OTP to existing user
            $this->otpService->generateOtp($existingUser);
            return response()->json(['message' => 'This email is already registered. A new OTP has been sent.'], 200);
        }
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'country' => $request->country,
            'password' => Hash::make($request->password),
        ]);
        
        // Generate OTP and send email
        $this->otpService->generateOtp($user);

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
        $userOtp = $this->otpService->verifyOtp($user, $request->otp);

        if ($user && $userOtp) {
            $user->update(['verified' => true]);
            $userOtp->delete();

            // Send welcome email
            $this->emailService->sendWelcomeEmail($user);

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

        // Generate OTP and send email
        $this->otpService->generateOtp($user);

        return response()->json(['message' => 'New OTP sent to your email.'], 200);
    }

    public function login(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
        // Attempt to authenticate the user
        if (!auth()->attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }
    
        try {
            // Fetch the user
            $user = User::where('email', $request->email)->firstOrFail();
    
            // Check if the user is verified
            if (!$user->verified) {
                return response()->json(['message' => 'Email not verified'], 403);
            }
    
            // Create and return the token
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json(['token' => $token]);
    
        } catch (\Exception $e) {
            // Log the exception for debugging
            \Log::error('Login error: ' . $e->getMessage());
    
            // Return a generic error message
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }
    
}
