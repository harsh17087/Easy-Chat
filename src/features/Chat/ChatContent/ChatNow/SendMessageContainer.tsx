import { Box, IconButton, InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import './SendMessageContainer.css';

const SendMessageContainer = () => {
  return (
    <Box className='send-message-container'>
      <InputBase placeholder='Type a message' className='send-message-input' />
      <IconButton className='send-message-button'>
        <SendIcon />
      </IconButton>
      <IconButton className='send-message-button'>
        <MicIcon />
      </IconButton>
    </Box>
  );
};

export default SendMessageContainer;
