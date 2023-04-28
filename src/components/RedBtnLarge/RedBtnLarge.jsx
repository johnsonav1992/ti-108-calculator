import { useContext } from 'react';

// Components
import ButtonDots from '../ButtonDots/ButtonDots';

// Context
import { calcContext } from '../../context/context';

// Styles
import classes from './RedBtnLarge.module.css';

const RedBtnLarge = ( {
    children
    , action
} ) => {
    const { dispatch } = useContext( calcContext );

    return (
        <button
            className={ classes.btn }
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
