import './ChatSidebar.css';
import SearchBar from '../../../components/SearchBar/Searchbar';
import Tabs from './Tabs';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
const ChatSidebar = () => {
  const isMobile = useSelector((state: RootState) => state.app.mobileResolution);

  return (
    <div style={{ margin: '1rem 0.5rem' }}>
      {/* <div className='SidebarHeading'>
        <Typography variant='h6' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          Chats
        </Typography>
        <ChatFilter />
      </div> */}
      {!isMobile && <SearchBar />}
      <Tabs />
    </div>
  );
};
export default ChatSidebar;
