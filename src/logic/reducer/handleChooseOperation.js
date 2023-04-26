export const handleChooseOperation = (state, payload) => {
    if (!state.currentOperand) {
        return {
            ...state,
            operation: payload.operation,
        }
    }

    return {
        ...state
        , previousOperand: state.currentOperand
        , decimalClicked: false
        , operation: payload.operation
        , operationChosen: true
    }
}