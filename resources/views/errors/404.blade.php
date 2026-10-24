<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page not found — Forme</title>
  @vite(['src/index.css'])
</head>
<body class="bg-white text-[#202522]">
  <header class="border-[#dfe3dc] border-b flex h-[80px] items-center justify-between px-[64px] max-md:px-[24px]">
    <a class="font-['Inter:Semi_Bold'] text-[30px]" href="{{ route('storefront') }}">FORME</a>
    <a class="font-['Inter:Medium'] text-[#245c4d] text-[12px]" href="{{ route('storefront') }}">Return home</a>
  </header>
  <main class="bg-[#f4f5f1] flex min-h-[calc(100vh-80px)] items-center px-[64px] py-[72px] max-md:px-[24px]">
    <div class="max-w-[620px]">
      <p class="font-['Inter:Semi_Bold'] text-[#245c4d] text-[11px]">404 · PAGE NOT FOUND</p>
      <h1 class="font-['Inter:Medium'] leading-[1.08] mt-[16px] text-[52px] max-md:text-[40px]">This page isn’t in our collection.</h1>
      <p class="leading-[1.7] mt-[20px] max-w-[500px] text-[#717772] text-[14px]">The product, category, or collection may have moved or may no longer be available.</p>
      <a class="bg-[#245c4d] inline-flex h-[46px] items-center justify-center mt-[30px] px-[24px] rounded-[4px] text-[12px] text-white" href="{{ route('storefront') }}">Browse products</a>
    </div>
  </main>
</body>
</html>
