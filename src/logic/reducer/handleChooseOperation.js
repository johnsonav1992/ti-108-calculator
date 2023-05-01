import { evaluate } from '../utils/evaluate';

export const handleChooseOperation = ( state, payload ) => {
    if ( !state.currentOperand ) {
        return {
            ...state
            , operation: payload.operation
        };
    }

    if ( state.operationChosen ) {
        return {
            ...state
            , previousOperand: evaluate( state )
            , currentOperand: evaluate( state )
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
