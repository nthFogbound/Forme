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
                ['brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'detail' => '128GB · Unlocked · Graphite', 'price' => '$999.00', 'image' => '2d2a2.png'],
                ['brand' => 'SAMSUNG', 'name' => 'Galaxy S23 Ultra', 'detail' => '256GB · Unlocked · Phantom black', 'price' => '$1,199.00', 'image' => '46886.png'],
            ],
        ],
        'laptops' => [
            'eyebrow' => 'FOR YOUR NEXT BIG IDEA',
            'title' => 'Laptops',
            'description' => 'Portable performance and beautifully considered hardware for deep work, creative projects and everything between.',
            'hero' => 'ce84b.png',
            'products' => [
                ['brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'detail' => 'M1 Pro · 16GB RAM · 512GB SSD', 'price' => '$1,999.00', 'image' => 'b0999.png'],
            ],
        ],
        'tablets' => [
            'eyebrow' => 'POSSIBILITY, IN YOUR HANDS',
            'title' => 'Tablets',
            'description' => 'Flexible screens for sketching, streaming, focused work and lighter days away from your desk.',
            'hero' => '0aacd.png',
            'products' => [
                ['brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'detail' => '11″ display · 128GB · Wi-Fi', 'price' => '$699.00', 'image' => 'a1a1c.png'],
            ],
        ],
        'mobile-accessories' => [
            'eyebrow' => 'THE DETAILS MAKE THE DIFFERENCE',
            'title' => 'Mobile accessories',
            'description' => 'Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.',
            'hero' => '745a4.png',
            'products' => [
                ['brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'detail' => '15W wireless charging · MagSafe', 'price' => '$149.00', 'image' => '25fc8.png'],
                ['brand' => 'APPLE', 'name' => 'AirPods Pro', 'detail' => 'Active noise cancellation · USB-C', 'price' => '$249.00', 'image' => '8f66f.png'],
            ],
        ],
    ];

    abort_unless(isset($categories[$category]), 404);

    return view('category', ['category' => $categories[$category]]);
})->name('categories.show');
