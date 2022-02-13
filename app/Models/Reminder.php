<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    use HasFactory, Uuid;

    public $incrementing = false;
    
    protected $fillable = ['client_id', 'next_date'];
}
