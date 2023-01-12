import React, { useState } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateCalculation = (buttonName) => {
    const data = calculate(calcObj, buttonName);
    setCalcObj(data);
  };

  const { total, next, operation } = calcObj;
  return (
    <div className="calculator-grid">
      <Display total={total} next={next} operation={operation} />
      <Keypad updateCalculation={updateCalculation} />
    </div>
  );
};

export default Calculator;
