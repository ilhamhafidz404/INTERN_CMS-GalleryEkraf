<?php

namespace Database\Seeders;

use App\Models\Subsector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubsectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Subsector::insert([
            [
                "name" => "Kuliner",
                "slug" => "kuliner",
                "description" => "",
            ],
            [
                "name" => "Fashion",
                "slug" => "fashion",
                "description" => "",
            ],
            [
                "name" => "Kriya",
                "slug" => "kriya",
                "description" => "",
            ],
            [
                "name" => "Televisi & Radio",
                "slug" => "tv-dan-radio",
                "description" => "",
            ],
            [
                "name" => "Penerbitan",
                "slug" => "penerbitan",
                "description" => "",
            ],
            [
                "name" => "Arsitektur",
                "slug" => "arsitektur",
                "description" => "",
            ],
            [
                "name" => "Periklanan",
                "slug" => "periklanan",
                "description" => "",
            ],
            [
                "name" => "Musik",
                "slug" => "musik",
                "description" => "",
            ],
            [
                "name" => "Fotografi",
                "slug" => "fotografi",
                "description" => "",
            ],
            [
                "name" => "Seni Pertunjukan",
                "slug" => "seni-pertunjukan",
                "description" => "",
            ],
            [
                "name" => "Desain Produk",
                "slug" => "desain-produk",
                "description" => "",
            ],
            [
                "name" => "Seni Rupa",
                "slug" => "seni-rupa",
                "description" => "",
            ],
            [
                "name" => "Desain Interior",
                "slug" => "desain-interior",
                "description" => "",
            ],
            [
                "name" => "Film, Animasi, dan Video",
                "slug" => "film-animasi-dan-video",
                "description" => "",
            ],
            [
                "name" => "DKV",
                "slug" => "dkv",
                "description" => "",
            ],
            [
                "name" => "Aplikasi",
                "slug" => "aplikasi",
                "description" => "",
            ],
            [
                "name" => "Game",
                "slug" => "game",
                "description" => "",
            ],
        ]);
    }
}
