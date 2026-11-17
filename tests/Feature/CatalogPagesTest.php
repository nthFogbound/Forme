<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductCollection;
use Database\Seeders\CatalogSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CatalogPagesTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite();
    }

    public function test_storefront_renders_active_database_products_in_merchandising_order(): void
    {
        $category = Category::factory()->create(['slug' => 'phones', 'sort_order' => 1]);
        $secondProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Second database phone',
            'slug' => 'second-database-phone',
            'featured_position' => 2,
        ]);
        $firstProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'First database phone',
            'slug' => 'first-database-phone',
            'featured_position' => 1,
        ]);
        $hiddenProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Hidden database phone',
            'slug' => 'hidden-database-phone',
            'featured_position' => 3,
            'is_active' => false,
        ]);
        $category->products()->attach([
            $secondProduct->id => ['position' => 2],
            $firstProduct->id => ['position' => 1],
            $hiddenProduct->id => ['position' => 3],
        ]);

        $response = $this->get(route('storefront'));

        $response->assertOk()
            ->assertViewIs('storefront')
            ->assertSeeInOrder(['First database phone', 'Second database phone'])
            ->assertDontSee('Hidden database phone');
    }

    public function test_category_route_uses_the_slug_and_keeps_pivot_order(): void
    {
        $category = Category::factory()->create(['slug' => 'desk-tools', 'title' => 'Desk tools']);
        $secondProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Second desk tool',
            'slug' => 'second-desk-tool',
        ]);
        $firstProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'First desk tool',
            'slug' => 'first-desk-tool',
        ]);
        $category->products()->attach([
            $secondProduct->id => ['position' => 2],
            $firstProduct->id => ['position' => 1],
        ]);

        $response = $this->get('/categories/desk-tools');

        $response->assertOk()
            ->assertViewIs('category')
            ->assertSee('Desk tools')
            ->assertSeeInOrder(['First desk tool', 'Second desk tool']);
    }

    public function test_product_route_renders_database_attributes_by_slug(): void
    {
        $category = Category::factory()->create(['title' => 'Audio']);
        Product::factory()->for($category, 'primaryCategory')->create([
            'slug' => 'studio-headphones',
            'name' => 'Studio Headphones',
            'price' => 349.00,
            'colors' => ['Black', 'Silver'],
        ]);

        $response = $this->get('/products/studio-headphones');

        $response->assertOk()
            ->assertViewIs('product')
            ->assertSee('Studio Headphones')
            ->assertSee('$349.00')
            ->assertSee('Black')
            ->assertSee('Audio');
    }

    public function test_collection_route_renders_only_active_products_in_pivot_order(): void
    {
        $category = Category::factory()->create();
        $collection = ProductCollection::factory()->create(['slug' => 'focused-work']);
        $secondProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Second collection product',
        ]);
        $firstProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'First collection product',
        ]);
        $inactiveProduct = Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Inactive collection product',
            'is_active' => false,
        ]);
        $collection->products()->attach([
            $secondProduct->id => ['position' => 2],
            $firstProduct->id => ['position' => 1],
            $inactiveProduct->id => ['position' => 3],
        ]);

        $response = $this->get('/collections/focused-work');

        $response->assertOk()
            ->assertViewIs('collection')
            ->assertSeeInOrder(['First collection product', 'Second collection product'])
            ->assertDontSee('Inactive collection product');
    }

    public function test_missing_and_inactive_catalog_records_return_not_found(): void
    {
        $category = Category::factory()->create(['slug' => 'hidden-category', 'is_active' => false]);
        $product = Product::factory()->for($category, 'primaryCategory')->create([
            'slug' => 'hidden-product',
            'is_active' => false,
        ]);
        $collection = ProductCollection::factory()->create([
            'slug' => 'hidden-collection',
            'is_active' => false,
        ]);

        $this->get('/categories/'.$category->slug)->assertNotFound();
        $this->get('/products/'.$product->slug)->assertNotFound();
        $this->get('/collections/'.$collection->slug)->assertNotFound();
        $this->get('/products/does-not-exist')->assertNotFound();
    }

    public function test_catalog_seeder_populates_the_complete_demo_catalog(): void
    {
        $this->seed(CatalogSeeder::class);

        $this->assertDatabaseCount('categories', 5);
        $this->assertDatabaseCount('products', 20);
        $this->assertDatabaseCount('product_collections', 4);
        $this->assertDatabaseHas('products', [
            'slug' => 'iphone-13-pro',
            'price' => 999,
        ]);
        $this->assertDatabaseHas('category_product', [
            'category_id' => Category::query()->where('slug', 'mobile-accessories')->value('id'),
            'product_id' => Product::query()->where('slug', 'airpods-pro')->value('id'),
        ]);
    }
}
