import {
    createContext
    , useReducer
} from 'react';

// Utils
import { reducer } from '../logic/reducer/reducer';

const initState = {
    currentOperand: null
    , previousOperand: null
    , operation: null
    , overwrite: false
    , operationChosen: false
    , decimalClicked: false
    , percentClicked: false
    , memory: '0.'
    , error: false
};

export const calcContext = createContext( initState );

const ContextProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initState );

    return (
        <calcContext.Provider value={ {
            ...state
            , dispatch
        } }
        >
            { children }
        </calcContext.Provider>
    );
};

export default ContextProvider;
