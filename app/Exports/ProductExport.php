<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ProductExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Product::select("name", "price", "description")->get();
    }

    /**
    * Define the headings for the columns.
    *
    * @return array
    */
    public function headings(): array
    {
        return [
            'Nama',
            'Harga',
            'Deskripsi',
        ];
    }
}
