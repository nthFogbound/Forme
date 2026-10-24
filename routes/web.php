<?php

use Illuminate\Support\Facades\Route;

$catalog = require dirname(__DIR__).'/resources/data/catalog.php';

Route::get('/', fn () => view('storefront', ['catalog' => $catalog]))->name('storefront');

Route::get('/categories/{category}', function (string $category) use ($catalog) {
    abort_unless(isset($catalog['categories'][$category]), 404);
    $selected = $catalog['categories'][$category];
    $selected['products'] = collect($selected['products'])
        ->map(fn (string $slug) => ['slug' => $slug, ...$catalog['products'][$slug]])
        ->all();

    return view('category', ['category' => $selected]);
})->name('categories.show');

Route::get('/collections/{collection}', function (string $collection) use ($catalog) {
    $collections = [
        'everyday-edit' => ['eyebrow' => 'CURATED FOR EVERYDAY', 'title' => 'The everyday edit', 'description' => 'A balanced selection of capable, beautifully designed technology for communication, focus and downtime.', 'hero' => '7c3c6.png', 'products' => ['iphone-13-pro', 'galaxy-tab-s8', 'airpods-pro']],
        'workspace-edit' => ['eyebrow' => 'WORK, CONSIDERED', 'title' => 'The workspace edit', 'description' => 'Focused tools that bring clarity, comfort and dependable performance to the place where ideas become real.', 'hero' => '8a59d.png', 'products' => ['macbook-pro-14', 'mx-keys-mini', 'boostcharge-pro']],
        'audio-essentials' => ['eyebrow' => 'SOUND, REFINED', 'title' => 'Audio essentials', 'description' => 'Immersive listening selected for thoughtful details, lasting comfort and less distraction.', 'hero' => '6d140.png', 'products' => ['airpods-pro', 'sony-wh-1000xm5']],
        'new-arrivals' => ['eyebrow' => 'JUST IN', 'title' => 'New arrivals', 'description' => 'The latest additions to the Forme selection, chosen for usefulness, quality and enduring design.', 'hero' => '8f66f.png', 'products' => ['airpods-pro', 'boostcharge-pro']],
    ];

    abort_unless(isset($collections[$collection]), 404);
    $selected = $collections[$collection];
    $selected['products'] = collect($selected['products'])
        ->map(fn (string $slug) => ['slug' => $slug, ...$catalog['products'][$slug]])
        ->all();

    return view('collection', ['collection' => $selected]);
})->name('collections.show');

Route::get('/products/{product}', function (string $product) use ($catalog) {
    abort_unless(isset($catalog['products'][$product]), 404);

    return view('product', ['product' => $catalog['products'][$product], 'slug' => $product]);
})->name('products.show');
