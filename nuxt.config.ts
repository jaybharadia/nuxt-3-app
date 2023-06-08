// https://nuxt.com/docs/api/configuration/nuxt-config

const directusUrl = 'https://products.7span.in';

export default defineNuxtConfig({
  runtimeConfig:{
      OPEN_API_KEY : 'asdadaoadjij22',
      public:{
          WEATHER_KEY : 'asdjiadij'
      }
  },
  directus : {
    url : directusUrl,
  },

  devtools: {
    enabled: true
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-directus']
})