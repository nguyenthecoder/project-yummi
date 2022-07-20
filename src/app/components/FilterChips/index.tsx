import React from 'react';
import { Box, Chip, Stack } from '@mui/material';
import { styles } from './styles';
import './styles.css';

function FilterChips() {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" spacing={2}>
        <Chip label="BBQ" />
        <Chip label="Korean" />
        <Chip label="Hotdog" />
        <Chip label="Indian" />
        <Chip label="Vietnamese" />
        <Chip label="Greek" />
        <Chip label="Italian" />
        <Chip label="Arabic" />
      </Stack>
    </Box>
  );
}

export { FilterChips };
