import React, { useContext } from 'react'
import ButtonDots from '../ButtonDots/ButtonDots'
import { calcContext } from '../context/context'
import classes from './WhiteBtnSmall.module.css'

const WhiteBtnSmall = ({ children, action }) => {
  const { dispatch } = useContext(calcContext);
  
  return (
    <button 
      className={classes.btn}
      onClick={ () => {
        dispatch( { 
          type: action
          , payload: children
        } )
      } }
    >
      <div className={classes.digit}>{ children }</div>
      <ButtonDots 
        dotNumber={27}
        color='white'
      />
    </button>
  )
}

export default WhiteBtnSmall