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
            if (state.currentOperand.length === 9) return { ...state }

            // After an evaluation - overwrite
            if (state.overwrite && !state.operationChosen) {
                return {
                    ...state,
                    currentOperand: `${payload.digit}.`
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
            
            
            // After operation chosen
            if (state.operationChosen) {
                const numberToTest = state.decimalClicked ? state.previousOperand : state.currentOperand
                const containsDigitsAfterDecimal = /^\d+\.\d+$/.test(numberToTest)
                
                if (containsDigitsAfterDecimal) {
                    return {
                        ...state
                        , previousOperand: state.currentOperand
                        , currentOperand: `${payload.digit}.`
                    }
                } else {
                    return {
                        ...state
                        , decimalClicked: false
                        , currentOperand: 
                            state.currentOperand === "0."
                            ? `${payload.digit}.`
                            : state.currentOperand !== "0." && state.currentOperand !== state.previousOperand
                            ? `${state.currentOperand.slice(0, -1) || ""}${payload.digit}.`
                            : `${payload.digit}.`
                    }
                }
            }
            
            // Input digits after decimal clicked
            if(state.currentOperand.includes('.') && state.decimalClicked) {
                return {
                    ...state
                    , currentOperand: `${state.currentOperand}${payload.digit}`
                }
            }

            // Default input digit
            return {
                ...state,
                currentOperand:
                    state.currentOperand === "0."
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

            return {
                ...state
                , previousOperand: state.currentOperand
                , decimalClicked: false
                , operation: payload.operation
                , operationChosen: true
            }
        
        case ACTIONS.SPECIALTY: return state

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
                decimalClicked: false,
                currentOperand: evaluate(state)
            }
    }
}