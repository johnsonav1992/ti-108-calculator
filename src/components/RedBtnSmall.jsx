import React from 'react'
import ButtonDots from './ButtonDots'
import classes from './RedBtnSmall.module.css'

const RedBtnSmall = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
      <ButtonDots 
        dotNumber={27}
        color='red'
      />
    </button>
  )
}

export default RedBtnSmall