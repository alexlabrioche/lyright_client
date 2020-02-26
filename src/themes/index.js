import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import rebassTheme from '@rebass/preset';
import { extend } from './extend';

const theme = { ...rebassTheme, ...extend };

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
