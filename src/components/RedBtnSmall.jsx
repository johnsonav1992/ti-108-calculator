import React from 'react'
import ButtonDots from './ButtonDots'
import classes from './RedBtnSmall.module.css'

const RedBtnSmall = ({ children, largeText }) => {
  return (
    <button className={classes.btn}>
      <div className={
        largeText
          ? classes['large-digit']
          : classes.digit
      }
      >
        { children }
      </div>
      <ButtonDots 
        dotNumber={27}
        color='red'
      />
    </button>
  )
}

export default RedBtnSmall