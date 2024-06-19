import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ConverterPage from './pages/ConverterPage';
import RatesPage from './pages/RatesPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ConverterPage />} />
      <Route path="/rates" element={<RatesPage />} />
    </Routes>
  </Router>
);

export default App;

