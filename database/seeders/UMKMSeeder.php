<?php

namespace Database\Seeders;

use App\Models\UMKM;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UMKMSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UMKM::insert([
            [
                "name" => "Ilham Store",
                "slug" => "ilham-store",
                "owner" => "Ilham Hafidz",
                "location" => "Darma",
                "agreement_id" => 1,
                "description" => "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis alias labore nulla provident ut sunt, tenetur rem, cumque eos non ipsam ea nesciunt pariatur numquam modi sapiente veritatis. Optio, veniam.",
                "image1" => "default.jpg",
                "subsector_id" => 1,
                "created_at" => now(),
                "updated_at" => now(),
            ]
        ]);
    }
}
