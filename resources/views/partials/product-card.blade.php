<article
  class="content-stretch flex flex-col gap-[16px] items-start min-w-0 relative"
  data-brand="{{ $product['brand'] }}"
  data-catalog-item
  data-catalog-order="{{ $catalogOrder ?? 0 }}"
  data-name="Product card"
  data-price="{{ (float) preg_replace('/[^0-9.]/', '', $product['price']) }}"
  data-product-name="{{ $product['name'] }}"
  data-product-url="{{ route('products.show', $product['slug']) }}"
>
  <div class="bg-[#eff5f7] content-stretch flex h-[266px] items-center justify-center overflow-hidden p-[32px] relative rounded-[4px] w-full" data-name="Product photography">
    <img alt="{{ $product['name'] }}" class="h-full object-contain pointer-events-none w-full" src="{{ asset('assets/'.$product['image']) }}">
    <div class="absolute bg-white flex items-center justify-center right-[14px] rounded-full size-[32px] top-[14px]" data-name="Save product" data-save-product="{{ $product['name'] }}">
      <img alt="" class="size-[17px]" src="{{ asset('assets/036e3.svg') }}">
    </div>
  </div>
  <div class="flex flex-1 flex-col gap-[8px] items-start w-full">
    <p class="font-['DM_Sans'] font-medium text-[#66777f] text-[10px]">{{ $product['brand'] }}</p>
    <h3 class="font-['DM_Sans'] font-medium leading-[1.3] text-[#1d292f] text-[18px]">{{ $product['name'] }}</h3>
    @if (!empty($product['detail']))
      <p class="font-['DM_Sans'] font-normal leading-[1.5] text-[#66777f] text-[12px]">{{ $product['detail'] }}</p>
    @endif
    <div class="flex items-end justify-between mt-auto pt-[8px] w-full">
      <p class="font-['DM_Sans'] font-medium text-[#1d292f] text-[18px]">{{ $product['price'] }}</p>
      @if (!empty($product['colors']))
        <p class="font-['DM_Sans'] font-normal text-[#66777f] text-[10px]">{{ count($product['colors']) }} {{ count($product['colors']) === 1 ? 'finish' : 'finishes' }}</p>
      @endif
    </div>
  </div>
  <div class="border border-[#d5e1e5] flex gap-[10px] h-[42px] items-center justify-center rounded-[4px] w-full" data-add-product="{{ $product['name'] }}" data-name="Add to bag">
    <img alt="" class="size-[15px]" src="{{ asset('assets/1010f.svg') }}">
    <p class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]">Add to bag</p>
  </div>
</article>
