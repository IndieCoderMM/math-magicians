import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ operation, next, total }) => {
  let result = 0;
  if (total !== null) {
    if (Number.isNaN(Number(total))) result = 'ERR0R!';
    else result = total;
  }
  return (
    <div className="output-screen">
      <div className="formula">
        {operation}
        {next}
      </div>
      <div className="output-text">{result}</div>
    </div>
  );
};

Display.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
