<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Demo order confirmed — Forme</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <main class="flex min-h-screen items-center justify-center bg-[#f7f9f9] px-[24px] py-[48px]" data-checkout-success>
      <section class="flex w-full max-w-[560px] flex-col items-center rounded-[4px] border border-[#d5e1e5] bg-white px-[32px] py-[48px] text-center">
        <div class="flex size-[64px] items-center justify-center rounded-full bg-[#edf4f6] text-[28px] text-[#275d78]">✓</div>
        <p class="mt-[24px] font-['DM_Sans'] font-medium text-[#275d78] text-[10px]">DEMO ORDER CONFIRMED</p>
        <h1 class="mt-[8px] font-['DM_Sans'] font-medium text-[32px] text-[#1d292f]">Thank you for trying Forme</h1>
        <p class="mt-[12px] max-w-[420px] font-['DM_Sans'] font-normal leading-[1.7] text-[#66777f] text-[13px]">
          No transaction was processed and no payment was charged.
        </p>
        <div class="mt-[24px] w-full border-y border-[#d5e1e5] py-[18px]">
          <div class="flex justify-between text-[12px]"><span class="text-[#66777f]">Order reference</span><strong class="font-['DM_Sans'] font-medium">{{ $reference }}</strong></div>
          <div class="mt-[10px] flex justify-between text-[12px]"><span class="text-[#66777f]">Demo total</span><strong class="font-['DM_Sans'] font-medium">{{ $total }}</strong></div>
          @if ($email)
            <div class="mt-[10px] flex justify-between text-[12px]"><span class="text-[#66777f]">Email</span><strong class="font-['DM_Sans'] font-medium">{{ $email }}</strong></div>
          @endif
        </div>
        <a class="mt-[24px] flex h-[46px] w-full items-center justify-center rounded-[4px] bg-[#275d78] font-['DM_Sans'] font-medium text-[13px] text-white" href="{{ route('storefront') }}">Continue shopping</a>
      </section>
    </main>
  </body>
</html>
