<template>
    <div class="h-screen flex flex-col justify-between">
        <button @click="handleCarouselEnd">Skip</button>
        <carousel
            @slide-end="handleSlideEnd"
            :items-to-show="1"
            class="grow onboarding"
            ref="carousel"
        >
            <slide v-for="(step, index) in $options.steps" :key="index">
                <div class="flex flex-col gap-10">
                    <img
                        :src="step.media"
                        class="aspect-4/3 grow rounded-3xl"
                    />
                    <div>
                        <h2 class="text-3xl px-5 mb-5">{{ step.heading }}</h2>

                        <div class="text-gray-500 px-10 mb-5">
                            {{ step.description }}
                        </div>
                    </div>
                </div>
            </slide>

            <template #addons>
                <Pagination />
            </template>
        </carousel>
        <button
            class="bg-primary-500 p-4 rounded-3xl mx-4 mb-4 text-white"
            @click="next"
        >
            Next
        </button>
    </div>
</template>

<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
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

    computed: {
        totalSlides() {
            return this.$refs.carousel.data.slidesCount.value;
        },
        isLastSlide() {
            return (
                this.$refs.carousel.data.currentSlide.value ===
                this.totalSlides - 1
            );
        },
    },
    methods: {
        handleCarouselEnd() {
            this.$emit("end");
        },
        next() {
            console.log(
                "this.$refs.carousel.data.currentSlide",
                this.$refs.carousel.data.currentSlide.value
            );
            if (this.isLastSlide) this.$emit("end");
            else this.$refs.carousel.next();
        },
    },
};
</script>

<style>
.onboarding .carousel__viewport {
    height: 90%;
}

.onboarding .carousel__track {
    height: 100%;
}

.onboarding .carousel__slide {
    align-items: normal;
}

.onboarding .carousel__pagination-button::after {
    @apply bg-primary-300 h-2 rounded-3xl;
}

.onboarding .carousel__pagination-button:hover::after,
.onboarding .carousel__pagination-button--active::after {
    @apply bg-primary-500 !w-6;
}
</style>
