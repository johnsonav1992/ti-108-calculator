export function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    console.log({prev}, {current})
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
      case "*":
        computation = prev * current
        break
      case "÷":
        computation = prev / current
        break
    }
  
    return `${computation.toString()}.`
  }