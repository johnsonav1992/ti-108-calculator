/* eslint-disable default-case */
export const evaluateStandard = ( prev, current, operation ) => {
    let result;

    switch ( operation ) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
        case '√':
            result = Math.sqrt( current );
            break;
    }

    return result;
};
