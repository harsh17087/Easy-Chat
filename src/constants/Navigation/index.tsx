import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SmartToyIcon from '@mui/icons-material/SmartToy';
export const NAVIGATION_MENUBAR = [
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
