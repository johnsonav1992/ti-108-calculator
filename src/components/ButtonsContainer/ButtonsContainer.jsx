// Logic
import { ACTIONS } from '../../logic/actions';

// Data
import {
    mainSectionButtons
    , operandSectionButtons
} from '../../data/buttons';

// Components
import RedBtnLarge from '../RedBtnLarge/RedBtnLarge';
import ButtonsInnerContainer from '../ButtonsInnerContainer/ButtonsInnerContainer';
import WhiteBtnSmall from '../WhiteBtnSmall/WhiteBtnSmall';
import RedBtnSmall from '../RedBtnSmall/RedBtnSmall';

// Styles
import classes from './ButtonsContainer.module.css';

const ButtonsContainer = () => {
    return (
        <div className={ classes[ 'buttons-container' ] }>
            <ButtonsInnerContainer>
                <div className={ classes[ 'main-buttons-container' ] }>
                    { mainSectionButtons.map( button =>
                        button.color === 'red'
                            ? (
                                <RedBtnSmall
                                    key={ button.label }
                                    action={ button.action }
                                >
                                    { button.label }
                                </RedBtnSmall>
                            )
                            : (
                                <WhiteBtnSmall
                                    key={ button.label }
                                    action={ button.action }
                                >
                                    { button.label }
                                </WhiteBtnSmall>
                            )
                    ) }
                </div>
                <div className={ classes[ 'operands-container' ] }>
                    { operandSectionButtons.map( button =>
                        button.action !== ACTIONS.EVALUATE
                            ? (
                                <RedBtnSmall
                                    key={ button.label }
                                    largeText
                                    action={ button.action }
                                >
                                    { button.label }
                                </RedBtnSmall>
                            )
                            : (
                                <RedBtnLarge
                                    key={ button.label }
                                    action={ button.action }
                                >
                                    { button.label }
                                </RedBtnLarge>
                            )
                    ) }
                </div>
            </ButtonsInnerContainer>
        </div>
    );
};

export default ButtonsContainer;
