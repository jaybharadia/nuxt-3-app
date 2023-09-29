<template>
    <div
        class="flex flex-col gap-4 divide-x divide-y justify-center items-center h-screen"
    >
        <div class="p-4 border border-rounded">
            <h2>Pay by Card</h2>
            <SquarePaymentCard />
        </div>
        <div class="p-4 border border-rounded">
            <h2>Google Pay</h2>
            <SquarePaymentGooglePay />
        </div>
        <div class="p-4 border border-rounded">
            <h2>Apply Pay</h2>
            <SquarePaymentApplePay />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "mobile",
});
</script>
