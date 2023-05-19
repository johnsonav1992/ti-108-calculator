import { useContext } from 'react';
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

export const CalcContext = createContext( initState );

const ContextProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initState );

    return (
        <CalcContext.Provider value={ {
            ...state
            , dispatch
        } }
        >
            { children }
        </CalcContext.Provider>
    );
};

export default ContextProvider;

export const useCalcContext = () => {
    return useContext( CalcContext );
};
