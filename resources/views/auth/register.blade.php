<x-guest-layout>
    <p class="mb-2 text-xs font-medium text-[#275d78]">JOIN FORME</p>
    <h1 class="mb-8 text-4xl font-medium">Create your account</h1>
    <form method="POST" action="{{ route('register') }}" class="space-y-5">
        @csrf
        @foreach ([['name', 'Name', 'text', 'name'], ['email', 'Email', 'email', 'username']] as [$field, $label, $type, $autocomplete])
            <div>
                <label for="{{ $field }}" class="mb-2 block text-sm font-medium">{{ $label }}</label>
                <input id="{{ $field }}" name="{{ $field }}" type="{{ $type }}" value="{{ old($field) }}" required autocomplete="{{ $autocomplete }}" class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
                @error($field) <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
            </div>
        @endforeach
        @foreach ([['password', 'Password'], ['password_confirmation', 'Confirm password']] as [$field, $label])
            <div>
                <label for="{{ $field }}" class="mb-2 block text-sm font-medium">{{ $label }}</label>
                <input id="{{ $field }}" name="{{ $field }}" type="password" required autocomplete="new-password" class="h-12 w-full border border-[#cbdadf] bg-white px-4 outline-none">
                @error($field) <p class="mt-2 text-sm text-[#a43f54]">{{ $message }}</p> @enderror
            </div>
        @endforeach
        <button type="submit" class="h-12 w-full bg-[#275d78] text-sm font-medium text-white">Create account</button>
    </form>
    <p class="mt-6 text-sm">Already registered? <a href="{{ route('login') }}" class="text-[#275d78]">Sign in</a></p>
</x-guest-layout>
