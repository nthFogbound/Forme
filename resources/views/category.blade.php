<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $category['description'] }}">
    <title>{{ $category['title'] }} — Forme</title>
    @vite(['src/index.css', 'resources/js/storefront.js'])
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#1d292f]">
      <header class="border-[#d5e1e5] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['DM_Sans'] font-medium text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]" href="{{ route('storefront') }}#categories">← All categories</a>
      </header>
      <section class="bg-[#eff5f7] grid grid-cols-2 min-h-[520px] max-md:grid-cols-1">
        <div class="theme-editorial flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="theme-editorial-accent font-['DM_Sans'] font-medium text-[11px]">{{ $category['eyebrow'] }}</p>
          <h1 class="font-['DM_Sans'] font-medium leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{{ $category['title'] }}</h1>
          <p class="theme-editorial-muted font-['DM_Sans'] font-normal leading-[1.7] mt-[22px] max-w-[480px] text-[15px]">{{ $category['description'] }}</p>
          <a class="theme-editorial-button flex font-['DM_Sans'] font-medium h-[46px] items-center justify-center mt-[30px] rounded-[4px] text-[13px] w-[170px]" href="#category-products">View the selection</a>
        </div>
        <div class="min-h-[360px] relative">
          <img alt="{{ $category['title'] }} collection" class="absolute inset-0 object-cover size-full" src="{{ asset('assets/'.$category['hero']) }}">
        </div>
      </section>
      <section class="px-[64px] py-[72px] max-lg:px-[40px] max-md:px-[24px] max-md:py-[52px]" data-catalog id="category-products">
        <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[11px]">CURATED BY FORME</p>
        <div class="flex items-end justify-between mt-[10px] max-md:items-start max-md:flex-col max-md:gap-[12px]">
          <h2 class="font-['DM_Sans'] font-medium leading-[1.2] text-[36px] max-md:text-[30px]">Explore {{ strtolower($category['title']) }}.</h2>
        </div>
        @include('partials.catalog-toolbar', ['products' => $category['products']])
        <div class="grid gap-x-[24px] gap-y-[48px] grid-cols-4 mt-[32px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1" data-catalog-grid>
          @foreach ($category['products'] as $product)
            @include('partials.product-card', ['product' => $product, 'catalogOrder' => $loop->index])
          @endforeach
        </div>
        @include('partials.catalog-empty')
      </section>
    </main>
  </body>
</html>
