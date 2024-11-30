import React, { useState } from 'react';
import { Tabs as MuiTabs, Tab, Box } from '@mui/material';
import AllMessages from './AllMessages';
import Bots from './Bots';
import Human from './Human';
import MailIcon from '@mui/icons-material/Mail';
import AndroidIcon from '@mui/icons-material/Android';
import PersonIcon from '@mui/icons-material/Person';
import './Tabs.css';

const Tabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='tabs-container'>
      <div className='tabs-header'>
        <MuiTabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          selectionFollowsFocus
          sx={{
            '& .MuiTab-root': {
              minHeight: 'auto',
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
      <Box className='tabs-content'>
        {value === 0 && <AllMessages />}
        {value === 1 && <Bots />}
        {value === 2 && <Human />}
      </Box>
    </div>
  );
};

export default Tabs;
