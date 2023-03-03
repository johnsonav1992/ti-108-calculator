import React, { createContext, useReducer } from "react";
import { reducer } from "../logic/reducer";

export const calcContext = createContext( {
    currentOperand: null
    , previousOperand: null
    , operation: null
    , dispatch: () => {}
} );

const ContextProvider = ({ children }) => {
    const [{ 
		currentOperand
		, previousOperand
		, operation
	}, dispatch] = useReducer(reducer, {})

    return (
        <calcContext.Provider value={{
            currentOperand
            , previousOperand
            , operation
            , dispatch
        }}>
            {children}
        </calcContext.Provider>
    )
}

export default ContextProvider