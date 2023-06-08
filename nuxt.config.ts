// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
      OPEN_API_KEY : 'asdadaoadjij22',
      public:{
          WEATHER_KEY : 'asdjiadij'
      }
  },

  devtools: {
    enabled: true
  },

  modules: ['@nuxtjs/tailwindcss']
})