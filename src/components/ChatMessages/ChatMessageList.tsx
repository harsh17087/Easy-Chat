import { Box } from '@mui/material';
import React from 'react';
import { IChatMessagePreview } from '../../utils/interfaces/Chat';
import ChatMessagePreview from './ChatMessagePreview';
import './ChatMessagesStyles.css';
interface ChatMessagesListProps {
  chatMessages: IChatMessagePreview[];
}

const ChatMessagesList: React.FC<ChatMessagesListProps> = ({ chatMessages }) => {
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
