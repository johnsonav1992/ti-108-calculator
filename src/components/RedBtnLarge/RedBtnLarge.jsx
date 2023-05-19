// Components
import ButtonDots from '../ButtonDots/ButtonDots';

// Context
import { useCalcContext } from '../../context/context';

// Styles
import classes from './RedBtnLarge.module.css';

const RedBtnLarge = ( {
    children
    , action
} ) => {
    const { dispatch } = useCalcContext();

    return (
        <button
            className={ classes.btn }
            data-cy={ `${ children }_button` }
            onClick={ () =>
                dispatch( {
                    type: action
                } )
            }
        >
            <div className={ classes.digit }>
                { children }
            </div>
            <ButtonDots
                dotNumber={ 90 }
                color='red'
                isLarge
            />
        </button>
    );
};

export default RedBtnLarge;
