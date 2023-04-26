export const handleAfterEvaluation = (state, payload) => {
    return {
        ...state,
        currentOperand: `${payload.digit}.`
        , overwrite: false
    }
}