import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../store/appSlice';
import { RootState } from '../../store/store';
import CompanyName from './CompanyName';
import Logo from './Logo';
import NavigationItems from './NavigationItems';
import './NavigationList.css'; // Import the CSS file
import ToggleMode from './ToggleMode';

const drawerWidth = 240; // Width of the drawer

const NavigationList = (): JSX.Element => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state: RootState) => state.app.menuOpen); // Get mobile menu drawer open or close state from Redux
  const fromMobile = useSelector((state: RootState) => state.app.mobileResolution); // Get mobile resolution state from Redux

  const handleDrawerToggle = useCallback(() => {
    dispatch(toggleMenu()); // Dispatch action to toggle menu
  }, [dispatch]);

  // Drawer content
  const drawer = useMemo(
    () => (
      <div className='navigation-container'>
        <div className='navigation-header'>
          <Logo /> {/* Logo component */}
          {!fromMobile && <ToggleMode />} {/* ToggleMode component if not mobile */}
        </div>
        <CompanyName /> {/* CompanyName component */}
        <NavigationItems fromMobile={fromMobile} handleDrawerToggle={handleDrawerToggle} />{' '}
        {/* NavigationItems component */}
      </div>
    ),
    [fromMobile, handleDrawerToggle],
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> {/* CssBaseline component for consistent styling */}
      <AppBar
        position='fixed'
        className='app-bar'
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }} // AppBar styling
      >
        {fromMobile && (
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, '&:focus': { outline: 'none' } }}
            >
              <MenuIcon /> {/* Menu icon button */}
            </IconButton>
            <ToggleMode /> {/* ToggleMode component */}
          </Toolbar>
        )}
      </AppBar>
      <Box
        component='nav'
        className='drawer'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant={fromMobile ? 'temporary' : 'permanent'} // Drawer variant based on mobile state
          open={fromMobile ? isMobileMenuOpen : true} // Drawer open state based on mobile state
          onClose={handleDrawerToggle} // Handle drawer close
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, // Drawer paper styling
          }}
        >
          {drawer} {/* Drawer content */}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavigationList;
