import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useColorScheme } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useCallback, useMemo } from 'react';

const ToggleMode = () => {
  const { mode, setMode } = useColorScheme();

  // useCallback to memoize the handleToggle function
  const handleToggle = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }, [mode, setMode]);

  // useMemo to memoize the icon component
  const Icon = useMemo(() => (mode === 'dark' ? LightModeIcon : DarkModeIcon), [mode]);

  // Return null if mode is not available
  if (!mode) {
    return null;
  }

  return (
    <Box sx={{ p: '0.8rem' }}>
      <IconButton onClick={handleToggle} color='inherit' sx={{ '&:focus': { outline: 'none' } }}>
        <Icon />
      </IconButton>
    </Box>
  );
};

export default ToggleMode;
