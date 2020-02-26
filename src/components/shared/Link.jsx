import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';
import PropTypes from 'prop-types';

function AppLink({ to = '/', children = '', ...props }) {
  return (
    <Link {...props}>
      <RouterLink to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
        {children}
      </RouterLink>
    </Link>
  );
}

AppLink.propTypes = {};

export default AppLink;
