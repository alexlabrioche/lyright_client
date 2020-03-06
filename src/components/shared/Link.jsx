import React from 'react';
import { Box } from 'rebass';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AppLink({ to = '/', children = '', ...props }) {
  return (
    <Box {...props}>
      <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </Link>
    </Box>
  );
}

AppLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
  props: PropTypes.any,
};

export default AppLink;
