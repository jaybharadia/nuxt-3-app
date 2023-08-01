<template>
    <div>
        Version {{ version }}
        <div>Inside Index PAGE</div>

        <!-- <Counter /> -->

        <NuxtImgWrapper />

        <Stripe/>
    </div>
</template>

<script setup>
import { version } from "../package.json";

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

    const item = await useUser();

    return item;
});
definePageMeta({
    layout: "mobile",
});
</script>
