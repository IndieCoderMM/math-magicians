import React, { Component } from 'react';
import Keypad from './Keypad';
import Display from './Display';
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
    this.setState(data);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <Display total={total} next={next} operation={operation} />
        <Keypad handleClick={this.handleClick} />
      </div>
    );
  }
}
