import React from 'react';
import classes from './CalculatorBody.module.css';

const CalculatorBody = ( { children } ) => {
    return (
        <div className={ classes[ 'calc-body' ] }>
            { children }
        </div>
    );
};

export default CalculatorBody;
