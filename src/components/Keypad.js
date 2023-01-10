import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
export default class Keypad extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.textContent;
    const { updateCalculation } = this.props;
    updateCalculation(buttonName);
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" onClick={this.handleClick}>
          %
        </button>
        <button type="button" onClick={this.handleClick} className="operator">
          ÷
        </button>
        <button type="button" onClick={this.handleClick}>
          7
        </button>
        <button type="button" onClick={this.handleClick}>
          8
        </button>
        <button type="button" onClick={this.handleClick}>
          9
        </button>
        <button type="button" onClick={this.handleClick} className="operator">
          x
        </button>
        <button type="button" onClick={this.handleClick}>
          4
        </button>
        <button type="button" onClick={this.handleClick}>
          5
        </button>
        <button type="button" onClick={this.handleClick}>
          6
        </button>
        <button type="button" onClick={this.handleClick} className="operator">
          -
        </button>
        <button type="button" onClick={this.handleClick}>
          1
        </button>
        <button type="button" onClick={this.handleClick}>
          2
        </button>
        <button type="button" onClick={this.handleClick}>
          3
        </button>
        <button type="button" onClick={this.handleClick} className="operator">
          +
        </button>
        <button type="button" onClick={this.handleClick} className="wide-btn">
          0
        </button>
        <button type="button" onClick={this.handleClick}>
          .
        </button>
        <button type="button" onClick={this.handleClick} className="operator">
          =
        </button>
      </>
    );
  }
}

Keypad.propTypes = { updateCalculation: PropTypes.func.isRequired };
