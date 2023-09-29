<template>
    <form id="payment-form">
        <!-- Add the below element -->

        <button id="apple-pay-button" type="button" @click="initializeApplePay">
            Pay $1.00
        </button>
    </form>
</template>

<script>
let applePay;

export default {
    mounted() {
        this.initializeApplePay();
    },
    methods: {
        buildPaymentRequest(payments) {
            return payments.paymentRequest({
                countryCode: "US",
                currencyCode: "USD",
                total: {
                    amount: "1.00",
                    label: "Total",
                },
            });
        },

        async initializeApplePay() {
            const { payments } = useSquare();

            const paymentRequest = this.buildPaymentRequest(payments);
            applePay = await payments.applePay(paymentRequest);
            console.log(
                "🚀 ~ file: apple-pay.vue:46 ~ initializeApplePay ~ applePay:",
                applePay
            );
            // Note: You don't need to `attach` applePay.
            return applePay;
        },
    },
};
</script>
