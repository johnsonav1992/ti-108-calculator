import { evaluate } from './evaluate';

export const evaluateMemory = ( state, action ) => {
    let result;

    switch ( action ) {
        case 'M+':
            result = evaluate( {
                previousOperand: state.memory
                , currentOperand: state.currentOperand
                , operation: '+'
            } );
            break;
        case 'M-':
            result = evaluate( {
                previousOperand: state.memory
                , currentOperand: state.currentOperand
                , operation: '-'
            } );
            break;
        default: console.error( 'error evaluating memory' );
    }

    return result;
};
