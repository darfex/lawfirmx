<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Throwable;

trait Uuid
{

    protected static function boot() {
        parent::boot();

        static::creating(function($model){
            try {
                $model->id = (string) Str::uuid();
            } catch (Throwable $e) {
                abort(500, $e->getMessage());
            }
        });
    }

}
