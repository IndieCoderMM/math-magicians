import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ updateCalculation }) => {
  const handleClick = (e) => {
    const buttonName = e.target.textContent;
    updateCalculation(buttonName);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        AC
      </button>
      <button type="button" onClick={handleClick}>
        +/-
      </button>
      <button type="button" onClick={handleClick}>
        %
      </button>
      <button type="button" onClick={handleClick} className="operator">
        ÷
      </button>
      <button type="button" onClick={handleClick}>
        7
      </button>
      <button type="button" onClick={handleClick}>
        8
      </button>
      <button type="button" onClick={handleClick}>
        9
      </button>
      <button type="button" onClick={handleClick} className="operator">
        x
      </button>
      <button type="button" onClick={handleClick}>
        4
      </button>
      <button type="button" onClick={handleClick}>
        5
      </button>
      <button type="button" onClick={handleClick}>
        6
      </button>
      <button type="button" onClick={handleClick} className="operator">
        -
      </button>
      <button type="button" onClick={handleClick}>
        1
      </button>
      <button type="button" onClick={handleClick}>
        2
      </button>
      <button type="button" onClick={handleClick}>
        3
      </button>
      <button type="button" onClick={handleClick} className="operator">
        +
      </button>
      <button type="button" onClick={handleClick} className="wide-btn">
        0
      </button>
      <button type="button" onClick={handleClick}>
        .
      </button>
      <button type="button" onClick={handleClick} className="operator">
        =
      </button>
    </>
  );
};

Keypad.propTypes = { updateCalculation: PropTypes.func.isRequired };

export default Keypad;
