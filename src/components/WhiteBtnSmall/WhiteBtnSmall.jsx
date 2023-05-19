// Components
import ButtonDots from '../ButtonDots/ButtonDots';

// Context
import { useCalcContext } from '../../context/context';

// Styles
import classes from './WhiteBtnSmall.module.css';

const WhiteBtnSmall = ( {
    children
    , action
} ) => {
    const { dispatch } = useCalcContext();

    return (
        <button
            className={ classes.btn }
            data-cy={ `${ children }_button` }
            onClick={ () => {
                dispatch( {
                    type: action
                    , payload: { digit: children }
                } );
            } }
        >
            <div className={ children === '.'
                ? classes.dot
                : classes.digit }
            >
                { children }
            </div>
            <ButtonDots
                dotNumber={ 27 }
                color='white'
            />
        </button>
    );
};

export default WhiteBtnSmall;
