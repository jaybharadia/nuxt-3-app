<template>
    <div>
        COUNTER STATE
        <pre>{{ state }}</pre>
    </div>
</template>

<script setup>
import { useQuiz } from "~/composables/useQuiz.js";
const { state } = useQuiz();
console.log("🚀 ~ file: index.vue:8 ~ state:", state);

// setTimeout(() => {
//     addState({
//         name: "Counter",
//         id: 10,
//     });
// }, 5000);
</script>
