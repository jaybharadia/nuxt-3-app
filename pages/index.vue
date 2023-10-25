<template>
    <div>Version {{ $options.version }}</div>
    <OnboardingCarousel @end="$router.push('/login')" />
    <VitePwaManifest />
</template>

<script>
import { version } from "~/package.json";
export default {
    version,
};
</script>
