import React from 'react'
import classes from './ButtonDots.module.css'

const ButtonDots = ({ 
  dotNumber
  , color
  , isLarge
}) => {
  return (
    <div className={ 
      isLarge 
        ? classes.large 
        : classes.container
      }
    >
        { [...Array(dotNumber)].map((dot, i) => 
            <div 
              className={ 
              color === 'red' 
                ? classes['red-dot']
                : classes['white-dot']
              }
            key={i}
            />
        ) }
    </div>
  )
}

export default ButtonDots