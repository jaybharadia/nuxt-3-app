<template>
    <div class="grid place-items-center h-screen bg-gray-50">
        <div>
            <UCard class="w-full lg:max-w-lg p-4 h-80 overflow-scroll">
                <template #header>👤 User Details </template>

                <template #default>
                    <pre>
                        {{ user }}
                    </pre>
                </template>

                <template #footer />
            </UCard>
            <div class="text-center">
                <UButton
                    class="mt-4"
                    color="danger"
                    variant="outline"
                    label="Logout"
                    @click.native="signOut"
                    size="lg"
                    icon="i-uil-arrow-left"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
const user = useCurrentUser();
const router = useRouter();
if (!user.value) router.push("/login");
const { signOut } = useAuth();
</script>
