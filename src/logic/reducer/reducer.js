/* eslint-disable no-fallthrough */
import { ACTIONS } from "../actions"
import { evaluate } from "../utils/evaluate"
import { evaluateMemory } from "../utils/evaluateMemory"
import { handleCalcIsOff } from "./edgeCases"
import { handleAfterEvaluation } from "./handleAfterEvaluation"
import { handleChooseOperation } from "./handleChooseOperation"
import { handleOperationChosen } from "./handleOperationChosen"

export function reducer(state, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.INPUT_DIGIT:
            if (!state.currentOperand) {
                return handleCalcIsOff(state)
            }

            if (state.currentOperand.length === 9 && !state.overwrite) {
                return state
            }

            if (state.overwrite && !state.operationChosen) {
                return handleAfterEvaluation(state, payload)
            }
            
            if (payload.digit === "0" && state.currentOperand === "0.") {
                return state
            }
            
            if (state.operationChosen) {
                return handleOperationChosen(state, payload)
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
            return handleChooseOperation(state, payload);
        
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
                if ( state.currentOperand === state.memory) {
                    return {
                        ...state
                        , memory: '0.'
                    }
                } else {
                    return {
                        ...state
                        , currentOperand: state.memory
                    }
                }
            }

            if (payload.digit === 'M+' || payload.digit === 'M-') {
                return {
                    ...state
                    , memory: evaluateMemory(state, payload.digit)
                    , overwrite: true
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