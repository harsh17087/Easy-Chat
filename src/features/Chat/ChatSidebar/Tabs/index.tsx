import React, { useState } from 'react';
import { Tabs as MuiTabs, Tab, Box } from '@mui/material';
import AllMessages from './AllMessages';
import Bots from './Bots';
import Human from './Human';
import MailIcon from '@mui/icons-material/Mail';
import AndroidIcon from '@mui/icons-material/Android';
import PersonIcon from '@mui/icons-material/Person';

const Tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <MuiTabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          selectionFollowsFocus
          sx={{
            '& .MuiTab-root': {
              minHeight: 'auto', // Override min-height
              '&:focus, &:focus-visible': {
                outline: 'none',
              },
            },
          }}
        >
          <Tab icon={<MailIcon />} iconPosition='start' label='All Messages' />
          <Tab icon={<AndroidIcon />} iconPosition='start' label='Bots' />
          <Tab icon={<PersonIcon />} iconPosition='start' label='Human' />
        </MuiTabs>
      </div>
      <Box
        sx={{
          maxHeight: '72vh',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        }}
      >
        {value === 0 && <AllMessages />}
        {value === 1 && <Bots />}
        {value === 2 && <Human />}
      </Box>
    </div>
  );
};

export default Tabs;
