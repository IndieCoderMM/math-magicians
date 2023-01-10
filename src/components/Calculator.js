import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';
import calculate from '../logic/calculate';

// eslint-disable-next-line
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.updateCalculation = this.updateCalculation.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  updateCalculation(buttonName) {
    const data = calculate(this.state, buttonName);
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <Display total={total} next={next} operation={operation} />
        <Keypad updateCalculation={this.updateCalculation} />
      </div>
    );
  }
}
