import { evaluate } from '../utils/evaluate';

export const handleChooseOperation = ( state, payload ) => {
    if ( !state.currentOperand ) {
        return {
            ...state
            , operation: payload.operation
        };
    }

    if ( state.operationChosen ) {
        const result = evaluate( state );

        return {
            ...state
            , previousOperand: result
            , currentOperand: result
            , operation: payload.operation
            , operationChosen: true
            , overwrite: true
        };
    }

    return {
        ...state
        , previousOperand: state.currentOperand
        , decimalClicked: false
        , operation: payload.operation
        , operationChosen: true
    };
};
