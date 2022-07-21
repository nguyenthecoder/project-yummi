import React from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { ImageItem } from 'app/components/ImageItem';

import { styles } from './styles';

function MainList() {
  return (
    <Box>
      <Box sx={styles.sectionContainer}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
          Near Me
        </Typography>

      </Box>
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

export { MainList };
