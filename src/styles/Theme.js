import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    success: '#5cc151',
    failed: '#C63110',
    main: '#3F52E7',
    secondary: '#1a2ec9',
    grey: '#7B7B7B',
  },
  fontSizes: {
    title: '36px',
    subtitle: '28px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme} >{children}</ThemeProvider>
);

export default Theme;
