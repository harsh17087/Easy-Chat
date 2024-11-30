import { Box } from '@mui/material';
import './ChatContent.css';
import ChatHistory from './ChatNow';
import SendMessageContainer from './ChatNow/SendMessageContainer';

const ChatContainer = () => {
  return (
    <Box className='chat-conversation'>
      <ChatHistory />
      <SendMessageContainer />
    </Box>
  );
};

export default ChatContainer;
