import React from 'react';
import {
  Box,
  Typography,
  Stack,
} from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { styles } from './styles';

function CurrentLocation() {
  return (
    <Box sx={{
      ...styles.container,
    }}
    >
      <Typography>Current Location</Typography>
      <Stack direction="row">
        <LocationOnRoundedIcon />
        <Typography sx={styles.locationText}>
          123 Funny St, FunTown, NY, 12345
        </Typography>

      </Stack>

    </Box>

  );
}

export { CurrentLocation };
