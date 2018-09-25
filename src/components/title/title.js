import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, tag = 'h1', size }) => {
  return (
    <p class="title">
      {children}
    </p>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

export default Title;
