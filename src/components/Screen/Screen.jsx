import { useContext } from 'react';

// Context
import { calcContext } from '../../context/context';

// Styles
import classes from './Screen.module.css';

const Screen = () => {
    const {
        currentOperand
        , memory
        , error
    } = useContext( calcContext );

    const isNegative = parseFloat( currentOperand ) < 0;
    const formattedOperand = isNegative ? currentOperand.replace( /^./, '' ) : '';

    const memoryHasValue = parseFloat( memory ) !== 0;

    return (
        <div className={ classes.screen }>
            { error
            && (
                <div className={ classes.error }>
                E
                </div>
            ) }
            { memoryHasValue
            && (
                <div className={ classes.memory }>
                  M
                </div>
            ) }
            { isNegative
            && (
                <div className={ classes.negative }>
                  -
                </div>
            ) }
            { isNegative
                ? formattedOperand
                : currentOperand
            }
        </div>
    );
};

export default Screen;
