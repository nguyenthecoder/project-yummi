import React from 'react';
import {
  Box, Button,
} from '@mui/material';
import MapRoundedIcon from '@mui/icons-material/MapRounded';

import { styles } from './styles';

function Footer() {
  return (
    <Box sx={styles.container}>
      <Button variant="contained" sx={{ backgroundColor: 'orange', color: 'white' }}>
        <MapRoundedIcon />
        Map
      </Button>
    </Box>
  );
}

export { Footer };
