<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(Request $requests)
    {
        return Course::with('program:id,name,code')->get();
    }
}
