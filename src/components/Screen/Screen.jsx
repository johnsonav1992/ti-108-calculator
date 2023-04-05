import React, { useContext } from 'react'
import { calcContext } from '../../context/context'
import classes from './Screen.module.css'

const Screen = () => {
  const { currentOperand } = useContext(calcContext);
  const isNegative = parseFloat(currentOperand) < 0;

  const formattedOperand = isNegative ? currentOperand.replace(/^./, "") : ''

  return (
    <div className={classes.screen}>
      {isNegative && <div className={ classes.negative }> - </div>}
      {isNegative ? formattedOperand : currentOperand}
    </div>
  )
}

export default Screen