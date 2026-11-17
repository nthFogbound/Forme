<x-guest-layout>
    <p class="mb-2 text-xs font-medium text-[#275d78]">WELCOME BACK</p>
    <h1 class="mb-8 text-4xl font-medium">Sign in to Forme</h1>
    @if (session('status'))
        <p class="mb-5 text-sm text-[#275d78]">{{ session('status') }}</p>
    @endif
    <form method="POST" action="{{ route('login') }}" class="space-y-5">
        @csrf
        <div>
            <label for="email" class="mb-2 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus autocomplete="username" class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
            @error('email') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
        </div>
        <div>
            <label for="password" class="mb-2 block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required autocomplete="current-password" class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
            @error('password') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
        </div>
        <label class="flex items-center gap-2 text-sm"><input type="checkbox" name="remember"> Remember me</label>
        <button type="submit" class="h-12 w-full bg-[#275d78] text-sm font-medium text-white">Sign in</button>
    </form>
    <div class="mt-6 flex justify-between text-sm">
        <a href="{{ route('password.request') }}" class="text-[#275d78]">Forgot password?</a>
        <a href="{{ route('register') }}" class="text-[#275d78]">Create account</a>
    </div>
</x-guest-layout>
