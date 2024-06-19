import React, { useState } from 'react';
import axios from 'axios';

const ExchangeRates = ({ baseCurrency }) => {
  const [rates, setRates] = useState({});
  const [base, setBase] = useState(baseCurrency);
  const [loading, setLoading] = useState(false);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/baa4dde0acea26303071e698/latest/${base}`);
      setRates(response.data.conversion_rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Exchange Rates</h2>
      <label>
        Base Currency:
        <input 
          type="text" 
          value={base} 
          onChange={(e) => setBase(e.target.value.toUpperCase())}
        />
      </label>
      <button onClick={fetchRates} disabled={loading}>
        {loading ? 'Loading...' : 'Update Rates'}
      </button>
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            1 {base} = {rates[currency]} {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;
