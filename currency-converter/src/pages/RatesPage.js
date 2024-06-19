import React from 'react';
import ExchangeRates from '../components/ExchangeRates';

const RatesPage = () => (
  <div>
    <h1>Rates Page</h1>
    <ExchangeRates baseCurrency="USD" />
  </div>
);

export default RatesPage;
