<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_number',
        'name',
    ];

    public function studentCourses()
    {
        return $this->hasMany('App\Models\StudentCourse', 'student_id');
    }
}
