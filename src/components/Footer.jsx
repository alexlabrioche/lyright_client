import React from 'react';
import { Flex } from 'rebass';
// import PropTypes from 'prop-types';

function Footer() {
  return (
    <Flex variant="footer">
      Lyright - {new Date().getFullYear()} - du ❤️ et des 🌮
    </Flex>
  );
}

Footer.propTypes = {};

export default Footer;
