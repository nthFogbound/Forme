<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->unique()->words(3, true);

        return [
            'primary_category_id' => Category::factory(),
            'slug' => Str::slug($name),
            'brand' => Str::upper(fake()->company()),
            'name' => Str::title($name),
            'detail' => fake()->sentence(5),
            'price' => fake()->randomFloat(2, 49, 2499),
            'image' => '2d2a2.png',
            'colors' => ['Black', 'Silver'],
            'is_active' => true,
            'featured_position' => null,
            'essential_position' => null,
        ];
    }
}
