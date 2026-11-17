<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductCollection;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CatalogSeeder extends Seeder
{
    public function run(): void
    {
        DB::transaction(function (): void {
            $categories = $this->seedCategories();
            $products = $this->seedProducts($categories);

            $this->syncCategoryProducts($categories, $products);
            $this->seedCollections($products);
        });
    }

    /**
     * @return array<string, Category>
     */
    private function seedCategories(): array
    {
        $categoryData = [
            'smartphones' => ['eyebrow' => 'CONNECTED, BEAUTIFULLY', 'title' => 'Smartphones', 'description' => 'Powerful cameras, thoughtful design and all-day performance—selected for the way you communicate, create and move.', 'hero' => '1a9ca.png', 'sort_order' => 1],
            'laptops' => ['eyebrow' => 'FOR YOUR NEXT BIG IDEA', 'title' => 'Laptops', 'description' => 'Portable performance and beautifully considered hardware for deep work, creative projects and everything between.', 'hero' => 'ce84b.png', 'sort_order' => 2],
            'tablets' => ['eyebrow' => 'POSSIBILITY, IN YOUR HANDS', 'title' => 'Tablets', 'description' => 'Flexible screens for sketching, streaming, focused work and lighter days away from your desk.', 'hero' => '0aacd.png', 'sort_order' => 3],
            'mobile-accessories' => ['eyebrow' => 'THE DETAILS MAKE THE DIFFERENCE', 'title' => 'Mobile accessories', 'description' => 'Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.', 'hero' => '745a4.png', 'sort_order' => 4],
            'audio' => ['eyebrow' => 'LISTEN WITH INTENTION', 'title' => 'Audio', 'description' => 'Immersive sound, considered comfort and dependable listening for work, travel and slower moments.', 'hero' => '6d140.png', 'sort_order' => 5],
        ];

        $categories = [];

        foreach ($categoryData as $slug => $attributes) {
            $categories[$slug] = Category::query()->updateOrCreate(
                ['slug' => $slug],
                [...$attributes, 'is_active' => true],
            );
        }

        return $categories;
    }

    /**
     * @param  array<string, Category>  $categories
     * @return array<string, Product>
     */
    private function seedProducts(array $categories): array
    {
        $productData = [
            'iphone-13-pro' => ['primary_category' => 'smartphones', 'brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'detail' => '128GB · Unlocked', 'price' => 999.00, 'image' => '2d2a2.png', 'colors' => ['Graphite', 'Silver', 'Sierra Blue'], 'featured_position' => 1],
            'galaxy-s23-ultra' => ['primary_category' => 'smartphones', 'brand' => 'SAMSUNG', 'name' => 'Galaxy S23 Ultra', 'detail' => '256GB · Unlocked', 'price' => 1199.00, 'image' => '46886.png', 'colors' => ['Phantom Black', 'Cream', 'Green'], 'featured_position' => 4],
            'pixel-8-pro' => ['primary_category' => 'smartphones', 'brand' => 'GOOGLE', 'name' => 'Pixel 8 Pro', 'detail' => '128GB · Unlocked', 'price' => 999.00, 'image' => '1a9ca.png', 'colors' => ['Obsidian', 'Porcelain']],
            'nothing-phone-2' => ['primary_category' => 'smartphones', 'brand' => 'NOTHING', 'name' => 'Phone (2)', 'detail' => '256GB · Unlocked', 'price' => 699.00, 'image' => '2d2a2.png', 'colors' => ['White', 'Black']],
            'macbook-pro-14' => ['primary_category' => 'laptops', 'brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'detail' => 'M1 Pro · 16GB RAM · 512GB SSD', 'price' => 1999.00, 'image' => 'b0999.png', 'colors' => ['Space Gray', 'Silver'], 'featured_position' => 2],
            'dell-xps-13' => ['primary_category' => 'laptops', 'brand' => 'DELL', 'name' => 'XPS 13', 'detail' => '13.4″ · 16GB RAM · 512GB SSD', 'price' => 1299.00, 'image' => 'ce84b.png', 'colors' => ['Platinum', 'Graphite']],
            'surface-laptop-5' => ['primary_category' => 'laptops', 'brand' => 'MICROSOFT', 'name' => 'Surface Laptop 5', 'detail' => '13.5″ · 16GB RAM · 512GB SSD', 'price' => 1499.00, 'image' => '13c3c.png', 'colors' => ['Platinum', 'Black']],
            'framework-laptop-13' => ['primary_category' => 'laptops', 'brand' => 'FRAMEWORK', 'name' => 'Laptop 13', 'detail' => '13.5″ · 16GB RAM · 512GB SSD', 'price' => 1249.00, 'image' => 'b0999.png', 'colors' => ['Silver']],
            'galaxy-tab-s8' => ['primary_category' => 'tablets', 'brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'detail' => '11″ display · 128GB · Wi-Fi', 'price' => 699.00, 'image' => 'a1a1c.png', 'colors' => ['Graphite', 'Silver', 'Pink Gold'], 'featured_position' => 3],
            'ipad-air' => ['primary_category' => 'tablets', 'brand' => 'APPLE', 'name' => 'iPad Air', 'detail' => '10.9″ display · 128GB · Wi-Fi', 'price' => 599.00, 'image' => '0aacd.png', 'colors' => ['Space Gray', 'Blue', 'Starlight']],
            'surface-pro-9' => ['primary_category' => 'tablets', 'brand' => 'MICROSOFT', 'name' => 'Surface Pro 9', 'detail' => '13″ display · 256GB · Wi-Fi', 'price' => 999.00, 'image' => 'a1a1c.png', 'colors' => ['Platinum', 'Graphite']],
            'lenovo-tab-p12' => ['primary_category' => 'tablets', 'brand' => 'LENOVO', 'name' => 'Tab P12', 'detail' => '12.7″ display · 128GB · Wi-Fi', 'price' => 349.00, 'image' => '0aacd.png', 'colors' => ['Storm Gray']],
            'boostcharge-pro' => ['primary_category' => 'mobile-accessories', 'brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'detail' => '15W wireless charging · MagSafe', 'price' => 149.00, 'image' => '25fc8.png', 'colors' => ['White', 'Black'], 'essential_position' => 2],
            'mx-keys-mini' => ['primary_category' => 'mobile-accessories', 'brand' => 'LOGITECH', 'name' => 'MX Keys Mini', 'detail' => 'Wireless keyboard', 'price' => 99.00, 'image' => 'a3684.png', 'colors' => ['Graphite', 'Pale Gray', 'Rose'], 'essential_position' => 3],
            'magsafe-battery-pack' => ['primary_category' => 'mobile-accessories', 'brand' => 'APPLE', 'name' => 'MagSafe Battery Pack', 'detail' => 'Portable magnetic charging', 'price' => 99.00, 'image' => '745a4.png', 'colors' => ['White']],
            'anker-735-charger' => ['primary_category' => 'mobile-accessories', 'brand' => 'ANKER', 'name' => '735 GaN Charger', 'detail' => '65W · Three ports · USB-C', 'price' => 59.00, 'image' => '25fc8.png', 'colors' => ['Black']],
            'airpods-pro' => ['primary_category' => 'audio', 'brand' => 'APPLE', 'name' => 'AirPods Pro', 'detail' => 'Active noise cancellation · USB-C', 'price' => 249.00, 'image' => '8f66f.png', 'colors' => ['White'], 'essential_position' => 1],
            'sony-wh-1000xm5' => ['primary_category' => 'audio', 'brand' => 'SONY', 'name' => 'Sony WH-1000XM5', 'detail' => 'Noise cancelling · 30-hour battery', 'price' => 399.00, 'image' => '6d140.png', 'colors' => ['Black', 'Silver', 'Midnight Blue'], 'essential_position' => 4],
            'bose-qc-ultra' => ['primary_category' => 'audio', 'brand' => 'BOSE', 'name' => 'QuietComfort Ultra', 'detail' => 'Immersive audio · Noise cancelling', 'price' => 429.00, 'image' => 'e1a76.png', 'colors' => ['Black', 'White Smoke']],
            'beats-studio-pro' => ['primary_category' => 'audio', 'brand' => 'BEATS', 'name' => 'Studio Pro', 'detail' => 'Spatial audio · USB-C', 'price' => 349.00, 'image' => '6d140.png', 'colors' => ['Black', 'Sandstone']],
        ];

        $products = [];

        foreach ($productData as $slug => $attributes) {
            $primaryCategorySlug = $attributes['primary_category'];
            unset($attributes['primary_category']);

            $products[$slug] = Product::query()->updateOrCreate(
                ['slug' => $slug],
                [
                    ...$attributes,
                    'primary_category_id' => $categories[$primaryCategorySlug]->id,
                    'featured_position' => $attributes['featured_position'] ?? null,
                    'essential_position' => $attributes['essential_position'] ?? null,
                    'is_active' => true,
                ],
            );
        }

        return $products;
    }

    /**
     * @param  array<string, Category>  $categories
     * @param  array<string, Product>  $products
     */
    private function syncCategoryProducts(array $categories, array $products): void
    {
        $categoryProducts = [
            'smartphones' => ['iphone-13-pro', 'galaxy-s23-ultra', 'pixel-8-pro', 'nothing-phone-2'],
            'laptops' => ['macbook-pro-14', 'dell-xps-13', 'surface-laptop-5', 'framework-laptop-13'],
            'tablets' => ['galaxy-tab-s8', 'ipad-air', 'surface-pro-9', 'lenovo-tab-p12'],
            'mobile-accessories' => ['boostcharge-pro', 'airpods-pro', 'magsafe-battery-pack', 'anker-735-charger'],
            'audio' => ['airpods-pro', 'sony-wh-1000xm5', 'bose-qc-ultra', 'beats-studio-pro'],
        ];

        foreach ($categoryProducts as $categorySlug => $productSlugs) {
            $categories[$categorySlug]->products()->sync(
                collect($productSlugs)->mapWithKeys(
                    fn (string $productSlug, int $position): array => [
                        $products[$productSlug]->id => ['position' => $position + 1],
                    ],
                )->all(),
            );
        }
    }

    /**
     * @param  array<string, Product>  $products
     */
    private function seedCollections(array $products): void
    {
        $collectionData = [
            'everyday-edit' => ['eyebrow' => 'CURATED FOR EVERYDAY', 'title' => 'The everyday edit', 'description' => 'A balanced selection of capable, beautifully designed technology for communication, focus and downtime.', 'hero' => '7c3c6.png', 'sort_order' => 1, 'products' => ['iphone-13-pro', 'galaxy-tab-s8', 'airpods-pro']],
            'workspace-edit' => ['eyebrow' => 'WORK, CONSIDERED', 'title' => 'The workspace edit', 'description' => 'Focused tools that bring clarity, comfort and dependable performance to the place where ideas become real.', 'hero' => '8a59d.png', 'sort_order' => 2, 'products' => ['macbook-pro-14', 'mx-keys-mini', 'boostcharge-pro']],
            'audio-essentials' => ['eyebrow' => 'SOUND, REFINED', 'title' => 'Audio essentials', 'description' => 'Immersive listening selected for thoughtful details, lasting comfort and less distraction.', 'hero' => '6d140.png', 'sort_order' => 3, 'products' => ['airpods-pro', 'sony-wh-1000xm5']],
            'new-arrivals' => ['eyebrow' => 'JUST IN', 'title' => 'New arrivals', 'description' => 'The latest additions to the Forme selection, chosen for usefulness, quality and enduring design.', 'hero' => '8f66f.png', 'sort_order' => 4, 'products' => ['airpods-pro', 'boostcharge-pro']],
        ];

        foreach ($collectionData as $slug => $attributes) {
            $productSlugs = $attributes['products'];
            unset($attributes['products']);

            $collection = ProductCollection::query()->updateOrCreate(
                ['slug' => $slug],
                [...$attributes, 'is_active' => true],
            );

            $collection->products()->sync(
                collect($productSlugs)->mapWithKeys(
                    fn (string $productSlug, int $position): array => [
                        $products[$productSlug]->id => ['position' => $position + 1],
                    ],
                )->all(),
            );
        }
    }
}
