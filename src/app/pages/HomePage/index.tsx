import React from 'react';
import {
  Box,
} from '@mui/material';

import { NavBar } from 'app/components/NavBar';
import { CurrentLocation } from 'app/components/CurrentLocation';
import { SearchBox } from 'app/components/SearchBox';
import { FilterChips } from 'app/components/FilterChips';
import { ImageItem } from 'app/components/ImageItem';

function HomePage() {
  return (
    <Box>
      <NavBar />
      <CurrentLocation />
      <SearchBox />
      <FilterChips />

      <Box>
        <ImageItem />
      </Box>
    </Box>
  );
}

export { HomePage };
