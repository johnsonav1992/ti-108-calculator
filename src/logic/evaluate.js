export function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    
    let computation = ""
    // eslint-disable-next-line default-case
    switch (operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "x":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break
    }

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