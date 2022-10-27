<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function(Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('student_number')->nullable();
            $table->timestamps();
        });

        Schema::create('colleges', function(Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('programs', function(Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->biginteger('college_id')->unsigned();
            $table->foreign('college_id')->references('id')->on('colleges');
            $table->timestamps();
        });

        Schema::create('courses', function(Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->biginteger('program_id')->unsigned();
            $table->foreign('program_id')->references('id')->on('programs');
            $table->timestamps();
        });

        Schema::create('student_courses', function(Blueprint $table) {
            $table->id();
            $table->biginteger('course_id')->unsigned();
            $table->foreign('course_id')->references('id')->on('courses');
            $table->biginteger('student_id')->unsigned();
            $table->foreign('student_id')->references('id')->on('students');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_courses');
        Schema::dropIfExists('courses');
        Schema::dropIfExists('programs');
        Schema::dropIfExists('colleges');
        Schema::dropIfExists('students');
    }
};
