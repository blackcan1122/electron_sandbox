import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [result, setResult] = useState(null);

  const handleAddNumbers = async () => {
    try {
      const res = await window.kek.addNumbers(num1, num2);
      setResult(res);
    } catch (error) {
      console.error('Error calling backend:', error);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value) || 0)}
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value) || 0)}
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={handleAddNumbers} style={{ padding: '5px 15px' }}>
        Add Numbers
      </button>
      
      {result !== null && (
        <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
          Result: {num1} + {num2} = {result}
        </p>
      )}
    </div>
  );
}

export default Calculator;
