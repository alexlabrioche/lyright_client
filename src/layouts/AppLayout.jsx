import React, { useMemo, useCallback } from 'react';
import Helmet from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { isEmpty, isLoaded } from 'react-redux-firebase';

import { Flex } from 'rebass';
import { motion, AnimatePresence } from 'framer-motion';

import { addAccessToken, removeAccessToken } from '../store/actions/apiRequest';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function AppLayout({ children, title = '' }) {
  const dispatch = useDispatch();
  const { error, token } = useSelector(({ api }) => api);
  const { addToast, removeAllToasts } = useToasts();
  const { auth, authError } = useSelector(state => state.firebase);

  const addErrorCallback = useCallback(
    function addError(msg) {
      addToast(msg, { appearance: 'error', autoDismiss: true });
    },
    [addToast],
  );

  useMemo(() => {
    if (!isEmpty(auth) && !token) {
      dispatch(addAccessToken(auth.stsTokenManager.accessToken));
    }
    if (isLoaded(auth) && isEmpty(auth)) {
      dispatch(removeAccessToken());
    }
  }, [auth, token, dispatch]);

  useMemo(() => {
    authError && addErrorCallback(authError.message);
    return removeAllToasts();
  }, [authError, addErrorCallback, removeAllToasts]);

  useMemo(() => {
    error && addErrorCallback(error);
    return removeAllToasts();
  }, [error, addErrorCallback, removeAllToasts]);

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
