<?php

use App\Models\UMKM;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug")->unique();
            $table->integer("price");
            $table->text("description");
            $table->foreignIdFor(UMKM::class, "umkm_id")->constrained();
            $table->string("photo1");
            $table->string("photo2")->nullable();
            $table->string("photo3")->nullable();
            $table->string("shopee_link")->nullable();
            $table->string("tokopedia_link")->nullable();
            $table->string("whatsapp_link")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
