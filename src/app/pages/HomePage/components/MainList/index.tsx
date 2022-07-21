import React from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { ImageItem } from 'app/components/ImageItem';

import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

function MainList() {
  const navigate = useNavigate();

  const goToVendor = () => {
    navigate('/vendor');
  };

  return (
    <Box>
      <Box sx={styles.sectionContainer}>
        <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>
          Near Me
        </Typography>

      </Box>
      <Box sx={styles.listContainer}>
        <Stack spacing={2}>
          <ImageItem goToVendor={goToVendor} />
          <ImageItem goToVendor={goToVendor} />
          <ImageItem goToVendor={goToVendor} />
        </Stack>
      </Box>

    </Box>

  );
}

export { MainList };
