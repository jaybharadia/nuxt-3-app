<template>
    <div class="h-screen flex flex-col justify-between">
        <carousel :items-to-show="1" class="grow">
            <slide v-for="(step, index) in $options.steps" :key="index">
                <div class="flex flex-col gap-10">
                    <img
                        :src="step.media"
                        class="aspect-4/3 grow rounded-3xl"
                    />
                    <h2 class="text-3xl px-5">{{ step.heading }}</h2>
                    <div class="text-gray-500 px-10">
                        {{ step.description }}
                    </div>
                </div>
            </slide>

            <template #addons>
                <Pagination />
            </template>
        </carousel>

        <button class="bg-primary-500 p-4 rounded-3xl m-4">Next</button>

        <VitePwaManifest />
    </div>
</template>

<script>
import { version } from "~/package.json";
import { Carousel, Slide, Pagination } from "vue3-carousel";
export default {
    version,
    steps: [
        {
            heading: "Life is short and the world is wide",
            description:
                "At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world",
            media: "/images/onboarding-1.png",
        },
        {
            heading: "It’s a big world out there go explore",
            description:
                "To get the best of your adventure you just need to leave and go where you like. we are waiting for you",
            media: "/images/onboarding-2.jpeg",
        },
        {
            heading: "People don’t take trips, trips take people",
            description:
                "To get the best of your adventure you just need to leave and go where you like. we are waiting for you",
            media: "/images/onboarding-3.jpeg",
        },
    ],
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    created() {},
    mounted() {},
};
</script>

<style>
.carousel__viewport {
    height: 90%;
}

.carousel__track {
    height: 100%;
}

.carousel__slide {
    align-items: normal;
}

.carousel__pagination-button::after {
    @apply bg-primary-300 h-2 rounded-3xl;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
    @apply bg-primary-500 !w-6;
}
</style>
