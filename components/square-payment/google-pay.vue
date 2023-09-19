<template>
    <form id="payment-form">
        <!-- Add the google-pay-button div below -->
        <div
            id="google-pay-button"
            @click="handlePaymentMethodSubmission"
        ></div>
        <div id="card-container"></div>
    </form>
    <div id="payment-status-container"></div>
</template>

<script>
let googlePay;
let payments;
import { tokenize } from "~/composables/useSquare";
export default {
    async mounted() {
        try {
            googlePay = await this.initializeGooglePay();
        } catch (e) {
            console.error("Initializing Google Pay failed", e);
            // There are a number of reason why Google Pay might not be supported.
            // (e.g. Browser Support, Device Support, Account). Therefore you
            // should handle initialization failures, while still loading other
            // applicable payment methods.
        }
    },
    methods: {
        async initializeGooglePay() {
            const square = useSquare();
            payments = square.payments;
            const paymentRequest = this.buildPaymentRequest(payments);

            const googlePay = await payments.googlePay(paymentRequest);
            await googlePay.attach("#google-pay-button");

            return googlePay;
        },
        // Required in SCA Mandated Regions: Learn more at https://developer.squareup.com/docs/sca-overview
        async verifyBuyer(payments, token) {
            const verificationDetails = {
                amount: "1.00",
                billingContact: {
                    addressLines: ["123 Main Street", "Apartment 1"],
                    familyName: "Doe",
                    givenName: "John",
                    email: "john.doe@square.example",
                    country: "GB",
                    phone: "3214563987",
                    region: "LND",
                    city: "London",
                },
                currencyCode: "USD",
                intent: "CHARGE",
            };

            const verificationResults = await payments.verifyBuyer(
                token,
                verificationDetails
            );
            return verificationResults.token;
        },
        async handlePaymentMethodSubmission() {
            console.log(
                "🚀 ~ file: google-pay.vue:69 ~ handlePaymentMethodSubmission ~ paymentMethod:",
                googlePay
            );
            // event.preventDefault();

            try {
                const token = await tokenize(googlePay);
                let verificationToken = await verifyBuyer(payments, token);
                const paymentResults = await createPayment(
                    token,
                    verificationToken
                );
                // displayPaymentResults("SUCCESS");
                console.log("Payment Success");

                console.debug("Payment Success", paymentResults);
            } catch (e) {
                // displayPaymentResults("FAILURE");
                console.error(e.message);
            }
        },
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
    },
};
</script>

<style scoped></style>
