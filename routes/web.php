<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductCollectionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StorefrontController;
use Illuminate\Support\Facades\Route;

Route::get('/', StorefrontController::class)->name('storefront');
Route::get('/categories/{category}', CategoryController::class)->name('categories.show');
Route::get('/collections/{collection}', ProductCollectionController::class)->name('collections.show');
Route::get('/products/{product}', ProductController::class)->name('products.show');
