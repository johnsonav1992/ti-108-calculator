// Components
import ButtonDots from '../ButtonDots/ButtonDots';

// Context
import { useCalcContext } from '../../context/context';

// Logic
import { ACTIONS } from '../../logic/actions';

// Styles
import classes from './RedBtnSmall.module.css';

const RedBtnSmall = ( {
    children
    , action
    , largeText
} ) => {
    const { dispatch } = useCalcContext();

    return (
        <button
            className={ classes.btn }
            data-cy={ `${ children }_button` }
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
