import React, { Component } from 'react';
import Keypad from './Keypad';
import calculate from '../logic/calculate';

// eslint-disable-next-line
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(event) {
    const buttonName = event.target.textContent;
    const data = calculate(this.state, buttonName);
    console.log(data);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output-screen">
          <div className="formula">
            {operation}
            {next}
          </div>
          <div className="output-text">{total || 0}</div>
        </div>
        <Keypad handleClick={this.handleClick} />
      </div>
    );
  }
}
