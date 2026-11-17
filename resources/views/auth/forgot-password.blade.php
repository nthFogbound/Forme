<x-guest-layout>
    <p class="mb-2 text-xs font-medium text-[#275d78]">PASSWORD RECOVERY</p>
    <h1 class="mb-5 text-4xl font-medium">Reset your password</h1>
    <p class="mb-8 text-sm leading-6 text-[#66777f]">Enter your email address and we will send a reset link.</p>
    @if (session('status')) <p class="mb-5 text-sm text-[#275d78]">{{ session('status') }}</p> @endif
    <form method="POST" action="{{ route('password.email') }}" class="space-y-5">
        @csrf
        <div>
            <label for="email" class="mb-2 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
            @error('email') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
        </div>
        <button type="submit" class="h-12 w-full bg-[#275d78] text-sm font-medium text-white">Email reset link</button>
    </form>
</x-guest-layout>
