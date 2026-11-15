<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $product['name'] }} — {{ $product['detail'] }}">
    <title>{{ $product['name'] }} — Forme</title>
    @vite(['src/index.css', 'resources/js/storefront.js'])
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#1d292f]">
      <header class="border-[#d5e1e5] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['DM_Sans'] font-medium text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <button class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]" onclick="history.back()" type="button">← Back to shopping</button>
      </header>
      <section class="grid grid-cols-2 min-h-[620px] max-md:grid-cols-1">
        <div class="bg-[#eff5f7] flex items-center justify-center min-h-[460px] p-[64px] max-md:min-h-[380px] max-md:p-[32px]">
          <img alt="{{ $product['name'] }}" class="max-h-[430px] object-contain size-full" src="{{ asset('assets/'.$product['image']) }}">
        </div>
        <div class="flex flex-col justify-center max-w-[640px] px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[11px]">{{ $product['brand'] }} · {{ $product['category'] }}</p>
          <h1 class="font-['DM_Sans'] font-medium leading-[1.1] mt-[14px] text-[44px]">{{ $product['name'] }}</h1>
          <p class="font-['DM_Sans'] font-normal mt-[14px] text-[#66777f] text-[14px]">{{ $product['detail'] }}</p>
          <p class="font-['DM_Sans'] font-medium mt-[24px] text-[24px]">{{ $product['price'] }}</p>
          <div class="border-[#d5e1e5] border-t mt-[28px] pt-[24px]">
          <p class="font-['DM_Sans'] font-medium text-[11px]">CHOOSE A COLOR</p>
          <div class="flex flex-wrap gap-[8px] mt-[12px]" data-colors="{{ implode('|', $product['colors']) }}" data-product-color="{{ $slug }}">
            @foreach ($product['colors'] as $color)
              <button class="border border-[#d5e1e5] font-['DM_Sans'] font-normal px-[12px] py-[8px] rounded-[4px] text-[11px]" data-select-color="{{ $color }}" type="button">{{ $color }}</button>
            @endforeach
          </div>
          <div class="flex gap-[12px] mt-[30px]">
            <button class="bg-[#275d78] flex-1 h-[48px] rounded-[4px] text-[13px] text-white" data-add-product="{{ $product['name'] }}" type="button">Add to bag</button>
            <button class="border border-[#275d78] h-[48px] px-[20px] rounded-[4px] text-[#275d78] text-[13px]" data-save-product="{{ $product['name'] }}" data-wishlist-button type="button">Save</button>
          </div>
          </div>
        </div>
      </section>
      <section class="border-[#d5e1e5] border-t grid grid-cols-2 gap-[64px] px-[64px] py-[56px] max-md:grid-cols-1 max-md:gap-[28px] max-md:px-[24px] max-md:py-[40px]">
        <div>
          <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[11px]">PRODUCT INFORMATION</p>
          <h2 class="font-['DM_Sans'] font-medium mt-[12px] text-[28px]">Designed for everyday use.</h2>
        </div>
        <dl class="border-[#d5e1e5] border-t">
          <div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[24px] py-[16px]">
            <dt class="font-['DM_Sans'] font-normal text-[#66777f] text-[12px]">Category</dt>
            <dd class="font-['DM_Sans'] font-medium text-[12px]">{{ $product['category'] }}</dd>
          </div>
          <div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[24px] py-[16px]">
            <dt class="font-['DM_Sans'] font-normal text-[#66777f] text-[12px]">Configuration</dt>
            <dd class="font-['DM_Sans'] font-medium text-right text-[12px]">{{ $product['detail'] }}</dd>
          </div>
          <div class="border-[#d5e1e5] border-b flex items-center justify-between gap-[24px] py-[16px]">
            <dt class="font-['DM_Sans'] font-normal text-[#66777f] text-[12px]">Available finishes</dt>
            <dd class="font-['DM_Sans'] font-medium text-right text-[12px]">{{ implode(', ', $product['colors']) }}</dd>
          </div>
        </dl>
      </section>
    </main>
  </body>
</html>
