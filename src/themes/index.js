import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';

import { colors } from './extendTheme';

const mainTheme = { ...theme, ...colors };

export default ({ children }) => (
  <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
);
