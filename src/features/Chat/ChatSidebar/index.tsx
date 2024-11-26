import { Typography } from '@mui/material';
import ChatFilter from './ChatFilter';
import './ChatSidebar.css';
import SearchBar from './Searchbar';
import Tabs from './Tabs';
const ChatSidebar = () => {
  return (
    <div style={{ margin: '1rem 0.5rem' }}>
      <div className='SidebarHeading'>
        <Typography variant='h6' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Chats
        </Typography>
        <ChatFilter />
      </div>
      <SearchBar />
      <Tabs />
    </div>
  );
};
export default ChatSidebar;
