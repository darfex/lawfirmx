<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Client extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'primary_legal_counsel',
        'date_of_birth',
        'image',
        'case_details'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
