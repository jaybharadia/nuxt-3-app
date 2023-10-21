<template>
    <div>
        state is
        <pre>{{ state }}</pre>

        <Counter />
    </div>
</template>

<script setup>
const { state, addState } = useQuiz();
console.log("🚀 ~ file: index.vue:8 ~ state:", state);

setTimeout(() => {
    addState({
        name: "XYZ",
        id: 10,
    });
}, 5000);
</script>
