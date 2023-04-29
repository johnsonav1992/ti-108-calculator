// Components
import CalculatorBody from './components/CalculatorBody/CalculatorBody';
import ScreenContainer from './components/ScreenContainer/ScreenContainer';
import LogoContainer from './components/LogoContainer/LogoContainer';
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';

// Context
import ContextProvider from './context/context';

// Styles
import './App.css';

function App () {

    return (
        <div className="calc-container">
            <ContextProvider>
                <CalculatorBody>
                    <div className="internal-container">
                        <ScreenContainer />
                        <LogoContainer />
                        <ButtonsContainer />
                    </div>
                </CalculatorBody>
            </ContextProvider>
        </div>
    );
}

export default App;
