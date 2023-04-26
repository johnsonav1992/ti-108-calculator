/* eslint-disable no-fallthrough */
import { ACTIONS } from "./actions"
import { evaluate } from "./utils/evaluate"
import { evaluateMemory } from "./utils/evaluateMemory"

export function reducer(state, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.INPUT_DIGIT:
            // Edge cases (calc off or too many digits)
            if (!state.currentOperand) {
                alert('Turn the calculator on first!')
                return { ...state }
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
            
            // Zero input
            if (payload.digit === "0" && state.currentOperand === "0.") return state
            
            
            // After operation chosen
            if (state.operationChosen) {
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
                            decimalClicked: true,
                            previousOperand: state.currentOperand,
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
            
            // Decimal input
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
        
        case ACTIONS.SPECIALTY: 

            // +/- toggle
            if (payload.digit === '+/-') {
                if (state.currentOperand === '0.') return { ...state }

                const convertedNumber = (state.currentOperand.startsWith("-")) 
                    ? state.currentOperand.slice(1) 
                    : "-" + state.currentOperand;

                return { 
                    ...state, 
                    currentOperand: convertedNumber
                }
            }

            // Square root
            if (payload.digit === '√') {
                if (state.currentOperand === '0.') return { ...state }

                return {
                    ...state
                    , currentOperand: evaluate({
                        currentOperand: state.currentOperand
                        , previousOperand: null
                        , operation: payload.digit
                    })
                }
            }

            // Percent
            if (payload.digit === '%') {
                return {
                    ...state
                    , currentOperand: evaluate({ 
                        ...state
                        , percentClicked: true
                    })
                    , percentClicked: false
                }
            }

            // Memory
            if (payload.digit === 'MRC') {
                return {
                    ...state
                    , currentOperand: state.memory
                }
            }

            if (payload.digit === 'M+' || payload.digit === 'M-') {
                return {
                    ...state
                    , currentOperand: evaluateMemory(state, payload.digit)
                }
            }
        
        case ACTIONS.CLEAR: return { 
            memory: '0.'
            , currentOperand: "0." }
        
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