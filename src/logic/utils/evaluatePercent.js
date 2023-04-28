export const evaluatePercent = ( prev, current, operation ) => {
    let result;

    const convertedPercentage = current / 100;
    const percentageOfOperand = ( convertedPercentage * prev );

    switch ( operation ) {
        case '+':
            result = prev + percentageOfOperand;
            break;
        case '-':
            result = prev - percentageOfOperand;
            break;
        case 'x':
            result = prev * convertedPercentage;
            break;
        case '÷':
            result = prev / convertedPercentage;
            break;
        default:
            return '';
    }

    return result;
};
