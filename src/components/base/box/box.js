import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children }) => <div class="box">{children}</div>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
