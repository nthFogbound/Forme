<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page not found — Forme</title>
  @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-white text-[#1d292f]">
  <header class="border-[#d5e1e5] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
    <a class="font-['DM_Sans'] font-medium text-[30px]" href="{{ route('storefront') }}">FORME</a>
    <a class="font-['DM_Sans'] font-medium text-[#275d78] text-[12px]" href="{{ route('storefront') }}">Return home</a>
  </header>
  <main class="theme-editorial flex min-h-[calc(100vh-80px)] items-center px-[64px] py-[72px] max-md:px-[24px]">
    <div class="max-w-[620px]">
      <p class="theme-editorial-accent font-['DM_Sans'] font-medium text-[11px]">404 · PAGE NOT FOUND</p>
      <h1 class="font-['DM_Sans'] font-medium leading-[1.08] mt-[16px] text-[52px] max-md:text-[40px]">This page isn’t in our collection.</h1>
      <p class="theme-editorial-muted leading-[1.7] mt-[20px] max-w-[500px] text-[14px]">The product, category, or collection may have moved or may no longer be available.</p>
      <a class="theme-editorial-button inline-flex h-[46px] items-center justify-center mt-[30px] px-[24px] rounded-[4px] text-[12px]" href="{{ route('storefront') }}">Browse products</a>
    </div>
  </main>
</body>
</html>
