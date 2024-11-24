import { createTheme } from '@mui/material/styles';

// Define your custom palette and theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  // Add other customizations here
});

export default theme;
