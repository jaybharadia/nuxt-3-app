<template>
    <div>
        <div>Inside Index PAGE</div>

        <Counter />
    </div>
</template>

<script setup>
const { data } = await useAsyncData("features", async () => {
    // const user = await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({
    //             name: "jay",
    //             age: 20,
    //         });
    //     }, 3000);
    // });

    // const item = await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve({
    //             item: "asdasidjasdij2993293",
    //         });
    //     }, 1000);
    // });

    // const item = await useUser();

    const item = await useFeaturedArticle();

    return item;
});
definePageMeta({
    layout: "mobile",
});
</script>
