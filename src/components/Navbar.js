import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ onNewGame }) => (
  <header>
    <h2>
      <a>React Memory Game</a>
    </h2>
    <nav>
      <li>
        <a>New Game</a>
      </li>
    </nav>
  </header>
);

Navbar.PropTypes = {};

export default Navbar;
