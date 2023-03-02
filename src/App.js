import './App.css'
import CalculatorBody from './components/CalculatorBody/CalculatorBody'
import ScreenContainer from './components/ScreenContainer/ScreenContainer'
import LogoContainer from './components/LogoContainer/LogoContainer'
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer'

function App() {
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
