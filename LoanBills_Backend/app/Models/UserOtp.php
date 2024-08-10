<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class UserOtp extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'otp', 'expires_at'];

    // Cast expires_at to a Carbon instance
    protected $casts = [
        'expires_at' => 'datetime',
    ];

    public function isExpired()
    {
        // Check if expires_at is in the past
        return $this->expires_at->isPast();
    }
}
