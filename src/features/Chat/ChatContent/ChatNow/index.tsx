import { Box, Typography, useTheme } from '@mui/material';
import './ChatHistory.css';
import { chatHistory } from '../../../../constants/mocks';

const ChatHistory = () => {
  const theme = useTheme();

  return (
    <Box
      className='chat-history'
      sx={{
        '--my-message-bg': theme.palette.mode === 'dark' ? '#634ea9' : '#e0f7fa',
        '--other-message-bg': theme.palette.mode === 'dark' ? '#056d6d' : '#c4d3eb',
        '--timestamp-color': theme.palette.mode === 'dark' ? '#bbb' : '#888',
      }}
    >
      {chatHistory.map((chat) => (
        <Box
          key={chat.id}
          className={`chat-message ${chat.sender === 'me' ? 'my-message' : 'other-message'}`}
        >
          <Typography variant='body1' className='chat-message-text'>
            {chat.message}
          </Typography>
          <Typography variant='caption' className='chat-message-timestamp'>
            {chat.timestamp}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChatHistory;
