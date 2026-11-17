<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $collection['description'] }}">
    <title>{{ $collection['title'] }} — Forme</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#1d292f]">
      <header class="border-[#d5e1e5] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['DM_Sans'] font-medium text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]" href="{{ route('storefront') }}#footer">← All collections</a>
      </header>
      <section class="bg-[#eff5f7] grid grid-cols-2 min-h-[520px] max-md:grid-cols-1">
        <div class="theme-editorial flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="theme-editorial-accent font-['DM_Sans'] font-medium text-[11px]">{{ $collection['eyebrow'] }}</p>
          <h1 class="font-['DM_Sans'] font-medium leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{{ $collection['title'] }}</h1>
          <p class="theme-editorial-muted font-['DM_Sans'] font-normal leading-[1.7] mt-[22px] max-w-[480px] text-[15px]">{{ $collection['description'] }}</p>
        </div>
        <div class="min-h-[360px] relative"><img alt="{{ $collection['title'] }}" class="absolute inset-0 object-cover size-full" src="{{ asset('assets/'.$collection['hero']) }}"></div>
      </section>
      <section class="px-[64px] py-[72px] max-lg:px-[40px] max-md:px-[24px] max-md:py-[52px]" data-catalog>
        <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[11px]">THE SELECTION</p>
        <div class="flex items-end justify-between mt-[10px] max-md:items-start max-md:flex-col max-md:gap-[12px]">
          <h2 class="font-['DM_Sans'] font-medium leading-[1.2] text-[36px] max-md:text-[30px]">Products in this collection.</h2>
        </div>
        @include('partials.catalog-toolbar', ['products' => $collection['products']])
        <div class="grid gap-x-[24px] gap-y-[48px] grid-cols-4 mt-[32px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1" data-catalog-grid>
          @foreach ($collection['products'] as $product)
            @include('partials.product-card', ['product' => $product, 'catalogOrder' => $loop->index])
          @endforeach
        </div>
        @include('partials.catalog-empty')
      </section>
    </main>
  </body>
</html>
