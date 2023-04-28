// Components
import Screen from '../Screen/Screen';
import ScreenAreaDots from '../ScreenAreaDots/ScreenAreaDots';

// Styles
import classes from './ScreenContainer.module.css';

const ScreenContainer = () => {
    return (
        <div className={ classes[ 'screen-container' ] }>
            <ScreenAreaDots />
            <Screen />
            <ScreenAreaDots />
        </div>
    );
};

export default ScreenContainer;
