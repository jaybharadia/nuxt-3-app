// https://nuxt.com/docs/api/configuration/nuxt-config

console.log('prcocess' , process.env.NODE_ENV );
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
  image: {
    // Nuxt Image Module config 
    domains: ['products.7span.in'],
    provider: 'ipx',
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 50,
          height: 50
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge']
})