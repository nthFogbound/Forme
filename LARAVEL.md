# Laravel integration

The storefront is available as a server-rendered Blade view at
`resources/views/storefront.blade.php`. It does not require React at runtime.

## Use in a Laravel application

1. Copy `resources/views/storefront.blade.php`, `routes/web.php`, `src/index.css`,
   and `public/assets` into the corresponding project locations.
2. Merge `vite.laravel.config.ts` and the `laravel-vite-plugin` dependency into
   the Laravel application's Vite setup. The view loads the stylesheet through
   Laravel's `@vite` directive.
3. Run `pnpm dev:laravel` during Laravel development or
   `pnpm build:laravel` for production assets.

The original React entry remains solely so the existing Figma Make preview can
continue to run. New Laravel-facing markup changes should be made in the Blade
view.
