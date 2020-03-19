import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import ThemeProvider from './themes';
import AppToastProvider from './providers/ToastProvider';
import { ToastProvider } from 'react-toast-notifications';
import firebaseConfigs from './firebase';
import { BrowserRouter } from 'react-router-dom';

import { ReactReduxFirebaseProvider as FirebaseAuthProvider } from 'react-redux-firebase';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseAuthProvider {...firebaseConfigs}>
      <BrowserRouter>
        <ToastProvider>
          <ThemeProvider>
            <AppToastProvider>
              <AppRouter />
            </AppToastProvider>
          </ThemeProvider>
        </ToastProvider>
      </BrowserRouter>
    </FirebaseAuthProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
