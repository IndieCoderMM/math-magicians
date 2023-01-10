import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
export default class Display extends Component {
  render() {
    const { operation, next, total } = this.props;
    return (
      <div className="output-screen">
        <div className="formula">
          {operation}
          {next}
        </div>
        <div className="output-text">{total || 0}</div>
      </div>
    );
  }
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
