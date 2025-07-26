import { useState } from 'react';

export const useCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const calculate = (expr: string) => {
    try {
      const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/');
      const res = eval(sanitized);
      return res.toString();
    } catch {
      return 'Error';
    }
  };

  const handleButtonClick = (value: string) => {
    if (value === 'AC') {
      setExpression('');
      setResult('');
    } else if (value === '=') {
      const res = calculate(expression);
      setResult(res);
      setHistory(prev => [`${expression} = ${res}`, ...prev]);
    } else {
      setExpression(prev => prev + value);
    }
  };

  return {
    expression,
    result,
    history,
    handleButtonClick
  };
};