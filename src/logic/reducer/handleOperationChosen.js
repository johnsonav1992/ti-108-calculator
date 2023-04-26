export const handleOperationChosen = (state, payload) => {
    const numberToTest = state.decimalClicked ? state.previousOperand : state.currentOperand;
    const containsDigitsAfterDecimal = /^\d+\.\d+$/.test(numberToTest);

    if (payload.digit === ".") {
        return containsDigitsAfterDecimal
            ? { ...state
                , decimalClicked: true 
                , currentOperand: "0."
            }
            : {
                ...state,
                decimalClicked: true
                , previousOperand: state.currentOperand
            };
    }

    const decimal = state.currentOperand.indexOf(".");

    if (decimal > -1 && state.decimalClicked) {
        return {
            ...state,
            currentOperand:
            state.currentOperand.length - decimal <= 8
                ? `${state.currentOperand}${payload.digit}`
                : state.currentOperand
        };
    }

    return {
        ...state,
        decimalClicked: false,
        currentOperand:
            state.currentOperand === "0."
            ? `${payload.digit}.`
            : state.currentOperand !== "0." && state.currentOperand !== state.previousOperand
                ? `${state.currentOperand.slice(0, -1) || ""}${payload.digit}.`
                : `${payload.digit}.`
    };
}