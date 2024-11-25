import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SmartToyIcon from '@mui/icons-material/SmartToy';
/**
 * An array of objects representing the navigation menu bar items.
 * Each object contains the route, title, and icon for a menu item.
 *
 * @constant
 * @type {Array<{route: string, title: string, icon: JSX.Element}>}
 * @property {string} route - The route path for the navigation item.
 * @property {string} title - The display title for the navigation item.
 * @property {JSX.Element} icon - The icon component for the navigation item.
 */
export const NAVIGATION_MENUBAR: Array<{ route: string; title: string; icon: JSX.Element }> = [
  {
    route: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    route: 'chat',
    title: 'Chat',
    icon: <ChatIcon />,
  },
  {
    route: 'businessKnowledge',
    title: 'Business Knowledge',
    icon: <WorkIcon />,
  },
  {
    route: 'channels',
    title: 'Channels',
    icon: <LiveTvIcon />,
  },
  {
    route: 'testyourbot',
    title: 'Test Your Bot',
    icon: <SmartToyIcon />,
  },
];
