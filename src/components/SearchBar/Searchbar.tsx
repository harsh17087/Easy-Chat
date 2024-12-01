import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <TextField
      value={searchText}
      onChange={handleSearchChange}
      placeholder='Search...'
      variant='outlined'
      fullWidth
      className={className} // Pass the className prop to the TextField component
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon />
          </InputAdornment>
        ),
        sx: {
          height: '2.5rem',
          padding: '0 0.625rem',
        },
      }}
    />
  );
};

export default SearchBar;
