import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ChatSidebar from './ChatSidebar';
import ChatContent from './ChatContent';
import './ChatStyles.css';

const Chat: React.FC = () => {
  const isMobile = useSelector((state: RootState) => state.app.mobileResolution);

  return (
    <Box className='chat-container'>
      <Box className='chat-sidebar'>
        <ChatSidebar />
      </Box>
      {!isMobile && (
        <Box className='chat-content'>
          <ChatContent />
        </Box>
      )}
    </Box>
  );
};

export default Chat;
