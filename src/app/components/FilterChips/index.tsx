import React from 'react';
import { Box, Chip, Stack } from '@mui/material';
import { styles } from './styles';
import './styles.css';

function FilterChips() {
  return (
    <Box sx={styles.container}>
      <Stack direction="row" spacing={2}>
        <Chip label="BBQ (12)" />
        <Chip label="Korean (2)" />
        <Chip label="Hotdog (4)" />
        <Chip label="Indian (1)" />
        <Chip label="Vietnamese (2)" />
        <Chip label="Greek (5)" />
        <Chip label="Italian (5)" />
        <Chip label="Arabic (6)" />
      </Stack>
    </Box>
  );
}

export { FilterChips };
