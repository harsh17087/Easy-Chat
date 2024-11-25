import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { NAVIGATION_MENUBAR } from '../../constants/Navigation';

/**
 * NavigationItems component renders a list of navigation items.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.fromMobile - Indicates if the navigation is from a mobile device.
 * @param {Function} props.handleDrawerToggle - Function to handle the drawer toggle.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * This component uses the `useNavigate` hook from `react-router-dom` to navigate to different routes.
 * When a navigation item is clicked, it navigates to the specified route.
 * If the navigation is from a mobile device, it also closes the drawer by calling `handleDrawerToggle`.
 */
const NavigationItems: React.FC<{ fromMobile: boolean; handleDrawerToggle: () => void }> = ({
  fromMobile,
  handleDrawerToggle,
}: {
  fromMobile: boolean;
  handleDrawerToggle: () => void;
}): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(`/${route}`);
    // Close the drawer if the navigation is from mobile
    if (fromMobile) {
      handleDrawerToggle();
    }
  };

  return (
    <List>
      {NAVIGATION_MENUBAR.map((item) => (
        <ListItem key={item.route} disablePadding>
          <ListItemButton onClick={() => handleNavigation(item.route)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationItems;
