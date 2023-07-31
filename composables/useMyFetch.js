export const useMyFetch = async (api, params) => {
    const { session, update } = await useSession();
    console.log("🚀 ~ file: useMyFetch.js:4 ~ useMyFetch ~ session:", session);

    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("inside Timer *****");

            update({ access_token: "asidjadi2340" });
            resolve(true);
        }, 3000);
    });

    console.log("After Await statement");

    return $fetch(api, {
        baseURL: "https://products.7span.in",
        ...params,
        headers: {
            accept: "application/json",
            Authorization: session.value.id,
        },
    });
};
