<form method="POST" action="{{ route('account.update') }}" class="space-y-5">
    @csrf
    @method('PATCH')
    <div>
        <label for="name" class="mb-2 block text-sm font-medium">Name</label>
        <input id="name" name="name" type="text" value="{{ old('name', $user->name) }}" required autocomplete="name" class="h-12 w-full border border-[#cbdadf] px-4 outline-none">
        @error('name') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
    </div>
    <div>
        <label for="email" class="mb-2 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" value="{{ old('email', $user->email) }}" required autocomplete="username" class="h-12 w-full border border-[#cbdadf] px-4 outline-none">
        @error('email') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
    </div>
    <button type="submit" class="h-12 bg-[#275d78] px-6 text-sm font-medium text-white">Save profile</button>
    @if (session('status') === 'profile-updated') <p class="text-sm text-[#275d78]">Saved.</p> @endif
</form>
