<?php

namespace Database\Factories;

use App\Models\ProductCollection;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<ProductCollection>
 */
class ProductCollectionFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->words(3, true);

        return [
            'slug' => Str::slug($title),
            'eyebrow' => Str::upper(fake()->words(3, true)),
            'title' => Str::title($title),
            'description' => fake()->sentence(12),
            'hero' => '7c3c6.png',
            'sort_order' => fake()->numberBetween(1, 100),
            'is_active' => true,
        ];
    }
}
