@php
  $brands = collect($products)->pluck('brand')->unique()->sort()->values();
@endphp

<div class="border-[#d5e1e5] border-y flex items-center justify-between gap-[20px] mt-[26px] py-[12px] max-md:items-stretch max-md:flex-col" data-name="Catalog controls">
  <p aria-live="polite" class="font-['DM_Sans'] font-normal text-[#66777f] text-[12px] whitespace-nowrap" data-catalog-count>
    {{ count($products) }} {{ count($products) === 1 ? 'product' : 'products' }}
  </p>
  <div class="flex flex-wrap gap-[10px] items-center">
    <div class="flex items-center gap-[4px] mr-[2px] text-[#66777f]">
      <svg aria-hidden="true" class="size-[16px]" fill="none" viewBox="0 0 20 20">
        <path d="M3 4h14l-5.4 6.2v4.4l-3.2 1.6v-6L3 4Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"/>
      </svg>
      <span class="font-['DM_Sans'] font-medium text-[11px]">Filter</span>
    </div>
    <label class="bg-[#eff5f7] relative rounded-[4px]">
      <span class="sr-only">Filter by brand</span>
      <svg aria-hidden="true" class="absolute left-[12px] pointer-events-none size-[14px] top-1/2 -translate-y-1/2 text-[#66777f]" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" stroke-width="1.5"/>
        <path d="M6 10h8M10 6v8" stroke="currentColor" stroke-width="1.5"/>
      </svg>
      <select class="bg-transparent font-['DM_Sans'] font-medium h-[42px] outline-none pl-[34px] pr-[12px] text-[#1d292f] text-[12px]" data-catalog-brand>
        <option value="all">All brands</option>
        @foreach ($brands as $brand)
          <option value="{{ $brand }}">{{ $brand }}</option>
        @endforeach
      </select>
    </label>
    <label class="bg-[#eff5f7] relative rounded-[4px]">
      <span class="sr-only">Filter by price</span>
      <svg aria-hidden="true" class="absolute left-[12px] pointer-events-none size-[14px] top-1/2 -translate-y-1/2 text-[#66777f]" fill="none" viewBox="0 0 20 20">
        <path d="M10 3v14M13 6.2c-.8-.7-1.8-1.1-3-1.1-1.7 0-3 1-3 2.3 0 3.6 6 1.3 6 5 0 1.4-1.3 2.5-3.2 2.5-1.3 0-2.5-.5-3.3-1.3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
      </svg>
      <select class="bg-transparent font-['DM_Sans'] font-medium h-[42px] outline-none pl-[34px] pr-[12px] text-[#1d292f] text-[12px]" data-catalog-price>
        <option value="all">Any price</option>
        <option value="under-250">Under $250</option>
        <option value="250-999">$250–$999</option>
        <option value="1000-plus">$1,000+</option>
      </select>
    </label>
    <label class="border border-[#d5e1e5] relative rounded-[4px]">
      <span class="sr-only">Sort products</span>
      <svg aria-hidden="true" class="absolute left-[12px] pointer-events-none size-[14px] top-1/2 -translate-y-1/2 text-[#275d78]" fill="none" viewBox="0 0 20 20">
        <path d="M5 4v12m0 0-2.5-2.5M5 16l2.5-2.5M10 5h7M10 10h5M10 15h3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </svg>
      <select class="bg-transparent font-['DM_Sans'] font-medium h-[42px] outline-none pl-[34px] pr-[12px] text-[#1d292f] text-[12px]" data-catalog-sort>
        <option value="featured">Featured</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
    </label>
  </div>
</div>
