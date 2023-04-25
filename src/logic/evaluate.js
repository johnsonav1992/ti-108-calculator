import { evaluatePercent } from "./utils/evaluatePercent"
import { evaluateStandard } from "./utils/evaluateStandard"
import { parseComputation } from "./utils/parseComputation"

export function evaluate({ 
  currentOperand
  , previousOperand
  , operation
  , percentClicked 
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