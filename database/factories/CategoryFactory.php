<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->unique()->words(2, true);

        return [
            'slug' => Str::slug($title),
            'title' => Str::title($title),
            'eyebrow' => Str::upper(fake()->words(3, true)),
            'description' => fake()->sentence(12),
            'hero' => '1a9ca.png',
            'sort_order' => fake()->numberBetween(1, 100),
            'is_active' => true,
        ];
    }
}
