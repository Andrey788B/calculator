
import { Display } from './Display';
import { ButtonGrid } from './ButtonGrid';
import { HistoryPanel } from './HistoryPanel';
import { useCalculator } from './useCalculator';
import '../styles/calculator.css';

export const Calculator = () => {
  const {
    expression,
    result,
    history,
    handleButtonClick
  } = useCalculator();

  return (
    <div className="Fon">
      <div className="CalculatorPanelLeft">
        <div className="Up">
          <Display expression={expression} result={result} />
        </div>
        <div className="Down">
          <ButtonGrid onButtonClick={handleButtonClick} />
        </div>
      </div>
      <div className="CalculatorPanelRight">
        <HistoryPanel history={history} />
      </div>
    </div>
  );
};