const state = reactive([
    {
        name: "jay",
        id: 2,
    },
    {
        name: "jash",
        id: 3,
    },
]);

const addState = (item) => {
    state.push(item);
};

export const useQuiz = () => {
    return {
        state,
        addState,
    };
};
