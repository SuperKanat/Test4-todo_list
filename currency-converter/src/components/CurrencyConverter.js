import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    const [amount, from, , to] = input.toLowerCase().split(' ');
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/baa4dde0acea26303071e698/pair/${from}/${to}`);
    const rate = response.data.conversion_rate;
    setResult(`${amount} ${from.toUpperCase()} = ${(amount * rate).toFixed(2)} ${to.toUpperCase()}`);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="15 usd in rub"
      />
      <button onClick={convertCurrency}>Convert</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default CurrencyConverter;
