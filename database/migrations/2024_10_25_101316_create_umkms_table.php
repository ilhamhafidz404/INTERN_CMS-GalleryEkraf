<?php

use App\Models\Subsector;
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
        Schema::create('UMKMs', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("slug")->unique();
            $table->text("description");
            $table->string("owner");
            $table->string("image1");
            $table->string("image2")->nullable();
            $table->string("image3")->nullable();
            $table->string("shopee_link")->nullable();
            $table->string("tokopedia_link")->nullable();
            $table->string("instagram_link")->nullable();
            $table->string("tiktok_link")->nullable();
            $table->string("youtube_link")->nullable();
            $table->string("x_link")->nullable();
            $table->string("whatsapp_link")->nullable();
            $table->foreignIdFor(Subsector::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('UMKMs');
    }
};
