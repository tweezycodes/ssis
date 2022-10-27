<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{CollegeController, CourseController, ProgramController, StudentController, StudentCourseController};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['middleware' => ['auth']], function() {
    Route::view('/{path?}', 'home');
    Route::view('/enrollments/{id}', 'home');

    Route::get('/students/get-all',  [StudentController::class, 'index']);
    Route::get('/colleges/get-all',  [CollegeController::class, 'index']);
    Route::get('/programs/get-all',  [ProgramController::class, 'index']);
    Route::get('/courses/get-all',  [CourseController::class, 'index']);
    Route::get('/student-courses/get-all',  [StudentCourseController::class, 'index']);

    Route::resource('/students', StudentController::class, ['only' => ['store', 'update', 'destroy', 'show']]);
    Route::resource('/student-courses', StudentCourseController::class, ['only' => ['store', 'destroy']]);
});

