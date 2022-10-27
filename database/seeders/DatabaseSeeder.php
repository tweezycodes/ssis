<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@sis.com',
            'password' => Hash::make('admin'),
        ]);

        $cas = \App\Models\College::create([
            'code' => 'CAS',
            'name' => 'College of Arts and Sciences',
        ]);

        $cofed = \App\Models\College::create([
            'code' => 'COFED',
            'name' => 'College of Education',
        ]);

        $cme = \App\Models\College::create([
            'code' => 'CME',
            'name' => 'College of Management and Entrepreneurship',
        ]);

        $bsit = \App\Models\Program::create([
            'college_id'    => $cas->id,
            'code'          => 'BSIT',
            'name'          => 'Bachelor of Science in Information Technology',
        ]);

        $bssw = \App\Models\Program::create([
            'college_id'    => $cas->id,
            'code'          => 'BSSW',
            'name'          => 'Bachelor of Science in Social Work',
        ]);

        $abcom = \App\Models\Program::create([
            'college_id'    => $cas->id,
            'code'          => 'ABCOM',
            'name'          => 'Bachelor of Arts in Communication',
        ]);

        $abposci = \App\Models\Program::create([
            'college_id'    => $cas->id,
            'code'          => 'AB POSCI',
            'name'          => 'Bachelor of Arts in Political Science',
        ]);

        $beed = \App\Models\Program::create([
            'college_id'    => $cofed->id,
            'code'          => 'BEED',
            'name'          => 'Bachelor of Science in Elementary Education',
        ]);

        $bsed = \App\Models\Program::create([
            'college_id'    => $cofed->id,
            'code'          => 'BSED',
            'name'          => 'Bachelor of Science in Secondary Education',
        ]);

        $bsped = \App\Models\Program::create([
            'college_id'    => $cofed->id,
            'code'          => 'BSPED',
            'name'          => 'Bachelor of Science in Special Education',
        ]);


        $bstm = \App\Models\Program::create([
            'college_id'    => $cme->id,
            'code'          => 'BSTM',
            'name'          => 'Bachelor of Science in Tourism Management',
        ]);

        $bshm = \App\Models\Program::create([
            'college_id'    => $cme->id,
            'code'          => 'BSHM',
            'name'          => 'Bachelor of Science in Hospitality Management',
        ]);

        $bsentrep = \App\Models\Program::create([
            'college_id'    => $cme->id,
            'code'          => 'BSEntrep',
            'name'          => 'Bachelor of Science in Entrepreneurship',
        ]);

        $it_206 = \App\Models\Course::create([
            'program_id'    => $bsit->id,
            'code'         => 'IT_206',
            'name'         => 'IT Fundamentals',
        ]);

        $it_146 = \App\Models\Course::create([
            'program_id'    => $bsit->id,
            'code'         => 'IT_146',
            'name'         => 'Database Management',
        ]);

        $it_484 = \App\Models\Course::create([
            'program_id'    => $bsit->id,
            'code'         => 'IT_484',
            'name'         => 'Web Development',
        ]);

        $it_187 = \App\Models\Course::create([
            'program_id'    => $bsit->id,
            'code'         => 'IT_187',
            'name'         => 'Data Structures',
        ]);

        $it_386 = \App\Models\Course::create([
            'program_id'    => $bsit->id,
            'code'         => 'IT_385',
            'name'         => 'Systems Analysis and Design',
        ]);

        $bsed_160 = \App\Models\Course::create([
            'program_id'    => $bsed->id,
            'code'         => 'BSED_160',
            'name'         => 'Principles of Teaching',
        ]);

        $bsed_490 = \App\Models\Course::create([
            'program_id'    => $bsed->id,
            'code'         => 'BSED_490',
            'name'         => 'Facilitating Learning',
        ]);

        $bsed_457 = \App\Models\Course::create([
            'program_id'    => $bsed->id,
            'code'         => 'BSED_457',
            'name'         => 'Assessment of Student Learning',
        ]);

        $bsed_130 = \App\Models\Course::create([
            'program_id'    => $bsed->id,
            'code'         => 'BSED_130',
            'name'         => 'Social Dimensions of Education',
        ]);

        $bstm_453 = \App\Models\Course::create([
            'program_id'    => $bstm->id,
            'code'         => 'BSTM_453',
            'name'         => 'Total Quality Management',
        ]);

        $bstm_163 = \App\Models\Course::create([
            'program_id'    => $bstm->id,
            'code'         => 'BSTM_163',
            'name'         => 'Food and Beverage Service Procedures',
        ]);

        $bstm_294 = \App\Models\Course::create([
            'program_id'    => $bstm->id,
            'code'         => 'BSTM_294',
            'name'         => 'Toursim Planning and Development',
        ]);
    }
}
