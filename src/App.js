import './App.css'
import CalculatorBody from './components/CalculatorBody'
import ScreenContainer from './components/ScreenContainer'
import LogoContainer from './components/LogoContainer'
import ButtonsContainer from './components/ButtonsContainer'

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
