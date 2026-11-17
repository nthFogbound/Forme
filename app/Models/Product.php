<?php

namespace App\Models;

use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Attributes\Appends;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Number;

#[Fillable(['primary_category_id', 'slug', 'brand', 'name', 'detail', 'price', 'image', 'colors', 'is_active', 'featured_position', 'essential_position'])]
#[Appends(['formatted_price'])]
class Product extends Model
{
    /** @use HasFactory<ProductFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * @return BelongsTo<Category, $this>
     */
    public function primaryCategory(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'primary_category_id');
    }

    /**
     * @return BelongsToMany<Category, $this>
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class)
            ->withPivot('position')
            ->orderByPivot('position');
    }

    /**
     * @return BelongsToMany<ProductCollection, $this>
     */
    public function productCollections(): BelongsToMany
    {
        return $this->belongsToMany(ProductCollection::class, 'product_collection_product')
            ->withPivot('position')
            ->orderByPivot('position');
    }

    #[Scope]
    protected function active(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    protected function formattedPrice(): Attribute
    {
        return Attribute::get(
            fn (): string => (string) Number::currency((float) $this->price, 'USD', 'en_US'),
        );
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'colors' => 'array',
            'is_active' => 'boolean',
            'featured_position' => 'integer',
            'essential_position' => 'integer',
        ];
    }
}
