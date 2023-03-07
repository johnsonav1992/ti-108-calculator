import { ACTIONS } from "./actions"
import { evaluate } from "./evaluate"

export function reducer(state, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.INPUT_DIGIT:
            // Edge cases
            if (!state.currentOperand) {
                alert('Turn the calculator on first!')
                return state
            }
            if (state.currentOperand.length === 7) return { ...state }

            // After an evaluation - overwrite
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: 
                        !state.operationChosen 
                            ? `${payload.digit}.` 
                            : `${state.currentOperand.slice(0, -1) || ""}${payload.digit}.`
                    , overwrite: false
                }
            }

            // Zero input and decimal input
            if (payload.digit === "0" && state.currentOperand === "0.") return state
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return {
                    ...state
                    , decimalClicked: true
                }
            }
            
            // Input digits after decimal clicked
            if(state.currentOperand.includes('.') && state.decimalClicked) {
                return {
                    ...state
                    , currentOperand: `${state.currentOperand}${payload.digit}`
                }
            }
            
            // Default input digit / if operation has been chosen
            return {
                ...state,
                currentOperand: 
                    (state.currentOperand === "0." || state.operationChosen)
                        ? `${payload.digit}.`
                        : `${state.currentOperand.slice(0, -1) || ""}${payload.digit}.`
            }

        case ACTIONS.CHOOSE_OPERATION:
    
            if (!state.currentOperand) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }
    
            // return {
            //     ...state,
            //     previousOperand: evaluate(state),
            //     operation: payload.operation,
            //     currentOperand: null,
            // }

            return {
                ...state
                , previousOperand: state.currentOperand
                , operation: payload.operation
                , operationChosen: true
            }

        case ACTIONS.CLEAR: return { currentOperand: "0." }
        
        case ACTIONS.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) return state
    
            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                operationChosen: null,
                currentOperand: evaluate(state)
            }
    }
}