import { evaluatePercent } from "./evaluatePercent"
import { evaluateStandard } from "./evaluateStandard"
import { parseComputation } from "./parseComputation"

export function evaluate({ 
  currentOperand
  , previousOperand
  , operation
  , percentClicked 
  , memory
}) {
    const prev = previousOperand !== null && parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    
    let computation = ""

    if (percentClicked) {
      computation = evaluatePercent(prev, current, operation)
    } else {
      computation = evaluateStandard(prev, current, operation)
    }

    return parseComputation(computation)
  }