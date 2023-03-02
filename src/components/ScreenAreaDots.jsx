import React from 'react'
import classes from './ScreenAreaDots.module.css'

const ScreenAreaDots = () => {
    return (
        <div className={classes.container}>
            { [...Array(80)].map(dot => 
            <div className={classes.dot}/>
            ) }
        </div>
    )
}

export default ScreenAreaDots