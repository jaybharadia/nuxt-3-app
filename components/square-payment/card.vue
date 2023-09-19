<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <form id="payment-form" @submit.prevent="handlePaymentMethodSubmission">
            <div
                id="payment-status-container"
                ref="paymentStatusContainer"
            ></div>
            <div id="card-container"></div>
            <button
                class="p-4 bg-blue-200 rounded-md"
                id="card-button"
                type="submit"
                ref="payBtn"
            >
                Pay $1.00
            </button>
        </form>
    </div>
</template>

<script>
let card;
import { tokenize } from "~/composables/useSquare";
export default {
    setup() {
        const {
            public: {
                square: { locationId },
            },
        } = useRuntimeConfig();

        return {
            locationId,
        };
    },
    data() {
        return {
            isLoading: false,
        };
    },
    async mounted() {
        this.isLoading = true;
        await this.initCardPayment();
        this.isLoading = false;
    },
    methods: {
        async handlePaymentMethodSubmission() {
            try {
                const token = await tokenize(card);

                const { data, error } = await useFetch("/api/pay", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: {
                        locationId: this.locationId,
                        sourceId: token,
                    },
                });
                console.log(
                    "🚀 ~ file: Card.vue:60 ~ handlePaymentMethodSubmission ~ data:",
                    data
                );

                alert("Payment Success");
            } catch {}
        },

        async initCardPayment() {
            const { payments } = useSquare();

            console.log(
                "🚀 ~ file: SquarePayment.vue:13 ~ mounted ~ payments:",
                payments
            );

            card = await payments.card();
            await card.attach("#card-container");
        },
    },
};
</script>

<style scoped></style>
