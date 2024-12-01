import React, { useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ChatSidebar from './ChatSidebar';
import ChatContent from './ChatContent';
import './ChatStyles.css';
import { chatPreviewListOpen } from '../../store/appSlice';

const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.app.mobileResolution);
  const liveChatMode = useSelector((state: RootState) => state.app.liveChat);

  const isChatContentOpened = useCallback(() => {
    if (isMobile) {
      return liveChatMode ? true : false;
    }
    return true;
  }, [isMobile, liveChatMode]);

  const isChatSidebarOpened = useCallback(() => {
    if (isMobile) {
      return liveChatMode ? false : true;
    }
    return true;
  }, [isMobile, liveChatMode]);

  useEffect(() => {
    dispatch(chatPreviewListOpen(true));
    return () => {
      dispatch(chatPreviewListOpen(false));
    };
  }, [dispatch]);

  return (
    <Box className='chat-container'>
      {isChatSidebarOpened() && (
        <Box className='chat-sidebar'>
          <ChatSidebar />
        </Box>
      )}
      {isChatContentOpened() && (
        <Box className='chat-content'>
          <ChatContent />
        </Box>
      )}
    </Box>
  );
};

export default Chat;
