// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
    public: {
      apiUrl: process.env.API_URL
    }
  },
  imports: {
    autoImport: true,
    dirs: ['./stores'],
  },
  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate'],
  // },
})


// // https://nuxt.com/docs/api/configuration/nuxt-config
// // Como se indicó anteriormente, runtimeConfigambos app.configse utilizan para exponer variables al resto de su aplicación. Para determinar si debe usar uno u otro, aquí hay algunas pautas:
// // runtimeConfig: tokens privados o públicos que deben especificarse después de la compilación mediante variables de entorno.
// // app.config: tokens públicos que se determinan en el momento de la creación, la configuración del sitio web, como la variante del tema, el título y cualquier configuración del proyecto que no sea confidencial.
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   css: ['vuetify/lib/styles/main.sass'],
//   // modules: [
//   // '@invictus.codes/nuxt-vuetify',
//   // '@nuxtjs/tailwindcss',
//   // '@pinia/nuxt',
//   // 'nuxt-icon'
//   // ],
//   // vuetify: {
//   // /* vuetify options */
//   // vuetifyOptions: {
//   // // @TODO: list all vuetify options
//   // },

//   // moduleOptions: {
//   // /* nuxt-vuetify module options */
//   // treeshaking: true | false,
//   // useIconCDN: true | false,

//   // /* vite-plugin-vuetify options */
//   // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
//   // autoImport: true | false,
//   // importLabComponents: true | false,
//   // }
//   // }
//   build: {
//     transpile: ['vuetify'],
//   },
//   vite: {
//     define: {
//       'process.env.DEBUG': false,
//     },
//   },
//   runtimeConfig: {
//     apiUrl: process.env.API_URL,
//     public: {
//       apiUrl: process.env.API_URL
//     }
//   }
//   // publicRuntimeConfig: {
//   // apiUrl: process.env.API_URL
//   // }
// })
