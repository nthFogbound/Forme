<x-app-layout>
    <div class="mx-auto max-w-5xl px-6 py-12">
        <header class="mb-10">
            <p class="mb-2 text-xs font-medium text-[#275d78]">YOUR FORME ACCOUNT</p>
            <h1 class="text-4xl font-medium">Hello, {{ $user->name }}</h1>
            <p class="mt-2 text-sm text-[#66777f]">Customer since {{ $user->created_at->format('F Y') }}</p>
        </header>

        <div class="grid gap-6 lg:grid-cols-2">
            <section class="border border-[#d5e1e5] bg-white p-6">
                <h2 class="mb-6 text-xl font-medium">Profile information</h2>
                @include('profile.partials.update-profile-information-form')
            </section>
            <section class="border border-[#d5e1e5] bg-white p-6">
                <h2 class="mb-6 text-xl font-medium">Update password</h2>
                @include('profile.partials.update-password-form')
            </section>
            <section class="border border-[#e4c9ce] bg-white p-6 lg:col-span-2">
                <h2 class="mb-3 text-xl font-medium text-[#8e3547]">Delete account</h2>
                @include('profile.partials.delete-user-form')
            </section>
        </div>
    </div>
</x-app-layout>
