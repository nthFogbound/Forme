<form method="POST" action="{{ route('account.destroy') }}" class="space-y-5">
    @csrf
    @method('DELETE')
    <p class="text-sm text-[#66777f]">Enter your current password to permanently delete this account.</p>
    <div>
        <label for="delete_password" class="mb-2 block text-sm font-medium">Current password</label>
        <input id="delete_password" name="password" type="password" required autocomplete="current-password" class="h-12 w-full max-w-md border border-[#cbdadf] px-4 outline-none">
        @if ($errors->userDeletion->has('password')) <p class="mt-2 text-sm text-[#a43f54]">{{ $errors->userDeletion->first('password') }}</p> @endif
    </div>
    <button type="submit" class="h-12 bg-[#8e3547] px-6 text-sm font-medium text-white">Delete account</button>
</form>
