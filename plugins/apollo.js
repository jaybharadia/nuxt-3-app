import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client/core";

import { createApolloProvider } from "@vue/apollo-option";

import VueApolloComponents from "@vue/apollo-components";

export default defineNuxtPlugin((nuxtApp) => {
    // HTTP connection to the API
    const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: "https://api-bii.preview.im/graphql/open",
    });

    // Cache implementation
    const cache = new InMemoryCache();

    // Create the apollo client
    const apolloClient = new ApolloClient({
        link: httpLink,
        cache,
    });

    const apolloProvider = createApolloProvider({
        defaultClient: apolloClient,
    });

    nuxtApp.vueApp.use(apolloProvider);
    nuxtApp.vueApp.use(VueApolloComponents);
});
