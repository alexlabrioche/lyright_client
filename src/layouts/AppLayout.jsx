import React, { useMemo } from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { Flex } from 'rebass';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function AppLayout({ children, title = '' }) {
  const { error } = useSelector(({ api }) => api);
  const { addToast, removeAllToasts } = useToasts();

  useMemo(() => {
    error && addToast(error, { appearance: 'error', autoDismiss: true });
    return removeAllToasts();
  }, [error, addToast, removeAllToasts]);

  return (
    <Flex variant="app">
      <Helmet>
        <title>{`${title} | Lyright`}</title>
      </Helmet>
      <Navigation />

      <Flex variant="appContainer">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <Flex sx={{ flexGrow: 1, flexDirection: 'column' }}>
              {children}
            </Flex>
          </motion.div>
        </AnimatePresence>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default AppLayout;
