import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Converter</Link></li>
        <li><Link to="/rates">Exchange Rates</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
