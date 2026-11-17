<x-guest-layout>
    <p class="mb-2 text-xs font-medium text-[#275d78]">SECURE AREA</p>
    <h1 class="mb-5 text-4xl font-medium">Confirm password</h1>
    <form method="POST" action="{{ route('password.confirm') }}" class="space-y-5">
        @csrf
        <div>
            <label for="password" class="mb-2 block text-sm font-medium">Password</label>
            <input id="password" name="password" type="password" required autocomplete="current-password" class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
            @error('password') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
        </div>
        <button type="submit" class="h-12 w-full bg-[#275d78] text-sm font-medium text-white">Confirm</button>
    </form>
</x-guest-layout>
