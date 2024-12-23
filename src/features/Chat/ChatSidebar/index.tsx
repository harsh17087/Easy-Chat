import React, { useState } from 'react';
import { Tabs as MuiTabs, Tab, Box } from '@mui/material';
import SearchBar from '../../../components/SearchBar/Searchbar';
import MailIcon from '@mui/icons-material/Mail';
import AndroidIcon from '@mui/icons-material/Android';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './ChatSidebar.css';
import AllMessages from './Tabs/AllMessages';
import Bots from './Tabs/Bots';
import Human from './Tabs/Human';

const ChatSidebar = () => {
  const isMobile = useSelector((state: RootState) => state.app.mobileResolution);
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='chat-sidebar-container'>
      <div className='tabs-container'>
        <div className='tabs-header'>
          {!isMobile && <SearchBar />}
          <MuiTabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            selectionFollowsFocus
            sx={{
              '& .MuiTab-root': {
                minHeight: 'auto',
                '&:focus, &:focus-visible': {
                  outline: 'none',
                },
              },
            }}
          >
            <Tab
              icon={
                <MailIcon
                  sx={{
                    color: 'rgb(143 138 237)',
                  }}
                />
              }
              iconPosition='start'
              label='All Messages'
            />
            <Tab
              icon={
                <AndroidIcon
                  sx={{
                    color: '#f07131',
                  }}
                />
              }
              iconPosition='start'
              label='Bots'
            />
            <Tab
              icon={
                <PersonIcon
                  sx={{
                    color: '#0086fa',
                  }}
                />
              }
              iconPosition='start'
              label='Human'
            />
          </MuiTabs>
        </div>
        <Box className='tabs-content'>
          {value === 0 && <AllMessages />}
          {value === 1 && <Bots />}
          {value === 2 && <Human />}
        </Box>
      </div>
    </div>
  );
};

export default ChatSidebar;
