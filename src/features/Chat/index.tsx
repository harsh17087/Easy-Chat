import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ChatSidebar from './ChatSidebar';
import ChatContent from './ChatContent';
import './ChatStyles.css';
import { chatPreviewListOpen } from '../../store/appSlice';

/**
 * Chat component that renders the chat sidebar and chat content.
 * It handles the resizing of the sidebar by dragging a divider.
 *
 * @component
 * @returns {JSX.Element} The rendered chat component.
 *
 * @example
 * <Chat />
 *
 * @remarks
 * This component uses Redux for state management and React hooks for handling
 * the sidebar resizing logic.
 *
 * @function
 * @name Chat
 *
 * @hook
 * @name useDispatch
 * @description Dispatches actions to the Redux store.
 *
 * @hook
 * @name useSelector
 * @description Selects state from the Redux store.
 *
 * @hook
 * @name useState
 * @description Manages local state for sidebar width and mouse events.
 *
 * @hook
 * @name useCallback
 * @description Memoizes functions to avoid unnecessary re-renders.
 *
 * @hook
 * @name useEffect
 * @description Dispatches an action when the component mounts and cleans up when it unmounts.
 *
 * @param {React.MouseEvent} e - The mouse event triggered on mousedown.
 *
 * @function
 * @name handleMouseDown
 * @description Handles the mousedown event on the divider to start resizing the sidebar.
 *
 * @function
 * @name handleMouseMove
 * @description Handles the mousemove event to resize the sidebar.
 *
 * @function
 * @name handleMouseUp
 * @description Handles the mouseup event to stop resizing the sidebar.
 *
 * @returns {boolean} isChatContentOpened - Determines if the chat content should be opened based on the device type and live chat mode.
 * @returns {boolean} isChatSidebarOpened - Determines if the chat sidebar should be opened based on the device type and live chat mode.
 */
const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.app.mobileResolution);
  const liveChatMode = useSelector((state: RootState) => state.app.liveChat);
  const [sidebarWidth, setSidebarWidth] = useState(40); // Initial width in percentage
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialSidebarWidth, setInitialSidebarWidth] = useState(40);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setInitialMouseX(e.clientX);
    setInitialSidebarWidth(sidebarWidth);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = e.clientX - initialMouseX;
    const newWidth = initialSidebarWidth + (deltaX / window.innerWidth) * 100;
    if (newWidth >= 30 && newWidth <= 60) {
      // Set the min and max width in percentage
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <Box className='chat-container'>
      {isChatSidebarOpened() && (
        <Box className='chat-sidebar' sx={{ width: `${sidebarWidth}%` }}>
          <ChatSidebar />
        </Box>
      )}
      <Box className='divider' onMouseDown={handleMouseDown} />
      {isChatContentOpened() && (
        <Box className='chat-content' sx={{ width: `${100 - sidebarWidth}%` }}>
          <ChatContent />
        </Box>
      )}
    </Box>
  );
};

export default Chat;
