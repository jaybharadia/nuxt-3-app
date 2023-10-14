<template>
    <div class="m-4">
        <img src="/favicon.png" width="32" />

        {{ $options.version }}
    </div>
</template>

<script>
import { version } from "~/package.json";
export default {
    version,
    created() {
        console.log("pwa", this.$pwa);

        this.$pwa.install();
    },
    mounted() {
        this.$pwa.install();
    },
};
</script>
