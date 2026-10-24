<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $collection['description'] }}">
    <title>{{ $collection['title'] }} — Forme</title>
    @vite(['src/index.css', 'resources/js/storefront.js'])
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#202522]">
      <header class="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['Inter:Semi_Bold'] text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['Inter:Medium'] text-[#245c4d] text-[12px]" href="{{ route('storefront') }}#footer">← All collections</a>
      </header>
      <section class="bg-[#edefe8] grid grid-cols-2 min-h-[520px] max-md:grid-cols-1">
        <div class="flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{{ $collection['eyebrow'] }}</p>
          <h1 class="font-['Inter:Medium'] leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{{ $collection['title'] }}</h1>
          <p class="font-['Inter:Regular'] leading-[1.7] mt-[22px] max-w-[480px] text-[#717772] text-[15px]">{{ $collection['description'] }}</p>
        </div>
        <div class="min-h-[360px] relative"><img alt="{{ $collection['title'] }}" class="absolute inset-0 object-cover size-full" src="{{ asset('assets/'.$collection['hero']) }}"></div>
      </section>
      <section class="px-[64px] py-[72px] max-lg:px-[40px] max-md:px-[24px] max-md:py-[52px]">
        <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">THE SELECTION</p>
        <div class="flex items-end justify-between mt-[10px] max-md:items-start max-md:flex-col max-md:gap-[12px]">
          <h2 class="font-['Inter:Medium'] leading-[1.2] text-[36px] max-md:text-[30px]">Products in this collection.</h2>
          <p class="font-['Inter:Regular'] text-[#717772] text-[12px]">{{ count($collection['products']) }} {{ count($collection['products']) === 1 ? 'product' : 'products' }}</p>
        </div>
        <div class="grid gap-x-[24px] gap-y-[48px] grid-cols-4 mt-[32px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          @foreach ($collection['products'] as $product)
            @include('partials.product-card', ['product' => $product])
          @endforeach
        </div>
      </section>
    </main>
  </body>
</html>
