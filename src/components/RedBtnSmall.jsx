import React from 'react'
import classes from './RedBtnSmall.module.css'

const RedBtnSmall = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
    </button>
  )
}

export default RedBtnSmall