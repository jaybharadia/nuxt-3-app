// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        OPEN_API_KEY: "asdadaoadjij22",
        public: {
            WEATHER_KEY: "asdjiadij",
        },
    },

    app: {
        head: {
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        },
    },

    devtools: {
        enabled: true,
    },
    image: {
        // Nuxt Image Module config
        domains: ["products.7span.in"],
        provider: "ipx",
        presets: {
            avatar: {
                modifiers: {
                    format: "jpg",
                    width: 50,
                    height: 50,
                },
            },
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@vite-pwa/nuxt"],
    pwa: {
        icon: {
            source: "/favicon.png",
        },
        // devOptions: {
        //     enabled: true,
        // },
    },
});
