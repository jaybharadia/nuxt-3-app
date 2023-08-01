<template>
    <div style="padding: 24px; text-align: center">
        <form
            :onSubmit="handleSubmit"
            :style="{
                width: '550px',
                margin: '20px',
                padding: '10px',
                border: '2px solid lightseagreen',
                borderRadius: '10px',
            }"
        >
            <div>
                Banana
                {{
                    (prices.banana / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "usd",
                    })
                }}
                :

                <div>
                    <button
                        @click="addToCart('banana')"
                        :style="{
                            padding: '16px',
                        }"
                    >
                        +
                    </button>
                    <button
                        @click="handleCartChange('banana', 'decrease')"
                        :disabled="cart.cucumber <= 0"
                        :style="{
                            padding: '16px',
                        }"
                    >
                        -
                    </button>
                    {{ cart.banana }}
                </div>
            </div>

            <div>
                Cucumber
                {{
                    (prices.cucumber / 100).toLocaleString("en-US", {
                        style: "currency",
                        currency: "usd",
                    })
                }}
                :

                <div>
                    <button
                        @click="addToCart('cucumber')"
                        :style="{
                            padding: '16px',
                        }"
                    >
                        +
                    </button>
                    <button
                        @click="handleCartChange('cucumber', 'decrease')"
                        :disabled="cart.cucumber <= 0"
                        :style="{
                            padding: '16px',
                        }"
                    >
                        -
                    </button>
                    {{ cart.cucumber }}
                </div>
            </div>

            <button @click="handleCartReset">Reset Cart</button>

            <div
                :style="{
                    width: '450px',
                    margin: '10px',
                    padding: '5px',
                    border: '2px solid green',
                    borderRadius: '10px',
                }"
            >
                <!-- <CardElement style={base: {fontSize: '18px'}/> -->
            </div>
        </form>

        <div
            id="card-element"
            style="border: 2px solid lightblue; padding: 20px"
        ></div>

        <div><button @click="handleSubmit">Submit</button></div>
    </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";

export default {
    data() {
        return {
            stripe: null,
            elements: null,
            prices: {
                banana: 150,
                cucumber: 100,
            },
            cart: {
                banana: 0,
                cucumber: 0,
            },
            cardElement: null,
        };
    },
    async mounted() {
        this.stripe = await loadStripe(
            "pk_test_51NaCl1SAXfF6eN2XKqOAfXan8QGcvWcxLJbxObP53jgXMYGBsymeqtLCTIiKvVp9UneL5XQd7fZlwWI9x1l0AuJj00x94shfZC"
        );

        console.log("stripe instance", this.stripe);

        this.elements = this.stripe.elements();

        this.cardElement = this.elements.create("card");

        this.cardElement.mount("#card-element");
    },
    methods: {
        handleCartReset() {
            this.cart = {
                banana: 0,
                cucumber: 0,
            };
        },
        addToCart(id) {
            this.cart[id] = this.cart[id] + 1;
        },
        removeFromCart() {
            this.cart[id] = this.cart[id] - 1;
        },

        handleSubmit() {
            console.log("form submit ");
            this.stripe.createToken(this.cardElement).then(function (result) {
                console.log(
                    "🚀 ~ file: stripe.client.vue:153 ~ this.stripe.createToken ~ result:",
                    result
                );

                if (result.error) {
                    alert(result.error.message);
                }

                // Handle result.error or result.token
            });
        },
    },
};
</script>

<style scoped></style>
