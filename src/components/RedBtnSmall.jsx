import React from 'react'
import classes from './RedBtnSmall.module.css'

const RedBtnSmall = () => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>+</div>
    </button>
  )
}

export default RedBtnSmall