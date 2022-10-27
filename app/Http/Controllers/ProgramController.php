<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Program;

class ProgramController extends Controller
{
    public function index(Request $requests)
    {
        return Program::with('college:id,name,code')->get();
    }
}
