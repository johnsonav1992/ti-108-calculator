export const handleOperationChosen = ( state, payload ) => {
    const numberToTest = state.decimalClicked ? state.previousOperand : state.currentOperand;
    const containsDigitsAfterDecimal = /^\d+\.\d+$/.test( numberToTest );
    const decimal = state.currentOperand.indexOf( '.' );
    const noOperationChosen = !state.operationChosen;
    const currentOperandIsNotPrevious = state.currentOperand !== '0.' && state.currentOperand !== state.previousOperand;

    if ( payload.digit === '.' ) {
        return containsDigitsAfterDecimal || state.currentOperand === state.previousOperand
            ? { ...state
                , decimalClicked: true
                , currentOperand: '0.'
            }
            : {
                ...state
                , decimalClicked: true
            };
    }

    if ( decimal > -1 && state.decimalClicked ) {
        return {
            ...state
            , currentOperand:
            state.currentOperand.length - decimal <= 8
                ? `${ state.currentOperand }${ payload.digit }`
                : state.currentOperand
        };
    }

    return {
        ...state
        , decimalClicked: false
        , currentOperand:
            state.currentOperand === '0.'
                ? `${ payload.digit }.`
                : noOperationChosen || currentOperandIsNotPrevious
                    ? `${ state.currentOperand.slice( 0, -1 ) || '' }${ payload.digit }.`
                    : `${ payload.digit }.`
    };
};
