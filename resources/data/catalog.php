<?php

$products = [
    'iphone-13-pro' => ['brand' => 'APPLE', 'name' => 'iPhone 13 Pro', 'category' => 'Smartphones', 'detail' => '128GB · Unlocked', 'price' => '$999.00', 'image' => '2d2a2.png', 'colors' => ['Graphite', 'Silver', 'Sierra Blue']],
    'galaxy-s23-ultra' => ['brand' => 'SAMSUNG', 'name' => 'Galaxy S23 Ultra', 'category' => 'Smartphones', 'detail' => '256GB · Unlocked', 'price' => '$1,199.00', 'image' => '46886.png', 'colors' => ['Phantom Black', 'Cream', 'Green']],
    'pixel-8-pro' => ['brand' => 'GOOGLE', 'name' => 'Pixel 8 Pro', 'category' => 'Smartphones', 'detail' => '128GB · Unlocked', 'price' => '$999.00', 'image' => '1a9ca.png', 'colors' => ['Obsidian', 'Porcelain']],
    'nothing-phone-2' => ['brand' => 'NOTHING', 'name' => 'Phone (2)', 'category' => 'Smartphones', 'detail' => '256GB · Unlocked', 'price' => '$699.00', 'image' => '2d2a2.png', 'colors' => ['White', 'Black']],
    'macbook-pro-14' => ['brand' => 'APPLE', 'name' => 'MacBook Pro 14″', 'category' => 'Laptops', 'detail' => 'M1 Pro · 16GB RAM · 512GB SSD', 'price' => '$1,999.00', 'image' => 'b0999.png', 'colors' => ['Space Gray', 'Silver']],
    'dell-xps-13' => ['brand' => 'DELL', 'name' => 'XPS 13', 'category' => 'Laptops', 'detail' => '13.4″ · 16GB RAM · 512GB SSD', 'price' => '$1,299.00', 'image' => 'ce84b.png', 'colors' => ['Platinum', 'Graphite']],
    'surface-laptop-5' => ['brand' => 'MICROSOFT', 'name' => 'Surface Laptop 5', 'category' => 'Laptops', 'detail' => '13.5″ · 16GB RAM · 512GB SSD', 'price' => '$1,499.00', 'image' => '13c3c.png', 'colors' => ['Platinum', 'Black']],
    'framework-laptop-13' => ['brand' => 'FRAMEWORK', 'name' => 'Laptop 13', 'category' => 'Laptops', 'detail' => '13.5″ · 16GB RAM · 512GB SSD', 'price' => '$1,249.00', 'image' => 'b0999.png', 'colors' => ['Silver']],
    'galaxy-tab-s8' => ['brand' => 'SAMSUNG', 'name' => 'Galaxy Tab S8', 'category' => 'Tablets', 'detail' => '11″ display · 128GB · Wi-Fi', 'price' => '$699.00', 'image' => 'a1a1c.png', 'colors' => ['Graphite', 'Silver', 'Pink Gold']],
    'ipad-air' => ['brand' => 'APPLE', 'name' => 'iPad Air', 'category' => 'Tablets', 'detail' => '10.9″ display · 128GB · Wi-Fi', 'price' => '$599.00', 'image' => '0aacd.png', 'colors' => ['Space Gray', 'Blue', 'Starlight']],
    'surface-pro-9' => ['brand' => 'MICROSOFT', 'name' => 'Surface Pro 9', 'category' => 'Tablets', 'detail' => '13″ display · 256GB · Wi-Fi', 'price' => '$999.00', 'image' => 'a1a1c.png', 'colors' => ['Platinum', 'Graphite']],
    'lenovo-tab-p12' => ['brand' => 'LENOVO', 'name' => 'Tab P12', 'category' => 'Tablets', 'detail' => '12.7″ display · 128GB · Wi-Fi', 'price' => '$349.00', 'image' => '0aacd.png', 'colors' => ['Storm Gray']],
    'boostcharge-pro' => ['brand' => 'BELKIN', 'name' => 'BoostCharge Pro 3-in-1', 'category' => 'Accessories', 'detail' => '15W wireless charging · MagSafe', 'price' => '$149.00', 'image' => '25fc8.png', 'colors' => ['White', 'Black']],
    'mx-keys-mini' => ['brand' => 'LOGITECH', 'name' => 'MX Keys Mini', 'category' => 'Accessories', 'detail' => 'Wireless keyboard', 'price' => '$99.00', 'image' => 'a3684.png', 'colors' => ['Graphite', 'Pale Gray', 'Rose']],
    'magsafe-battery-pack' => ['brand' => 'APPLE', 'name' => 'MagSafe Battery Pack', 'category' => 'Accessories', 'detail' => 'Portable magnetic charging', 'price' => '$99.00', 'image' => '745a4.png', 'colors' => ['White']],
    'anker-735-charger' => ['brand' => 'ANKER', 'name' => '735 GaN Charger', 'category' => 'Accessories', 'detail' => '65W · Three ports · USB-C', 'price' => '$59.00', 'image' => '25fc8.png', 'colors' => ['Black']],
    'airpods-pro' => ['brand' => 'APPLE', 'name' => 'AirPods Pro', 'category' => 'Audio', 'detail' => 'Active noise cancellation · USB-C', 'price' => '$249.00', 'image' => '8f66f.png', 'colors' => ['White']],
    'sony-wh-1000xm5' => ['brand' => 'SONY', 'name' => 'Sony WH-1000XM5', 'category' => 'Audio', 'detail' => 'Noise cancelling · 30-hour battery', 'price' => '$399.00', 'image' => '6d140.png', 'colors' => ['Black', 'Silver', 'Midnight Blue']],
    'bose-qc-ultra' => ['brand' => 'BOSE', 'name' => 'QuietComfort Ultra', 'category' => 'Audio', 'detail' => 'Immersive audio · Noise cancelling', 'price' => '$429.00', 'image' => 'e1a76.png', 'colors' => ['Black', 'White Smoke']],
    'beats-studio-pro' => ['brand' => 'BEATS', 'name' => 'Studio Pro', 'category' => 'Audio', 'detail' => 'Spatial audio · USB-C', 'price' => '$349.00', 'image' => '6d140.png', 'colors' => ['Black', 'Sandstone']],
];

return [
    'products' => $products,
    'categories' => [
        'smartphones' => ['eyebrow' => 'CONNECTED, BEAUTIFULLY', 'title' => 'Smartphones', 'description' => 'Powerful cameras, thoughtful design and all-day performance—selected for the way you communicate, create and move.', 'hero' => '1a9ca.png', 'products' => ['iphone-13-pro', 'galaxy-s23-ultra', 'pixel-8-pro', 'nothing-phone-2']],
        'laptops' => ['eyebrow' => 'FOR YOUR NEXT BIG IDEA', 'title' => 'Laptops', 'description' => 'Portable performance and beautifully considered hardware for deep work, creative projects and everything between.', 'hero' => 'ce84b.png', 'products' => ['macbook-pro-14', 'dell-xps-13', 'surface-laptop-5', 'framework-laptop-13']],
        'tablets' => ['eyebrow' => 'POSSIBILITY, IN YOUR HANDS', 'title' => 'Tablets', 'description' => 'Flexible screens for sketching, streaming, focused work and lighter days away from your desk.', 'hero' => '0aacd.png', 'products' => ['galaxy-tab-s8', 'ipad-air', 'surface-pro-9', 'lenovo-tab-p12']],
        'mobile-accessories' => ['eyebrow' => 'THE DETAILS MAKE THE DIFFERENCE', 'title' => 'Mobile accessories', 'description' => 'Charging, audio and everyday additions chosen to make your devices more useful wherever the day takes you.', 'hero' => '745a4.png', 'products' => ['boostcharge-pro', 'airpods-pro', 'magsafe-battery-pack', 'anker-735-charger']],
        'audio' => ['eyebrow' => 'LISTEN WITH INTENTION', 'title' => 'Audio', 'description' => 'Immersive sound, considered comfort and dependable listening for work, travel and slower moments.', 'hero' => '6d140.png', 'products' => ['airpods-pro', 'sony-wh-1000xm5', 'bose-qc-ultra', 'beats-studio-pro']],
    ],
];
