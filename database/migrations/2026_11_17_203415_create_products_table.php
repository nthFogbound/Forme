<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('primary_category_id')->constrained('categories')->restrictOnDelete();
            $table->string('slug')->unique();
            $table->string('brand');
            $table->string('name');
            $table->string('detail')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('image');
            $table->json('colors');
            $table->boolean('is_active')->default(true);
            $table->unsignedSmallInteger('featured_position')->nullable();
            $table->unsignedSmallInteger('essential_position')->nullable();
            $table->timestamps();

            $table->index(['is_active', 'featured_position']);
            $table->index(['is_active', 'essential_position']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
