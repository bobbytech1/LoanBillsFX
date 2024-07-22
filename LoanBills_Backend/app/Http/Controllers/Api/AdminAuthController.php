<?php

// app/Http/Controllers/Api/AdminAuthController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminAuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $admin = Admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['token' => $admin->createToken('auth_token')->plainTextToken]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!auth()->guard('admin')->attempt($credentials)) {
            return response()->json(['message' => 'Invalid login details'], 401);
        }

        $admin = Admin::where('email', $request->email)->firstOrFail();

        return response()->json(['token' => $admin->createToken('auth_token')->plainTextToken]);
    }
}
