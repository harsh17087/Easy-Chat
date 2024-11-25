import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

/**
 * ThemeProvider component that wraps its children with Material-UI's MuiThemeProvider.
 * It applies the provided theme and includes a CssBaseline to normalize styles across browsers.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 *
 * @returns {JSX.Element} The ThemeProvider component with the applied theme and CssBaseline.
 */
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
