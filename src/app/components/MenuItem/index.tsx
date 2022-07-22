import React from 'react';
import {
  Box, Typography, Stack,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

import { styles } from './styles';

const MOCK_IMAGE = 'https://simply-delicious-food.com/wp-content/uploads/2020/07/Easy-salad-sandwiches-with-herb-mayo-5.jpg';

interface MenuItemrops {
  onClick: Function
}

function MenuItem({ onClick }: MenuItemrops) {
  return (
    <Box sx={styles.container} onClick={() => onClick()}>
      <Box src={MOCK_IMAGE} component="img" sx={styles.image} />
      <Box sx={styles.aboutGroup}>
        <Stack spacing={0} sx={{ padding: 1 }}>
          <Typography sx={styles.name}>Food Truck Sample</Typography>
          <Stack direction="row" spacing={1}>
            <Stack direction="row" spacing={1}>
              <FavoriteIcon sx={{ color: 'red' }} />
              <Typography sx={styles.text}>999</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <AttachMoneyRoundedIcon sx={{ color: 'orange' }} />
              <Typography sx={styles.text}>13</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export { MenuItem };
