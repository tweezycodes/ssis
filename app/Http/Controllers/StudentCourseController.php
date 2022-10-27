<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\StudentCourse;
use App\Http\Requests\StudentCoursePostRequest;

class StudentCourseController extends Controller
{
    public function index(Request $requests)
    {
        return StudentCourse::select('id', 'student_id', 'course_id', 'created_at')
        ->with(['student:id,name,student_number', 'course:id,program_id,code,name', 'course.program:id,code,college_id', 'course.program.college:id,code'])
        ->get();
    }

    public function store(StudentCoursePostRequest $request)
    {
        if(!StudentCourse::where('student_id', $request->student_id)->where('course_id', $request->course_id)->first()){
            return StudentCourse::create($request->only('student_id', 'course_id'));
        }

        return response()->json(['errors' => ['message' => ['Student is already enrolled in this course.']]], 422);
    }

    public function destroy(StudentCourse $studentCourse)
    {
        $studentCourse->delete();
    }
}
