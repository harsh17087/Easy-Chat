import { createTheme } from '@mui/material/styles';

// Define your custom palette and theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#dc004e', // Secondary color
    },
    background: {
      default: '#f5f5f5', // Default background color
    },
  },
  colorSchemes: {
    dark: true, // Enable dark color scheme
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font family for typography
  },
  // Add other customizations here
});

export default theme;
