<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AccountTest extends TestCase
{
    use RefreshDatabase;

    public function test_storefront_account_link_sends_guests_to_login(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee(route('login'), false);
    }

    public function test_storefront_account_link_sends_customers_to_account(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->get('/')
            ->assertOk()
            ->assertSee(route('account'), false);
    }
}
