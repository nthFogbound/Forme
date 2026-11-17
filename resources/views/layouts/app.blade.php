<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Forme account')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen bg-[#f7f9f9] font-sans text-[#1d292f] antialiased">
    <header class="border-b border-[#d5e1e5] bg-white">
        <nav class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
            <a href="{{ route('storefront') }}" class="text-3xl font-medium">FORME</a>
            <div class="flex items-center gap-5 text-sm">
                <a href="{{ route('storefront') }}" class="text-[#275d78]">Continue shopping</a>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit" class="text-[#66777f]">Log out</button>
                </form>
            </div>
        </nav>
    </header>
    <main>
        {{ $slot }}
    </main>
</body>
</html>
