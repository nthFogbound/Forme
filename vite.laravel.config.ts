import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      input: ['src/index.css'],
      refresh: ['resources/views/**', 'routes/**'],
    }),
    tailwindcss(),
  ],
})
