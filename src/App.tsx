import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Menubar from './components/Menubar';
import { fromMobile, menubarOpen } from './store/appSlice';
import theme from './theme/theme';

/**
 * The main application component.
 *
 * This component sets up the main layout of the application, including the menubar and content area.
 * It also handles responsive design by dispatching actions based on the screen size.
 *
 * @component
 *
 * @example
 * return (
 *   <App />
 * )
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * This component uses the `useDispatch` hook from `react-redux` to dispatch actions and the `useMediaQuery` hook from `@material-ui/core` to handle responsive design.
 *
 * @hook
 * - `useDispatch` - To dispatch actions to the Redux store.
 * - `useMediaQuery` - To determine if the screen size matches the specified breakpoint.
 * - `useEffect` - To perform side effects based on the `isMobile` state.
 *
 * @dependencies
 * - `Menubar` - The menubar component.
 * - `Outlet` - The outlet component for nested routes.
 *
 * @param {void}
 *
 * @returns {JSX.Element} The rendered component.
 */
function App(): JSX.Element {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    dispatch(fromMobile(isMobile));
    if (isMobile) {
      dispatch(menubarOpen(false));
    }
  }, [isMobile, dispatch]);

  return (
    <div className='app'>
      <div className='menubar'>
        <Menubar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
