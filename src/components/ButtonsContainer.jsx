import React from 'react'
import classes from './ButtonsContainer.module.css'
import RedBtnSmall from './RedBtnSmall'
import ButtonsInnerContainer from './ButtonsInnerContainer'

const ButtonsContainer = () => {
  return (
    <div className={classes['buttons-container']}>
      <ButtonsInnerContainer />
    </div>
  )
}

export default ButtonsContainer