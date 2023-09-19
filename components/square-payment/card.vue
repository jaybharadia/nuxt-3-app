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
// const APP_ID = "sandbox-sq0idb-t0toE5gpxVgNRLVI2sQc0Q";
// const LOCATION_ID = "LDAQFD80VDJMC";
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
            const token = await this.tokenize();
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
        },
        async tokenize() {
            try {
                const result = await card.tokenize();
                if (result.status === "OK") {
                    console.log(`Payment token is ${result.token}`);
                    return result.token;
                } else {
                    let errorMessage = `Tokenization failed with status: ${result.status}`;
                    if (result.errors) {
                        errorMessage += ` and errors: ${JSON.stringify(
                            result.errors
                        )}`;
                    }

                    throw new Error(errorMessage);
                }
            } catch (e) {
                console.error(e);
                statusContainer.innerHTML = "Payment Failed";
            }
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
