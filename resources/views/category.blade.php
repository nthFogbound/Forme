<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $category['description'] }}">
    <title>{{ $category['title'] }} — Forme</title>
    @vite('src/index.css')
  </head>
  <body>
    <main class="bg-white min-h-screen text-[#202522]">
      <header class="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
        <a class="font-['Inter:Semi_Bold'] text-[30px]" href="{{ route('storefront') }}">FORME</a>
        <a class="font-['Inter:Medium'] text-[#245c4d] text-[12px]" href="{{ route('storefront') }}#categories">← All categories</a>
      </header>
      <section class="bg-[#edefe8] grid grid-cols-2 min-h-[480px] max-md:grid-cols-1">
        <div class="flex flex-col justify-center px-[64px] py-[72px] max-md:px-[24px] max-md:py-[48px]">
          <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">{{ $category['eyebrow'] }}</p>
          <h1 class="font-['Inter:Medium'] leading-[1.08] mt-[18px] text-[52px] max-md:text-[40px]">{{ $category['title'] }}</h1>
          <p class="font-['Inter:Regular'] leading-[1.7] mt-[22px] max-w-[480px] text-[#717772] text-[15px]">{{ $category['description'] }}</p>
          <a class="bg-[#245c4d] flex font-['Inter:Medium'] h-[46px] items-center justify-center mt-[30px] rounded-[4px] text-[13px] text-white w-[170px]" href="#category-products">View the selection</a>
        </div>
        <div class="min-h-[360px] relative">
          <img alt="{{ $category['title'] }} collection" class="absolute inset-0 object-cover size-full" src="{{ asset('assets/'.$category['hero']) }}">
        </div>
      </section>
      <section class="px-[64px] py-[72px] max-md:px-[24px] max-md:py-[52px]" id="category-products">
        <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">CURATED BY FORME</p>
        <div class="flex items-end justify-between mt-[10px]">
          <h2 class="font-['Inter:Medium'] text-[36px]">Explore {{ strtolower($category['title']) }}.</h2>
          <p class="font-['Inter:Regular'] text-[#717772] text-[12px]">{{ count($category['products']) }} {{ count($category['products']) === 1 ? 'product' : 'products' }}</p>
        </div>
        <div class="grid gap-[24px] grid-cols-2 mt-[32px] max-w-[900px] max-md:grid-cols-1">
          @foreach ($category['products'] as $product)
            <article class="flex flex-col gap-[16px]">
              <div class="bg-[#f4f5f1] h-[300px] p-[32px] relative rounded-[4px]">
                <img alt="{{ $product['name'] }}" class="object-cover size-full" src="{{ asset('assets/'.$product['image']) }}">
              </div>
              <p class="font-['Inter:Medium'] text-[#717772] text-[10px]">{{ $product['brand'] }}</p>
              <h2 class="font-['Inter:Medium'] text-[20px]">{{ $product['name'] }}</h2>
              <p class="font-['Inter:Regular'] text-[#717772] text-[12px]">{{ $product['detail'] }}</p>
              <p class="font-['Inter:Semi_Bold'] text-[18px]">{{ $product['price'] }}</p>
            </article>
          @endforeach
        </div>
      </section>
    </main>
  </body>
</html>
