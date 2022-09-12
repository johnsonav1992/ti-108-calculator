import React from 'react'
import Screen from './Screen'
import classes from './ScreenContainer.module.css'

const ScreenContainer = ({ children }) => {
  return (
    <div className={classes['screen-container']}><Screen /></div>
  )
}

export default ScreenContainer