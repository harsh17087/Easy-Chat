import { Box } from '@mui/material';
import React from 'react';
import ChatMessagePreview from './ChatMessagePreview';
import './ChatMessagesStyles.css';
import { chatMessages } from '../../constants/mocks';

const ChatMessagesList: React.FC = () => {
  return (
    <Box className='chat-messages-container'>
      {chatMessages.map((message, index) => (
        <ChatMessagePreview
          key={index}
          image={message.image}
          lastMessage={message.lastMessage}
          timestamp={message.timestamp}
          isBot={message.isBot}
        />
      ))}
    </Box>
  );
};

export default ChatMessagesList;
