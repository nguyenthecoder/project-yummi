import React from 'react';
import { Box } from '@mui/material';
import { CurrentLocation } from 'app/components/CurrentLocation';
import { SearchBox } from 'app/components/SearchBox';
import { FilterChips } from 'app/components/FilterChips';

function Header() {
  return (
    <Box>
      <CurrentLocation />
      <SearchBox />
      <FilterChips />
    </Box>
  );
}

export { Header };
