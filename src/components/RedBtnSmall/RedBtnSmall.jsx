import React, { useContext } from 'react'
import ButtonDots from '../ButtonDots/ButtonDots'
import { calcContext } from '../../context/context'
import { ACTIONS } from '../../logic/actions'
import classes from './RedBtnSmall.module.css'

const RedBtnSmall = ({ children, action, largeText }) => {
  const { dispatch } = useContext(calcContext);
  const { INPUT_DIGIT } = ACTIONS;

  return (
    <button 
      className={classes.btn}
      onClick={ () => {
        dispatch( { 
          type: action
          , payload: { digit: children }
        } )
      } }
    >
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