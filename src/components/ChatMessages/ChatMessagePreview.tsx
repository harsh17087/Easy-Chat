import React from 'react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import BotIcon from '@mui/icons-material/Android';
import HumanIcon from '@mui/icons-material/Person';
import './ChatMessagesStyles.css';

interface ChatMessagePreviewProps {
  image: string;
  lastMessage: string;
  timestamp: string;
  isBot: boolean;
}

const ChatMessagePreview: React.FC<ChatMessagePreviewProps> = ({
  image,
  lastMessage,
  timestamp,
  isBot,
}) => {
  const theme = useTheme();

  return (
    <Box
      className='chat-message-preview'
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.mode === 'dark' ? '#333' : 'rgb(97 95 95 / 17%)',
        },
      }}
    >
      <Avatar src={image} alt='Profile Picture' className='chat-avatar' />
      <Box className='chat-details'>
        <Typography variant='body1' className='chat-last-message'>
          {lastMessage}
        </Typography>
        <Typography variant='body2' className='chat-timestamp'>
          {timestamp}
        </Typography>
      </Box>
      <Box className='chat-status'>
        {isBot ? <BotIcon className='chat-icon' /> : <HumanIcon className='chat-icon' />}
      </Box>
    </Box>
  );
};

export default ChatMessagePreview;
