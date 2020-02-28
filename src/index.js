import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './router';
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import ThemeProvider from './themes';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
