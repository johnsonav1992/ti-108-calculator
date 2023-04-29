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
    , overwrite: null
    , operationChosen: null
    , memory: '0.'
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
