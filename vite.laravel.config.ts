import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['src/index.css', 'resources/js/storefront.js'],
      refresh: ['resources/views/**', 'routes/**'],
    }),
    tailwindcss(),
  ],
})
