import React, { useState } from 'react';
import { Avatar, Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ChatContent.css';
import SearchBar from '../ChatSidebar/Searchbar';

const ChatTopSection = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSearch, setIsSearch] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchClick = () => {
    setIsSearch(true);
    handleClose();
  };

  const handleSearchClose = () => {
    setIsSearch(false);
  };

  return (
    <div className='chat-top-section'>
      {isSearch ? (
        <Box className='chat-top-left'>
          <IconButton onClick={handleSearchClose}>
            <ArrowBackIcon />
          </IconButton>
          <SearchBar />
        </Box>
      ) : (
        <>
          <Box className='chat-top-left'>
            <Avatar src='https://via.placeholder.com/40' alt='User Image' className='chat-avatar' />
            <Box className='chat-user-info'>
              <Typography variant='h6' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                User Name
              </Typography>
              <Typography variant='body2' className='chat-status'>
                Online
              </Typography>
            </Box>
          </Box>
          <Box className='chat-top-right'>
            <IconButton>
              <CallIcon />
            </IconButton>
            <IconButton>
              <VideocamIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleSearchClick}>Search</MenuItem>
              <MenuItem onClick={handleClose}>Block</MenuItem>
              <MenuItem onClick={handleClose}>Report</MenuItem>
              <MenuItem onClick={handleClose}>Wallpaper</MenuItem>
              <MenuItem onClick={handleClose}>Mute</MenuItem>
            </Menu>
          </Box>
        </>
      )}
    </div>
  );
};

export default ChatTopSection;
