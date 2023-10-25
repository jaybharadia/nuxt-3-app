// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {},
    },

    app: {
        head: {
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
            link: [{ rel: "manifest", href: "/manifest.json" }],
        },
    },

    devtools: {
        enabled: true,
    },
    css: ["~/assets/styles/index.css"],
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
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image-edge",
        "@vite-pwa/nuxt",
        "vue3-carousel-nuxt",
    ],
    pwa: {
        registerType: "autoUpdate",
        manifest: {
            name: "Trevenor",
            short_name: "trevenor",
            theme_color: "#0D6EFD",
        },
        icon: {
            source: "/favicon.png",
        },
    },
});
