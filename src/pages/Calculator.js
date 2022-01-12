import React from 'react';
import Calculator from '../components/Calculator';

function CalculatorPage() {
  return (
    <div className="container mx-auto flex items-baseline justify-center pt-32">
      <div className="w-1/4 text-center">
        <h1 className="text-3xl font-semibold">Let us do some math!</h1>
      </div>
      <div className="w-3/4">
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
