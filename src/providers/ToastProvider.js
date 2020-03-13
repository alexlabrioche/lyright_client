import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useToasts } from 'react-toast-notifications';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { addAccessToken, removeAccessToken } from '../store/actions/apiRequest';

function ToastProvider({ children }) {
  const dispatch = useDispatch();
  const { error, token } = useSelector(({ api }) => api);
  const { addToast, removeAllToasts } = useToasts();
  const { auth, authError } = useSelector(({ firebase }) => firebase);

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

  return children;
}

export default ToastProvider;
