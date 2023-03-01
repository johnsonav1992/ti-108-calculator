import React from 'react'
import ButtonDots from './ButtonDots'
import classes from './WhiteBtnSmall.module.css'

const WhiteBtnSmall = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
      <ButtonDots 
        dotNumber={27}
        color='white'
      />
    </button>
  )
}

export default WhiteBtnSmall