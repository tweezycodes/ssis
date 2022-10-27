<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Http\Requests\StudentPostRequest;
use App\Http\Requests\StudentUpdateRequest;

class StudentController extends Controller
{
    public function index(Request $requests)
    {
        return Student::get();
    }

    public function show(Student $student)
    {
        return Student::with('studentCourses.course.program')->find($student->id);
    }

    public function store(StudentPostRequest $request)
    {
        return Student::create($request->only('name', 'student_number'));
    }

    public function update(StudentUpdateRequest $request, Student $student)
    {
        $student->update($request->only('name', 'student_number'));
        return response()->json($student->toArray(), 200);
    }

    public function destroy(Student $student)
    {
        $student->delete();
    }
}
