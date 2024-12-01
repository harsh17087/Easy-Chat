import BotIcon from '@mui/icons-material/Android';
import HumanIcon from '@mui/icons-material/Person';
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { liveChatOpen } from '../../store/appSlice';
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
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(liveChatOpen(true));
  };

  const hoverColor = isBot
    ? 'rgba(240, 113, 49, 0.1)' // Less bright version of the bot icon color
    : 'rgba(0, 134, 250, 0.1)'; // Less bright version of the human icon color

  return (
    <Box
      className='chat-message-preview'
      sx={{
        '&:hover': {
          backgroundColor: hoverColor,
        },
      }}
      onClick={handleClick}
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
        {isBot ? <BotIcon className='chat-icon-bot' /> : <HumanIcon className='chat-icon-human' />}
      </Box>
    </Box>
  );
};

export default ChatMessagePreview;
