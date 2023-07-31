<template>
    <div>
        Version {{ version }}
        <div>Inside Index PAGE</div>

        <!-- <Counter /> -->

        <NuxtImgWrapper />
    </div>
</template>

<script setup>
import { version } from "../package.json";

useFetch("/api/useData");
const { session } = await useSession();
console.log("🚀 ~ file: index.vue:16 ~ session:", session);

useMyFetch("ek_emojis")
    .then((res) => {
        console.log("🚀 ~ file: index.vue:19 ~ useMyFetch ~ res:", res);
    })
    .catch((error) => {
        console.log("🚀 ~ file: index.vue:22 ~ useMyFetch ~ error:", error);
    });

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
