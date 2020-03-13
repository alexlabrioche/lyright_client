import React from 'react';
import Helmet from 'react-helmet';
import { Flex } from 'rebass';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function AppLayout({ children, title = '' }) {
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
            style={{ display: 'flex', flexGrow: 1 }}
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
