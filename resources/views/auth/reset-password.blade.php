<x-guest-layout>
    <p class="mb-2 text-xs font-medium text-[#275d78]">NEW PASSWORD</p>
    <h1 class="mb-8 text-4xl font-medium">Choose a new password</h1>
    <form method="POST" action="{{ route('password.store') }}" class="space-y-5">
        @csrf
        <input type="hidden" name="token" value="{{ $request->route('token') }}">
        <div>
            <label for="email" class="mb-2 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value="{{ old('email', $request->email) }}" required autofocus class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
            @error('email') <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
        </div>
        @foreach ([['password', 'Password'], ['password_confirmation', 'Confirm password']] as [$field, $label])
            <div>
                <label for="{{ $field }}" class="mb-2 block text-sm font-medium">{{ $label }}</label>
                <input id="{{ $field }}" name="{{ $field }}" type="password" required class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
                @error($field) <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
            </div>
        @endforeach
        <button type="submit" class="h-12 w-full bg-[#275d78] text-sm font-medium text-white">Reset password</button>
    </form>
</x-guest-layout>
