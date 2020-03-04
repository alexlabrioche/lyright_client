import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import ThemeProvider from './themes';
import { ToastProvider } from 'react-toast-notifications';
import firebaseConfigs from './firebase';
import { ReactReduxFirebaseProvider as FirebaseAuthProvider } from 'react-redux-firebase';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseAuthProvider {...firebaseConfigs}>
      <ThemeProvider>
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </ThemeProvider>
    </FirebaseAuthProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
