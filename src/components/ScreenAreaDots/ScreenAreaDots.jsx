// Styles
import classes from './ScreenAreaDots.module.css';

const ScreenAreaDots = () => {
    return (
        <div className={ classes.container }>
            { [ ...Array( 80 ) ].map( ( dot, i ) => (
                <div
                    className={ classes.dot }
                    key={ i }
                />
            )
            ) }
        </div>
    );
};

export default ScreenAreaDots;
