<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Contracts\View\View;

class StorefrontController extends Controller
{
    public function __invoke(): View
    {
        $categories = Category::query()
            ->active()
            ->with(['products' => fn ($query) => $query->active()->with('primaryCategory')])
            ->orderBy('sort_order')
            ->get()
            ->keyBy('slug');

        $featuredProducts = Product::query()
            ->active()
            ->whereNotNull('featured_position')
            ->with('primaryCategory')
            ->orderBy('featured_position')
            ->get();

        $essentialProducts = Product::query()
            ->active()
            ->whereNotNull('essential_position')
            ->with('primaryCategory')
            ->orderBy('essential_position')
            ->get();

        return view('storefront', compact('categories', 'featuredProducts', 'essentialProducts'));
    }
}
