<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CheckoutTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite();
    }

    public function test_checkout_page_renders_demo_credentials_and_order_summary_container(): void
    {
        $this->get(route('checkout.create'))
            ->assertOk()
            ->assertViewIs('checkout')
            ->assertSee('4242 4242 4242 4242')
            ->assertSee('12/30')
            ->assertSee('123')
            ->assertSee('data-checkout-cart');
    }

    public function test_demo_payment_returns_validation_error_for_an_unknown_card(): void
    {
        $category = Category::factory()->create();
        Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Demo Headphones',
            'price' => 349,
        ]);

        $this->from('/checkout')
            ->post(route('checkout.store'), [
                'email' => 'demo@example.com',
                'full_name' => 'Demo Customer',
                'address' => '123 Demo Street',
                'city' => 'Demo City',
                'postal_code' => '12345',
                'card_name' => 'Demo Customer',
                'card_number' => '1111111111111111',
                'card_expiry' => '12/30',
                'card_cvc' => '123',
                'cart_items' => json_encode(['Demo Headphones' => 1], JSON_THROW_ON_ERROR),
            ])
            ->assertRedirect('/checkout')
            ->assertSessionHasErrors([
                'card_number' => 'Use demo card 4242 4242 4242 4242.',
            ]);
    }

    public function test_demo_payment_accepts_fake_credentials_and_redirects_to_confirmation(): void
    {
        $category = Category::factory()->create();
        Product::factory()->for($category, 'primaryCategory')->create([
            'name' => 'Demo Headphones',
            'price' => 349,
        ]);

        $this->post(route('checkout.store'), [
            'email' => 'demo@example.com',
            'full_name' => 'Demo Customer',
            'address' => '123 Demo Street',
            'city' => 'Demo City',
            'postal_code' => '12345',
            'card_name' => 'Demo Customer',
            'card_number' => '4242 4242 4242 4242',
            'card_expiry' => '12/30',
            'card_cvc' => '123',
            'cart_items' => json_encode(['Demo Headphones' => 2], JSON_THROW_ON_ERROR),
        ])
            ->assertRedirectContains('/checkout/success/DEMO-')
            ->assertSessionHas('checkout_success', true)
            ->assertSessionHas('checkout_total', '$698.00');
    }
}
