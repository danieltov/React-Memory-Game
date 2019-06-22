import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ onNewGame, score }) => (
  <nav>
    <div className='nav-wrapper teal darken-2'>
      <a href='#!' className='brand-logo'>
        React Memory Game
      </a>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>
          <a href='#!'>Matched: {score}</a>
        </li>
        <li>
          <a href='#!' onClick={onNewGame}>
            New Game
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired
};

export default Navbar;
