import React from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import { NavBar } from 'app/components/NavBar';
import { CurrentLocation } from 'app/components/CurrentLocation';
import { SearchBox } from 'app/components/SearchBox';
import { FilterChips } from 'app/components/FilterChips';
import { ImageItem } from 'app/components/ImageItem';

import { styles } from './styles';

function HomePage() {
  return (
    <Box>
      <NavBar />
      <CurrentLocation />
      <SearchBox />
      <FilterChips />

      <Typography sx={{ fontWeight: 'bold' }}>
        Near Me
      </Typography>
      <Box sx={styles.listContainer}>
        <Stack spacing={2}>
          <ImageItem />
          <ImageItem />
          <ImageItem />
        </Stack>
      </Box>
    </Box>
  );
}

export { HomePage };
