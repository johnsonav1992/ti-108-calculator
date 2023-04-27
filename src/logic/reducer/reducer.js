/* eslint-disable no-fallthrough */
import { ACTIONS } from "../actions"
import { evaluate } from "../utils/evaluate"
import { evaluateMemory } from "../utils/evaluateMemory"
import { handleCalcIsOff } from "./edgeCases"
import { handleAfterEvaluation } from "./handleAfterEvaluation"
import { handleChooseOperation } from "./handleChooseOperation"
import { handleOperationChosen } from "./handleOperationChosen"
import { createStateCases } from "./stateCases"

export function reducer(state, { type, payload }) {
    const CASES = createStateCases(state, payload);

    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.INPUT_DIGIT:

            if (CASES.NO_CURRENT_OPERAND) {
                return handleCalcIsOff(state)
            }

            if (CASES.TOO_MANY_DIGITS) return state

            if (CASES.AFTER_EVALUATION) {
                return handleAfterEvaluation(state, payload)
            }
            
            if (CASES.ZERO_INPUT) return state
            
            if (CASES.OPERATION_IS_CHOSEN) {
                return handleOperationChosen(state, payload)
            }
            
            if (CASES.DECIMAL_INPUT) {
                return {
                    ...state
                    , decimalClicked: true
                }
            }

            if (CASES.DIGIT_INPUT_AFTER_DECIMAL) {
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

            if (CASES.PLUS_MINUS_TOGGLE_CLICKED) {
                if (state.currentOperand === '0.') return { ...state }

                const convertedNumber = (state.currentOperand.startsWith("-")) 
                    ? state.currentOperand.slice(1) 
                    : "-" + state.currentOperand;

                return { 
                    ...state, 
                    currentOperand: convertedNumber
                }
            }

            if (CASES.SQUARE_ROOT_CLICKED) {
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

            if (CASES.PERCENT_CLICKED) {
                return {
                    ...state
                    , currentOperand: evaluate({ 
                        ...state
                        , percentClicked: true
                    })
                    , percentClicked: false
                }
            }

            if (CASES.MRC_CLICKED) {
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

            if (CASES.M_PLUS_OR_MINUS_CLICKED) {
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
                previousOperand: state.currentOperand,
                operationChosen: null,
                decimalClicked: false,
                currentOperand: evaluate(state)
            }
    }
}