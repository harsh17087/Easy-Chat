import { StrictMode } from 'react'; // Import StrictMode for highlighting potential problems in an application
import { createRoot } from 'react-dom/client'; // Import createRoot for creating a root to render the React component tree
import { Provider } from 'react-redux'; // Import Provider to make the Redux store available to the rest of the app
import AppRouter from './AppRouter.tsx'; // Import the main AppRouter component
import './index.css'; // Import global CSS styles
import store from './store/store.ts'; // Import the Redux store
import ThemeProvider from './theme/ThemeProvider.tsx'; // Import ThemeProvider for theming support

// Create a root and render the React component tree
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
