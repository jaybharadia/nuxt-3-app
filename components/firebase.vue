<template>
    <div>
        <h1>Welcome to My Awesome App</h1>
        <!-- <div id="firebaseui-auth-container"></div> -->

        <div>User loaded {{ isUserLoaded }}</div>

        <div>
            User
            <pre>

                {{ user }}
            </pre>
        </div>

        <!-- <Signup /> -->

        <EmailLink />

        <!-- <button @click="signinPopup()">SignIn with Google</button> -->

        <UButton @click="signinPopup()">Signin with Google </UButton>

        <!-- <button @click="logout">Signout</button> -->
        <UButton @click="logout">Sign out</UButton>
    </div>
</template>

<script>
// import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { useIsCurrentUserLoaded } from "vuefire";
import {
    signInWithPopup,
    signOut,
    signInWithRedirect,
    GoogleAuthProvider,
} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();
export default {
    setup() {
        const user = useCurrentUser();
        const auth = useFirebaseAuth();
        const isUserLoaded = useIsCurrentUserLoaded();
        let error = ref(null);

        function signinRedirect() {
            signInWithRedirect(auth, googleAuthProvider).catch((reason) => {
                console.error("Failed signinRedirect", reason);
                error.value = reason;
            });
        }

        function signinPopup() {
            error.value = null;
            signInWithPopup(auth, googleAuthProvider)
                .then(() => {
                    alert("Login Success");
                })
                .catch((reason) => {
                    console.error("Failed sign", reason);
                    error.value = reason;
                });
        }

        const logout = () => {
            signOut(auth)
                .then(() => {
                    alert("Signout success");
                })
                .catch(() => {
                    alert("SignOut ERROR");
                });
        };

        console.log("🚀 ~ file: firebase.vue:12 ~ setup ~ user:", user);

        return {
            user,
            signinPopup,
            signinRedirect,
            isUserLoaded,
            logout,
        };
    },
    mounted() {
        // const ui = new firebaseui.auth.AuthUI(firebase.auth());
        // ui.start("#firebaseui-auth-container", this.$options.uiConfig);
    },
};
</script>

<style scoped></style>
