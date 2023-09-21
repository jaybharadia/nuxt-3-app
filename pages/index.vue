<template>
    <div>
        <!-- <p>There are {{ data?.ships?.length || 0 }} ships.</p> -->
        <!-- <pre>

            {{ data }}
        </pre>

        <button @click="refresh">Refresh</button> -->

        <ApolloQuery
            ref="apolloQuery"
            :query="query"
            :variables="variables"
            @result="loaded($event)"
        >
            <template #default="result">
                {{ result }}
            </template>
        </ApolloQuery>
    </div>
</template>

<script setup>
const query = gql`
    query company($gstNo: String!, $id: String!) {
        company(gstNo: $gstNo, id: $id) {
            availableCredit
            gstNo
            mobileNo
        }
    }
`;

const loaded = (data) => {
    console.log("🚀 ~ file: index.vue:36 ~ loaded ~ data:", data);
};
const variables = { gstNo: "24AARFJ2195C1ZC", id: "63" };
// const { data, refresh } = await useAsyncQuery(query, variables);

definePageMeta({
    layout: "mobile",
});
</script>
