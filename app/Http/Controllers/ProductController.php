<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\View\View;

class ProductController extends Controller
{
    public function __invoke(Product $product): View
    {
        abort_unless($product->is_active, 404);

        $product->load('primaryCategory');

        return view('product', compact('product'));
    }
}
