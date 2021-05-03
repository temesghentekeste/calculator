import { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import calculate from '../logic/calculate';

const App = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
    currentDisplay: '0',
    calculated: false,
  });

  const handleClick = (btnName) => {
    const currentOperation = calculate(calculatorData, btnName);
    setCalculatorData(currentOperation);
  };

  const { currentDisplay } = calculatorData;
  return (
    <div className="calculatorContainer">
      <Display result={currentDisplay} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
