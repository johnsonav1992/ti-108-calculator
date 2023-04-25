export const parseComputation = (computation) => {
    computation = computation.toString()

    const decimalIndex = computation.indexOf('.')
    const numDigitsAfterDecimal = decimalIndex === -1 ? 0 : computation.length - decimalIndex - 1
    const maxNumDigits = 8 - (decimalIndex === -1 ? 0 : 1)

    if (numDigitsAfterDecimal > maxNumDigits) {
        computation = parseFloat(computation).toFixed(maxNumDigits)
    }

    return computation.includes('.')
        ? computation
        : `${computation}.`
}