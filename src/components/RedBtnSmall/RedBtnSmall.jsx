import { useContext } from 'react';

// Components
import ButtonDots from '../ButtonDots/ButtonDots';

// Context
import { calcContext } from '../../context/context';

// Logic
import { ACTIONS } from '../../logic/actions';

// Styles
import classes from './RedBtnSmall.module.css';

const RedBtnSmall = ( {
    children
    , action
    , largeText
} ) => {
    const { dispatch } = useContext( calcContext );

    return (
        <button
            className={ classes.btn }
            onClick={ () =>
                dispatch( {
                    type: action
                    , payload:
                        action === ACTIONS.CHOOSE_OPERATION
                            ? { operation: children }
                            : { digit: children }
                } )
            }
        >
            <div className={
                largeText
                    ? classes[ 'large-digit' ]
                    : classes.digit
            }
            >
                { children }
            </div>
            <ButtonDots
                dotNumber={ 27 }
                color='red'
            />
        </button>
    );
};

export default RedBtnSmall;
