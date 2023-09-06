<template>
    <div>
        <div>Inside Index PAGE</div>

        <Counter />
    </div>
</template>

<script setup>
const { data } = await useAsyncData("features", async () => {
    return new Promise(async (resolve) => {
        const user = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: "jay",
                    age: 20,
                });
            }, 3000);
        });

        const item = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    item: "asdasidjasdij2993293",
                });
            }, 1000);
        });
        resolve({
            user,
            item,
        });
    });

    // const item = await useUser();

    // const item = await useFeaturedArticle();

    // return item;
});
console.log(
    "🚀 ~ file: index.vue:40 ~ const{data}=awaituseAsyncData ~ data:",
    data
);
definePageMeta({
    layout: "mobile",
});
</script>
