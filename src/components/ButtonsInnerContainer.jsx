import React from 'react'
import classes from './ButtonsInnerContainer.module.css'

const ButtonsInnerContainer = ({ children }) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default ButtonsInnerContainer