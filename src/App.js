import { useReducer } from 'react'
import { reducer } from './logic/reducer'
import './App.css'
import CalculatorBody from './components/CalculatorBody/CalculatorBody'
import ScreenContainer from './components/ScreenContainer/ScreenContainer'
import LogoContainer from './components/LogoContainer/LogoContainer'
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer'

function App() {
	const [{ 
		currentOperand
		, previousOperand
		, operation
	}, dispatch] = useReducer(reducer, {})
	
	return (
		<div className="calc-container">
			<CalculatorBody>
				<div className="internal-container">
					<ScreenContainer />
					<LogoContainer />
					<ButtonsContainer />
				</div>
			</CalculatorBody>
		</div>
	)
}

export default App
