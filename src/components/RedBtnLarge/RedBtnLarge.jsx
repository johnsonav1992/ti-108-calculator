import React, { useContext } from 'react'
import ButtonDots from '../ButtonDots/ButtonDots'
import { calcContext } from '../../context/context'
import classes from './RedBtnLarge.module.css'

const RedBtnLarge = ({ children, action }) => {
  const { dispatch } = useContext(calcContext);

  return (
    <button 
      className={classes.btn}
      onClick={ () => 
        dispatch( {
          type: action
        } )
      }
    >
      <div className={classes.digit}>{ children }</div>
      <ButtonDots 
        dotNumber={90}
        color='red'
        isLarge
      />
    </button>
  )
}

export default RedBtnLarge