<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Contracts\View\View;

class CategoryController extends Controller
{
    public function __invoke(Category $category): View
    {
        abort_unless($category->is_active, 404);

        $category->load([
            'products' => fn ($query) => $query->active()->with('primaryCategory'),
        ]);

        return view('category', compact('category'));
    }
}
