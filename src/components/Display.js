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

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};
