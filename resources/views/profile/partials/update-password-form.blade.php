<form method="POST" action="{{ route('password.update') }}" class="space-y-5">
    @csrf
    @method('PUT')
    @foreach ([['update_password_current_password', 'current_password', 'Current password'], ['update_password_password', 'password', 'New password'], ['update_password_password_confirmation', 'password_confirmation', 'Confirm password']] as [$id, $name, $label])
        <div>
            <label for="{{ $id }}" class="mb-2 block text-sm font-medium">{{ $label }}</label>
            <input id="{{ $id }}" name="{{ $name }}" type="password" autocomplete="{{ $name === 'current_password' ? 'current-password' : 'new-password' }}" class="h-12 w-full border border-[#cbdadf] px-4 outline-none">
            @if ($errors->updatePassword->has($name)) <p class="mt-2 text-sm text-[#a43f54]">{{ $errors->updatePassword->first($name) }}</p> @endif
        </div>
    @endforeach
    <button type="submit" class="h-12 bg-[#275d78] px-6 text-sm font-medium text-white">Update password</button>
</form>
