export const createStateCases = (state, payload) => {
    return {
        NO_CURRENT_OPERAND: !state.currentOperand
        , TOO_MANY_DIGITS: state.currentOperand.length === 9 && !state.overwrite
        , AFTER_EVALUATION: state.overwrite && !state.operationChosen
        , ZERO_INPUT: payload.digit === "0" && state.currentOperand === "0."
        , OPERATION_IS_CHOSEN: state.operationChosen
        , DECIMAL_INPUT: payload.digit === "." && state.currentOperand.includes(".")
        , DIGIT_INPUT_AFTER_DECIMAL: state.currentOperand.includes('.') && state.decimalClicked
        , PLUS_MINUS_TOGGLE_CLICKED: payload.digit === '+/-'
        , SQUARE_ROOT_CLICKED: payload.digit === '√'
        , PERCENT_CLICKED: payload.digit === '%'
        , MRC_CLICKED: payload.digit === 'MRC'
        , M_PLUS_OR_MINUS_CLICKED: payload.digit === 'M+' || payload.digit === 'M-'
    }
}