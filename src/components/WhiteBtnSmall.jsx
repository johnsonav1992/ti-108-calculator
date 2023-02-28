import React from 'react'
import classes from './WhiteBtnSmall.module.css'

const WhiteBtnSmall = ({ children }) => {
  return (
    <button className={classes.btn}>
      <div className={classes.digit}>{ children }</div>
    </button>
  )
}

export default WhiteBtnSmall