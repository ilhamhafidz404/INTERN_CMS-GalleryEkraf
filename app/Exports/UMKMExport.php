<?php

namespace App\Exports;

use App\Models\UMKM;
use Maatwebsite\Excel\Concerns\FromCollection;

class UMKMExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return UMKM::all();
    }
}
