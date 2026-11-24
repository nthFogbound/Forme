<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Checkout — Forme</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <main class="min-h-screen bg-[#f7f9f9] text-[#1d292f]" data-checkout>
      <header class="border-[#d5e1e5] border-b bg-white flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['DM_Sans'] font-medium text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]" href="{{ route('storefront') }}">← Return to shopping</a>
      </header>

      <div class="grid grid-cols-[minmax(0,1fr)_380px] mx-auto max-w-[1120px] gap-[48px] px-[24px] py-[56px] max-md:grid-cols-1 max-md:py-[32px]">
        <section>
          <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[10px]">SECURE DEMO CHECKOUT</p>
          <h1 class="font-['DM_Sans'] font-medium mt-[8px] text-[36px]">Checkout</h1>

          @if ($errors->any())
            <div class="border border-[#c88a7b] bg-[#fff8f5] mt-[24px] p-[16px] rounded-[4px] text-[12px] text-[#8a4937]" role="alert">
              <p class="font-['DM_Sans'] font-medium">Please check the details below.</p>
              <ul class="mt-[8px] list-disc pl-[18px]">
                @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
                @endforeach
              </ul>
            </div>
          @endif

          <form class="mt-[28px]" method="POST" action="{{ route('checkout.store') }}">
            @csrf
            <input name="cart_items" type="hidden" value="" data-checkout-cart>

            <div class="flex flex-col gap-[16px]">
              <h2 class="border-[#d5e1e5] border-b pb-[12px] font-['DM_Sans'] font-medium text-[15px]">Contact</h2>
              <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="email">
                Email address
                <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="email" name="email" type="email" value="{{ old('email') }}" placeholder="you@example.com" required>
              </label>

              <h2 class="border-[#d5e1e5] border-b mt-[12px] pb-[12px] font-['DM_Sans'] font-medium text-[15px]">Delivery details</h2>
              <div class="grid grid-cols-2 gap-[12px] max-md:grid-cols-1">
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="full_name">
                  Full name
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="full_name" name="full_name" type="text" value="{{ old('full_name') }}" required>
                </label>
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="city">
                  City
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="city" name="city" type="text" value="{{ old('city') }}" required>
                </label>
              </div>
              <div class="grid grid-cols-[1fr_180px] gap-[12px] max-md:grid-cols-1">
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="address">
                  Street address
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="address" name="address" type="text" value="{{ old('address') }}" required>
                </label>
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="postal_code">
                  Postal code
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="postal_code" name="postal_code" type="text" value="{{ old('postal_code') }}" required>
                </label>
              </div>

              <h2 class="border-[#d5e1e5] border-b mt-[12px] pb-[12px] font-['DM_Sans'] font-medium text-[15px]">Payment</h2>
              <div class="border border-[#b9cbd3] bg-[#edf4f6] rounded-[4px] p-[14px] text-[11px] text-[#4f6975]">
                <p class="font-['DM_Sans'] font-medium text-[#275d78]">Demo payment credentials</p>
                <p class="mt-[6px]">Card: <strong class="text-[#1d292f]">4242 4242 4242 4242</strong></p>
                <p>Expiry: <strong class="text-[#1d292f]">12/30</strong> · CVC: <strong class="text-[#1d292f]">123</strong></p>
              </div>
              <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="card_name">
                Name on card
                <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="card_name" name="card_name" type="text" value="{{ old('card_name') }}" required>
              </label>
              <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="card_number">
                Card number
                <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="card_number" name="card_number" inputmode="numeric" autocomplete="cc-number" value="{{ old('card_number') }}" placeholder="4242 4242 4242 4242" required>
              </label>
              <div class="grid grid-cols-2 gap-[12px]">
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="card_expiry">
                  Expiry
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="card_expiry" name="card_expiry" inputmode="numeric" autocomplete="cc-exp" value="{{ old('card_expiry') }}" placeholder="12/30" required>
                </label>
                <label class="flex flex-col gap-[8px] font-['DM_Sans'] text-[#66777f] text-[11px]" for="card_cvc">
                  CVC
                  <input class="h-[46px] rounded-[4px] border border-[#d5e1e5] bg-white px-[14px] text-[#1d292f] text-[13px] outline-none focus:border-[#275d78]" id="card_cvc" name="card_cvc" inputmode="numeric" autocomplete="cc-csc" value="{{ old('card_cvc') }}" placeholder="123" required>
                </label>
              </div>
              <button class="mt-[8px] h-[48px] rounded-[4px] bg-[#275d78] font-['DM_Sans'] font-medium text-[13px] text-white disabled:cursor-not-allowed disabled:opacity-50" data-checkout-submit type="submit">Place demo order</button>
            </div>
          </form>
        </section>

        <aside class="h-fit rounded-[4px] border border-[#d5e1e5] bg-white p-[24px]">
          <h2 class="border-[#d5e1e5] border-b pb-[14px] font-['DM_Sans'] font-medium text-[15px]">Order summary</h2>
          <div class="flex flex-col py-[8px]" data-checkout-items></div>
          <div class="border-[#d5e1e5] border-t flex items-center justify-between pt-[16px]">
            <p class="font-['DM_Sans'] font-medium text-[13px]">Total</p>
            <p class="font-['DM_Sans'] font-medium text-[18px]" data-checkout-total>$0.00</p>
          </div>
        </aside>
      </div>
    </main>
    <script>
      window.formeCatalogPrices = {{ Illuminate\Support\Js::from($products) }};
    </script>
  </body>
</html>
