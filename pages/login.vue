<template>
    <div class="flex justify-center self-center z-10">
        <div class="p-12 bg-white mx-auto rounded-3xl w-96">
            <div class="mb-7">
                <h3 class="font-semibold text-2xl text-gray-800">Sign In</h3>
            </div>
            <div class="space-y-6">
                <div class="">
                    <UInput
                        placeholder="you@example.com"
                        icon="i-heroicons-envelope"
                        v-model="email"
                    />
                </div>

                <UInput
                    icon="i-heroicons-envelope"
                    placeholder="*******"
                    type="password"
                    v-model="password"
                />

                <div class="flex items-center justify-between">
                    <div class="text-sm ml-auto">
                        <NuxtLink
                            to="/forgot-password"
                            class="text-purple-700 hover:text-purple-600"
                        >
                            Forgot your password?
                        </NuxtLink>
                    </div>
                </div>
                <div>
                    <UButton
                        block
                        size="lg"
                        :loading="loading"
                        @click.native="signup(email, password)"
                        color="purple"
                        theme="solid"
                        icon="i-uil-arrow-right"
                        trailing
                        label="Sign In"
                    />
                </div>
                <Divider />
                <div class="flex justify-center gap-5 w-full">
                    <FbIcon class="cursor-pointer" name="i-uil-google" />
                    <FbIcon
                        class="cursor-pointer"
                        name="i-uil-github"
                        @click.native="signInWithGithub()"
                    />
                    <FbIcon class="cursor-pointer" name="i-uil-microsoft" />
                    <FbIcon class="cursor-pointer" name="i-uil-twitter" />
                    <FbIcon class="cursor-pointer" name="i-uil-apple" />
                </div>

                <Divider />

                <UButton
                    label="Sign In Anonymously"
                    block
                    color="gray"
                    @click.native="signInRandom"
                />
            </div>
            <div class="mt-7 text-center text-gray-300 text-xs">
                <span>
                    Copyright © 2021-2023
                    <a
                        href="https://codepen.io/uidesignhub"
                        rel=""
                        target="_blank"
                        title="Codepen aji"
                        class="text-purple-500 hover:text-purple-600"
                        >AJI</a
                    ></span
                >
            </div>
        </div>
    </div>
</template>

<script>
import Divider from "~/components/_divider.vue";
export default {
    setup() {
        definePageMeta({
            layout: "auth",
        });
        const {
            signup,
            loading,
            github: { signIn: signInWithGithub },
            signInRandom,
        } = useAuth();

        return {
            signInWithGithub,
            signup,
            loading,
            signInRandom,
        };
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
};
</script>
