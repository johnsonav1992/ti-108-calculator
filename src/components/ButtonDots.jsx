import React from 'react'
import classes from './ButtonDots.module.css'

const ButtonDots = ({ dotNumber, color }) => {
  return (
    <div className={classes.container}>
        { [...Array(dotNumber)].map(dot => 
            <div className={ color === 'red' ? classes['red-dot'] : classes.dot} />
        ) }
    </div>
  )
}

export default ButtonDots