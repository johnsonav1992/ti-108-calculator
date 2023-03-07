import React, { useContext } from 'react'
import ButtonDots from '../ButtonDots/ButtonDots'
import { calcContext } from '../../context/context'
import classes from './RedBtnSmall.module.css'
import { ACTIONS } from '../../logic/actions'

const RedBtnSmall = ({ children, action, largeText }) => {
  const { dispatch } = useContext(calcContext);

  return (
    <button 
      className={classes.btn}
      onClick={ () =>
        dispatch( { 
          type: action
          , payload: 
            action === ACTIONS.CHOOSE_OPERATION
              ? { operation: children }
              : { digit: children }
        } )
      }
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