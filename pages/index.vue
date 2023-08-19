<template>
    <NuxtErrorBoundary>
        <!-- You use the default slot to render your content -->
        <div>
            Version {{ version }}
            <div>Inside Index PAGE</div>

            <AddToCart>
                <div v-for="_ in 10">
                    <div>
                        {{ data.items.cart[0].asda.asda }}
                    </div>
                </div>
            </AddToCart>

            <!-- <Counter /> -->

            <NuxtImgWrapper />
        </div>
        <template #error="{ error, clearError }">
            You can display the error locally here: {{ error }}
            <button @click="clearError">This will clear the error.</button>
        </template>
    </NuxtErrorBoundary>
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
