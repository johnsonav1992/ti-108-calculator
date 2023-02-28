import React from 'react'
import classes from './ButtonsContainer.module.css'
import RedBtnSmall from './RedBtnSmall'
import WhiteBtnSmall from './WhiteBtnSmall'
import ButtonsInnerContainer from './ButtonsInnerContainer'
import { mainSectionButtons, operandSectionButtons } from '../data/buttons'
import RedBtnLarge from './RedBtnLarge'

const ButtonsContainer = () => {
  return (
    <div className={classes['buttons-container']}>
      <ButtonsInnerContainer>
        <div className={classes['main-buttons-container']}>
        { mainSectionButtons.map(button => 
          button.color === 'red' 
            ? <RedBtnSmall key={button.label}>{button.label}</RedBtnSmall>
            : <WhiteBtnSmall key={button.label}>{button.label}</WhiteBtnSmall>
        )}
        </div>
        <div className={classes['operands-container']}>
          { operandSectionButtons.map(button =>
            button.function !== 'EVALUATE'
              ? <RedBtnSmall key={button.label}>{button.label}</RedBtnSmall>
              : <RedBtnLarge key={button.label}>{button.label}</RedBtnLarge>
          )}
        </div>
      </ButtonsInnerContainer>
    </div>
  )
}

export default ButtonsContainer