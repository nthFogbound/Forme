<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'storefront')->name('storefront');

Route::get('/categories/{category}', function (string $category) {
    $categories = [
        'smartphones' => [
            'eyebrow' => 'CONNECTED, BEAUTIFULLY',
            'title' => 'Smartphones',
            'description' => 'Powerful cameras, thoughtful design and all-day performance—selected for the way you communicate, create and move.',
            'hero' => '1a9ca.png',
            'products' => [
                ['slug' => 'iphone-13-pro', 'brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'detail' => '128GB · Unlocked · Graphite', 'price' => '$999.00', 'image' => '2d2a2.png'],
                ['slug' => 'galaxy-s23-ultra', 'brand' => 'SAMSUNG', 'name' => 'Galaxy S23 Ultra', 'detail' => '256GB · Unlocked · Phantom black', 'price' => '$1,199.00', 'image' => '46886.png'],
            ],
        ],
        'laptops' => [
            'eyebrow' => 'FOR YOUR NEXT BIG IDEA',
            'title' => 'Laptops',
            'description' => 'Portable performance and beautifully considered hardware for deep work, creative projects and everything between.',
            'hero' => 'ce84b.png',
            'products' => [
                ['slug' => 'macbook-pro-14', 'brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'detail' => 'M1 Pro · 16GB RAM · 512GB SSD', 'price' => '$1,999.00', 'image' => 'b0999.png'],
            ],
        ],
        'tablets' => [
            'eyebrow' => 'POSSIBILITY, IN YOUR HANDS',
            'title' => 'Tablets',
            'description' => 'Flexible screens for sketching, streaming, focused work and lighter days away from your desk.',
            'hero' => '0aacd.png',
            'products' => [
                ['slug' => 'galaxy-tab-s8', 'brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'detail' => '11″ display · 128GB · Wi-Fi', 'price' => '$699.00', 'image' => 'a1a1c.png'],
            ],
        ],
        'mobile-accessories' => [
            'eyebrow' => 'THE DETAILS MAKE THE DIFFERENCE',
            'title' => 'Mobile accessories',
            'description' => 'Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.',
            'hero' => '745a4.png',
            'products' => [
                ['slug' => 'boostcharge-pro', 'brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'detail' => '15W wireless charging · MagSafe', 'price' => '$149.00', 'image' => '25fc8.png'],
                ['slug' => 'airpods-pro', 'brand' => 'APPLE', 'name' => 'AirPods Pro', 'detail' => 'Active noise cancellation · USB-C', 'price' => '$249.00', 'image' => '8f66f.png'],
            ],
        ],
        'audio' => [
            'eyebrow' => 'LISTEN WITH INTENTION',
            'title' => 'Audio',
            'description' => 'Immersive sound, considered comfort and dependable listening for work, travel and slower moments.',
            'hero' => '6d140.png',
            'products' => [
                ['slug' => 'airpods-pro', 'brand' => 'APPLE', 'name' => 'AirPods Pro', 'detail' => 'Active noise cancellation · USB-C', 'price' => '$249.00', 'image' => '8f66f.png'],
                ['slug' => 'sony-wh-1000xm5', 'brand' => 'SONY', 'name' => 'Sony WH-1000XM5', 'detail' => 'Noise cancelling · 30-hour battery', 'price' => '$399.00', 'image' => '6d140.png'],
            ],
        ],
    ];

    abort_unless(isset($categories[$category]), 404);

    return view('category', ['category' => $categories[$category]]);
})->name('categories.show');

Route::get('/collections/{collection}', function (string $collection) {
    $products = [
        'iphone-13-pro' => ['brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'price' => '$999.00', 'image' => '2d2a2.png'],
        'galaxy-tab-s8' => ['brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'price' => '$699.00', 'image' => 'a1a1c.png'],
        'airpods-pro' => ['brand' => 'APPLE', 'name' => 'AirPods Pro', 'price' => '$249.00', 'image' => '8f66f.png'],
        'macbook-pro-14' => ['brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'price' => '$1,999.00', 'image' => 'b0999.png'],
        'mx-keys-mini' => ['brand' => 'LOGITECH', 'name' => 'MX Keys Mini', 'price' => '$99.00', 'image' => 'a3684.png'],
        'boostcharge-pro' => ['brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'price' => '$149.00', 'image' => '25fc8.png'],
        'sony-wh-1000xm5' => ['brand' => 'SONY', 'name' => 'Sony WH-1000XM5', 'price' => '$399.00', 'image' => '6d140.png'],
    ];
    $collections = [
        'everyday-edit' => ['eyebrow' => 'CURATED FOR EVERYDAY', 'title' => 'The everyday edit', 'description' => 'A balanced selection of capable, beautifully designed technology for communication, focus and downtime.', 'hero' => '7c3c6.png', 'products' => ['iphone-13-pro', 'galaxy-tab-s8', 'airpods-pro']],
        'workspace-edit' => ['eyebrow' => 'WORK, CONSIDERED', 'title' => 'The workspace edit', 'description' => 'Focused tools that bring clarity, comfort and dependable performance to the place where ideas become real.', 'hero' => '8a59d.png', 'products' => ['macbook-pro-14', 'mx-keys-mini', 'boostcharge-pro']],
        'audio-essentials' => ['eyebrow' => 'SOUND, REFINED', 'title' => 'Audio essentials', 'description' => 'Immersive listening selected for thoughtful details, lasting comfort and less distraction.', 'hero' => '6d140.png', 'products' => ['airpods-pro', 'sony-wh-1000xm5']],
        'new-arrivals' => ['eyebrow' => 'JUST IN', 'title' => 'New arrivals', 'description' => 'The latest additions to the Forme selection, chosen for usefulness, quality and enduring design.', 'hero' => '8f66f.png', 'products' => ['airpods-pro', 'boostcharge-pro']],
    ];

    abort_unless(isset($collections[$collection]), 404);
    $selected = $collections[$collection];
    $selected['products'] = collect($selected['products'])->map(fn (string $slug) => ['slug' => $slug, ...$products[$slug]])->all();

    return view('collection', ['collection' => $selected]);
})->name('collections.show');

Route::get('/products/{product}', function (string $product) {
    $products = [
        'iphone-13-pro' => ['brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'category' => 'Smartphones', 'detail' => '128GB · Unlocked', 'price' => '$999.00', 'image' => '2d2a2.png', 'colors' => ['Graphite', 'Silver', 'Sierra Blue']],
        'macbook-pro-14' => ['brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'category' => 'Laptops', 'detail' => 'M1 Pro · 16GB RAM · 512GB SSD', 'price' => '$1,999.00', 'image' => 'b0999.png', 'colors' => ['Space Gray', 'Silver']],
        'galaxy-tab-s8' => ['brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'category' => 'Tablets', 'detail' => '11″ display · 128GB · Wi-Fi', 'price' => '$699.00', 'image' => 'a1a1c.png', 'colors' => ['Graphite', 'Silver', 'Pink Gold']],
        'galaxy-s23-ultra' => ['brand' => 'SAMSUNG', 'name' => 'Galaxy S23 Ultra', 'category' => 'Smartphones', 'detail' => '256GB · Unlocked', 'price' => '$1,199.00', 'image' => '46886.png', 'colors' => ['Phantom Black', 'Cream', 'Green']],
        'airpods-pro' => ['brand' => 'APPLE', 'name' => 'AirPods Pro', 'category' => 'Audio', 'detail' => 'Active noise cancellation · USB-C', 'price' => '$249.00', 'image' => '8f66f.png', 'colors' => ['White']],
        'boostcharge-pro' => ['brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'category' => 'Accessories', 'detail' => '15W wireless charging · MagSafe', 'price' => '$149.00', 'image' => '25fc8.png', 'colors' => ['White', 'Black']],
        'mx-keys-mini' => ['brand' => 'LOGITECH', 'name' => 'MX Keys Mini', 'category' => 'Accessories', 'detail' => 'Wireless keyboard', 'price' => '$99.00', 'image' => 'a3684.png', 'colors' => ['Graphite', 'Pale Gray', 'Rose']],
        'sony-wh-1000xm5' => ['brand' => 'SONY', 'name' => 'Sony WH-1000XM5', 'category' => 'Audio', 'detail' => 'Noise cancelling · 30-hour battery', 'price' => '$399.00', 'image' => '6d140.png', 'colors' => ['Black', 'Silver', 'Midnight Blue']],
    ];

    abort_unless(isset($products[$product]), 404);

    return view('product', ['product' => $products[$product], 'slug' => $product]);
})->name('products.show');
