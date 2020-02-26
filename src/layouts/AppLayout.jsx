import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Flex } from 'rebass';
import Helmet from 'react-helmet';

function AppLayout({ children, title = '' }) {
  return (
    <Flex variant="app">
      <Helmet>
        <title>{`${title} | Lyright`}</title>
      </Helmet>
      <Navigation />
      <Flex variant="appContainer">
        <Flex sx={{ flexGrow: 1, flexDirection: 'column' }}>{children}</Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default AppLayout;
