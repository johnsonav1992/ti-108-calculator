import { evaluateStandard } from "./evaluateStandard";
import { parseComputation } from "./parseComputation";
import { evaluate } from './evaluate'

export const evaluateMemory = (state, action) => {
    console.log(state, action)
    let result;

    switch(action) {
        case 'M+': result = evaluate({ previousOperand: state.memory, currentOperand: state.currentOperand, operation: '+'})
            break;
        case 'M-': 
            break;
        default: console.log('hi')
    }

    return result;
}