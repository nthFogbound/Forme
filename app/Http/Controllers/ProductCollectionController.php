<?php

namespace App\Http\Controllers;

use App\Models\ProductCollection;
use Illuminate\Contracts\View\View;

class ProductCollectionController extends Controller
{
    public function __invoke(ProductCollection $collection): View
    {
        abort_unless($collection->is_active, 404);

        $collection->load([
            'products' => fn ($query) => $query->active()->with('primaryCategory'),
        ]);

        return view('collection', compact('collection'));
    }
}
