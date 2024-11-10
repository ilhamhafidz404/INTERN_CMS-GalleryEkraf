<?php

namespace App\Exports;

use App\Models\UMKM;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class UMKMExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return UMKM::select('name', 'owner', 'location')->get();
    }

    /**
    * Define the headings for the columns.
    *
    * @return array
    */
    public function headings(): array
    {
        return [
            'Nama UMKM',
            'Nama Pemilik',
            'Alamat',
        ];
    }
}
