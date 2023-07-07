// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindForms from '@tailwindcss/forms';
export default defineNuxtConfig({
  modules:
   [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
   ],
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {
        tailwindForms
      },
      autoprefixer: {},
    },
  }
})
