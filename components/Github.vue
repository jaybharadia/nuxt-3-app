<template>
    <div>
        USer {{ user }}
        <UButton @click="login()">Signin with GitHub </UButton>
    </div>
</template>

<script>
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

export default {
    setup() {
        const user = useCurrentUser();
        const provider = new GithubAuthProvider();

        // const auth = getAuth();
        const auth = useFirebaseAuth();

        return {
            user,
            auth,
            provider,
        };
    },
    methods: {
        login() {
            signInWithPopup(this.auth, this.provider)
                .then((result) => {
                    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                    const credential =
                        GithubAuthProvider.credentialFromResult(result);
                    console.log(
                        "🚀 ~ file: Github.vue:31 ~ .then ~ credential:",
                        credential
                    );

                    const token = credential.accessToken;
                    console.log(
                        "🚀 ~ file: Github.vue:34 ~ .then ~ token:",
                        token
                    );

                    // The signed-in user info.
                    const user = result.user;
                    console.log(
                        "🚀 ~ file: Github.vue:38 ~ .then ~ user:",
                        user
                    );
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                })
                .catch((error) => {
                    console.log("error ", error);
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential =
                        GithubAuthProvider.credentialFromError(error);
                    // ...
                });
        },
    },
};
</script>

<style scoped></style>
