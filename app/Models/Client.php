<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Client extends Model
{
    use Uuid, HasFactory, SoftDeletes, Notifiable;

    public $incrementing = false;

    protected $keyType = 'uuid';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'date_profiled',
        'primary_legal_counsel',
        'date_of_birth',
        'profile_image',
        'case_details'
    ];

    /** Accessors and Mutators */

    public function setEmaillAttribute($value) {
        $this->attributes['email'] = strtolower($value);
    }

}
