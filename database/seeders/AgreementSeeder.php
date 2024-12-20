<?php

namespace Database\Seeders;

use App\Models\Agreement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AgreementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Agreement::create([
            "name" => "test",
            "slug" => "test",
            "description" => "test"
        ]);
    }
}
