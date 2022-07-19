import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

import { NavBar } from 'app/components/NavBar';
import { CurrentLocation } from 'app/components/CurrentLocation';
import { SearchBox } from 'app/components/SearchBox';

function HomePage() {
  return (
    <Box>
      <NavBar />
      <CurrentLocation />
      <SearchBox />
      <Typography>Logo Here</Typography>
    </Box>
  );
}

export { HomePage };
