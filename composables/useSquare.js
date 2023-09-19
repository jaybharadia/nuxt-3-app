export const useSquare = () => {
    const {
        public: {
            square: { appId, locationId },
        },
    } = useRuntimeConfig();

    if (!Square) {
        throw new Error("Square.js failed to load properly");
    }

    const payments = Square.payments(appId, locationId);

    return {
        payments,
    };
};
