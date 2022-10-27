<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    public function program()
    {
        return $this->belongsTo('App\Models\Program', 'program_id');
    }
}
