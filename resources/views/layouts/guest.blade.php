<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Forme account')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen bg-[#edf3f4] font-sans text-[#1d292f] antialiased">
    <main class="grid min-h-screen lg:grid-cols-[1fr_1fr]">
        <section class="hidden bg-[#173738] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
            <a href="{{ route('storefront') }}" class="text-3xl font-medium">FORME</a>
            <div class="max-w-md">
                <p class="mb-5 text-xs font-medium text-[#a9cfca]">FORME ACCOUNT</p>
                <p class="text-5xl leading-tight">Technology for a better everyday.</p>
            </div>
            <a href="{{ route('storefront') }}" class="text-sm text-[#c4d4d2]">Return to storefront</a>
        </section>
        <section class="flex items-center justify-center px-6 py-12 sm:px-12">
            <div class="w-full max-w-md">
                <a href="{{ route('storefront') }}" class="mb-10 block text-2xl font-medium lg:hidden">FORME</a>
                {{ $slot }}
            </div>
        </section>
    </main>
</body>
</html>
