<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('product_collection_product', function (Blueprint $table) {
            $table->foreignId('product_collection_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->unsignedSmallInteger('position')->default(0);

            $table->primary(['product_collection_id', 'product_id']);
            $table->index(['product_collection_id', 'position']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_collection_product');
    }
};
