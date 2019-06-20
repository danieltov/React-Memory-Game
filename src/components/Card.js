import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = props => {
  let style = {};

  if (props.visible) style.backgroundImage = props.backgroundImage;

  return (
    <div className='card-container' style={style} onClick={props.onClick} />
  );
};

Card.propTypes = {
  visible: PropTypes.bool.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
