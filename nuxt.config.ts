// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head : {
      script : [
        // Square Web Payment SDK
        { src: "https://sandbox.web.squarecdn.com/v1/square.js" },
      ]
    }
  },
  runtimeConfig:{
      OPEN_API_KEY : 'asdadaoadjij22',
      public:{
          WEATHER_KEY : 'asdjiadij',
          square : {
            appId : process.env.APP_ID,
            locationId : process.env.LOCATION_ID 
          }
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