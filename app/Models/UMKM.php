<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UMKM extends Model
{
    use HasFactory;

    protected $table = "umkms";

    protected $guarded = ["id"];

    public function subsector() {
        return $this->belongsTo(Subsector::class);
    }
}
