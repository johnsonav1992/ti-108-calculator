import React, { useContext } from 'react'
import { calcContext } from '../../context/context'
import classes from './Screen.module.css'

const Screen = () => {
  const { currentOperand } = useContext(calcContext);

  return (
    <div className={classes.screen}>{currentOperand}</div>
  )
}

export default Screen