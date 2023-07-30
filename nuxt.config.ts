// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      apiUrl: process.env.API_URL
    }
  },
  app: {
    head: {
      script: [{ src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js', body: true }]
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  imports: {
    autoImport: true,
    dirs: ['./stores'],
  },
})

