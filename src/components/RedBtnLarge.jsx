import React from 'react'
import classes from './RedBtnLarge.module.css'

const RedBtnLarge = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
    </button>
  )
}

export default RedBtnLarge