import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import chatbotIcon from '../../assets/icons8-chatbot.svg'; // Import the image
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Logo: React.FC = () => {
  const theme = useTheme();
  const fromMobile = useSelector((state: RootState) => state.app.mobileResolution); // Get mobile resolution state from Redux

  return (
    <div
      className='navigation-logo'
      style={{
        padding: fromMobile ? '0.5rem' : '0',
        margin: fromMobile ? '0.5rem' : '0',
      }}
    >
      <img
        src={chatbotIcon} // Use the imported image
        alt='logo'
        style={{
          width: fromMobile ? '2rem' : '1.5rem',
          height: fromMobile ? '2rem' : '1.5rem',
          filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
        }}
      />
      <Typography variant='h6'>Easy Chat</Typography>
    </div>
  );
};

export default Logo;
