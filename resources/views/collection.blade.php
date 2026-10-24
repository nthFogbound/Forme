<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $collection['description'] }}">
    <title>{{ $collection['title'] }} — Forme</title>
    @vite('src/index.css')
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#202522]">
      <header class="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['Inter:Semi_Bold'] text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['Inter:Medium'] text-[#245c4d] text-[12px]" href="{{ route('storefront') }}#footer">← All collections</a>
      </header>
      <section class="bg-[#edefe8] grid grid-cols-2 min-h-[480px] max-md:grid-cols-1">
        <div class="flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{{ $collection['eyebrow'] }}</p>
          <h1 class="font-['Inter:Medium'] leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{{ $collection['title'] }}</h1>
          <p class="font-['Inter:Regular'] leading-[1.7] mt-[22px] max-w-[480px] text-[#717772] text-[15px]">{{ $collection['description'] }}</p>
        </div>
        <div class="min-h-[360px] relative"><img alt="{{ $collection['title'] }}" class="absolute inset-0 object-cover size-full" src="{{ asset('assets/'.$collection['hero']) }}"></div>
      </section>
      <section class="px-[64px] py-[72px] max-md:px-[24px]">
        <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">THE SELECTION</p>
        <h2 class="font-['Inter:Medium'] mt-[10px] text-[36px]">Products in this collection.</h2>
        <div class="grid gap-[24px] grid-cols-3 mt-[32px] max-md:grid-cols-1">
          @foreach ($collection['products'] as $product)
            <a class="flex flex-col gap-[12px]" href="{{ route('products.show', $product['slug']) }}">
              <span class="bg-[#f4f5f1] block h-[260px] p-[28px] rounded-[4px]"><img alt="{{ $product['name'] }}" class="object-cover size-full" src="{{ asset('assets/'.$product['image']) }}"></span>
              <span class="font-['Inter:Medium'] text-[#717772] text-[10px]">{{ $product['brand'] }}</span>
              <span class="font-['Inter:Medium'] text-[18px]">{{ $product['name'] }}</span>
              <span class="font-['Inter:Regular'] text-[#717772] text-[11px]">No reviews yet</span>
              <span class="font-['Inter:Semi_Bold'] text-[16px]">{{ $product['price'] }}</span>
            </a>
          @endforeach
        </div>
      </section>
    </main>
  </body>
</html>
