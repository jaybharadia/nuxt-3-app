<template>
    <Title>Mobile Layout</Title>
    <div>Inside Mobile Layout</div>

    <slot />
</template>

<script setup>
onErrorCaptured(() => {
    console.log("inside on Error composable ");
    return false;
});
</script>
