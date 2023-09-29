<template>
    <div>Version v{{ version }}</div>

    <slot />
</template>

<script setup>
import { version } from "../package.json";
</script>
