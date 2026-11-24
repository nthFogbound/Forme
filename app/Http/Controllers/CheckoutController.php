<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Number;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    public function create(): View
    {
        $products = Product::query()
            ->active()
            ->get(['name', 'price'])
            ->mapWithKeys(fn (Product $product): array => [
                $product->name => (float) $product->price,
            ]);

        return view('checkout', ['products' => $products]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'full_name' => ['required', 'string', 'max:100'],
            'address' => ['required', 'string', 'max:200'],
            'city' => ['required', 'string', 'max:100'],
            'postal_code' => ['required', 'string', 'max:20'],
            'card_name' => ['required', 'string', 'max:100'],
            'card_number' => ['required', 'string'],
            'card_expiry' => ['required', 'string'],
            'card_cvc' => ['required', 'string'],
            'cart_items' => ['required', 'string'],
        ]);

        $cartItems = json_decode($validated['cart_items'], true);
        if (! is_array($cartItems) || $cartItems === []) {
            return back()->withErrors(['cart_items' => 'Your bag is empty.']);
        }

        $products = Product::query()
            ->active()
            ->whereIn('name', array_keys($cartItems))
            ->get()
            ->keyBy('name');

        $total = 0.0;
        foreach ($cartItems as $name => $quantity) {
            if (! is_string($name) || ! is_int($quantity) ||
                $quantity < 1 || $quantity > 99 || ! $products->has($name)) {
                return back()->withErrors(['cart_items' => 'Your bag contains an invalid item or quantity.']);
            }
            $total += (float) $products[$name]->price * $quantity;
        }

        $cardNumber = preg_replace('/\D/', '', $validated['card_number']);
        if ($cardNumber !== '4242424242424242') {
            return back()->withErrors(['card_number' => 'Use demo card 4242 4242 4242 4242.']);
        }

        if (! preg_match('/^(0[1-9]|1[0-2])\/\d{2}$/', $validated['card_expiry'])) {
            return back()->withErrors(['card_expiry' => 'Use demo expiry 12/30.']);
        }

        if ($validated['card_cvc'] !== '123') {
            return back()->withErrors(['card_cvc' => 'Use demo CVC 123.']);
        }

        $reference = 'DEMO-'.Str::upper(Str::random(8));

        return redirect()
            ->route('checkout.success', ['reference' => $reference])
            ->with([
                'checkout_success' => true,
                'checkout_total' => Number::currency($total, 'USD', 'en_US'),
                'checkout_email' => $validated['email'],
            ]);
    }

    public function success(string $reference): View
    {
        abort_unless(session('checkout_success'), 404);

        return view('checkout-success', [
            'reference' => $reference,
            'total' => session('checkout_total'),
            'email' => session('checkout_email'),
        ]);
    }
}
