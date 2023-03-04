import { ACTIONS } from "./actions"
import { evaluate } from "./evaluate"

export function reducer(state, { type, payload }) {
    // eslint-disable-next-line default-case
    switch (type) {
        case ACTIONS.INPUT_DIGIT:
            if (!state.currentOperand) return state

            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if (payload.digit === "0" && state.currentOperand === "0.") return state
            if (payload.digit === "." && state.currentOperand.includes(".")) return state

            if (state.currentOperand.length === 7) return { ...state }
            
            return {
                ...state,
                currentOperand: 
                    state.currentOperand === "0"
                        ? `${payload.digit}`
                        :`${state.currentOperand || ""}${payload.digit}`
            }

        case ACTIONS.CHOOSE_OPERATION:
    
            if (!state.currentOperand) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }
    
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null,
            }

        case ACTIONS.CLEAR: return { currentOperand: "0" }
        
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
                currentOperand: evaluate(state)
            }
    }
}