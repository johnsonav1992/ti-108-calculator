import React from 'react'
import ButtonDots from '../ButtonDots/ButtonDots'
import classes from './RedBtnLarge.module.css'

const RedBtnLarge = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
      <ButtonDots 
        dotNumber={90}
        color='red'
        isLarge
      />
    </button>
  )
}

export default RedBtnLarge