<template>
    <div>Directus</div>
</template>

<script>
import { createDirectus, readItems, updateItem } from "@directus/sdk";
import { rest } from "@directus/sdk/rest";
export default {
    async setup() {
        // Client with REST support
        const client = createDirectus("http://localhost:8055").with(rest());

        // Client with GraphQL support

        // const result = await client.request(readItems("order_status"));
        // console.log("🚀 ~ file: directus.vue:16 ~ setup ~ result:", result);

        const result = await client.request(
            updateItem("companies", 11, {
                company_type_id: {
                    id: 3,
                    label: "Public Limited com",
                },
            })
        );
        console.log("🚀 ~ file: directus.vue:21 ~ setup ~ result:", result);
    },
};
</script>

<style scoped></style>
