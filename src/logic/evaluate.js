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

    if (computation.length > 8) {
      // Temporary solution...
      computation = parseFloat(computation).toFixed(6);
    }
  
    return computation.toString().includes('.') 
              ? computation.toString() 
              : `${computation.toString()}.`
  }