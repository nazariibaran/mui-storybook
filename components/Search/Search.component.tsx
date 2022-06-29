import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchProps } from './Search.props';
import { TextField } from '../TextField';

/**
 * Renders Search
 */
const Search: React.FC<SearchProps> = (props) => {
  return (
    <TextField
      fullWidth
      type='search'
      label='Search'
      InputProps={{
        endAdornment: <SearchIcon />
      }}
      {...props}
    />
  );
};

export { Search };
