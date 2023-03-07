import React, { createContext, useReducer } from "react";
import { reducer } from "../logic/reducer";

export const calcContext = createContext( {
    currentOperand: null
    , previousOperand: null
    , operation: null
    , overwrite: null
    , operationChosen: null
    , dispatch: () => {}
} );

const ContextProvider = ({ children }) => {
    const [{ 
		currentOperand
		, previousOperand
		, operation
        , operationChosen
        , overwrite
	}, dispatch] = useReducer(reducer, {})

    return (
        <calcContext.Provider value={{
            currentOperand
            , previousOperand
            , operation
            , operationChosen
            , overwrite
            , dispatch
        }}>
            {children}
        </calcContext.Provider>
    )
}

export default ContextProvider