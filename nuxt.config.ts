// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-content-assets', '@nuxt/content', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-11-09'
})