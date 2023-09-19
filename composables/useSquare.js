export const useSquare = () => {
    const {
        public: {
            square: { appId, locationId },
        },
    } = useRuntimeConfig();

    if (process.client) {
        if (!Square) {
            throw new Error("Square.js failed to load properly");
        }

        const payments = Square.payments(appId, locationId);

        return {
            payments,
            tokenize,
        };
    } else {
        throw new Error("Cannot use square in server side");
    }
};

export const tokenize = async (paymentMethod) => {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === "OK") {
        return tokenResult.token;
    } else {
        let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
        if (tokenResult.errors) {
            errorMessage += ` and errors: ${JSON.stringify(
                tokenResult.errors
            )}`;
        }

        throw new Error(errorMessage);
    }
};
