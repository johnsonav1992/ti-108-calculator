import React from 'react'
import Screen from './Screen'
import ScreenAreaDots from './ScreenAreaDots'
import classes from './ScreenContainer.module.css'

const ScreenContainer = ({ children }) => {
  return (
    <div className={classes['screen-container']}>
      <ScreenAreaDots />
      <Screen />
      <ScreenAreaDots />
    </div>
  )
}

export default ScreenContainer