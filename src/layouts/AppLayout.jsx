import React, { useMemo } from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { Flex } from 'rebass';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function AppLayout({ children, title = '' }) {
  const { error } = useSelector(({ api }) => api);
  const { addToast, removeAllToasts } = useToasts();

  useMemo(() => {
    error && addToast(error, { appearance: 'error', autoDismiss: true });
    return removeAllToasts();
  }, [error]);

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
