import React from 'react';
import {
  Box,
  Input,
  IconButton,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import { styles } from './styles';

function SearchBox() {
  return (
    <Box sx={styles.container}>

      <Box sx={styles.searchBoxGroup}>
        <Input style={styles.searchBox} placeholder="Search location ..." />
        <SearchRoundedIcon />
      </Box>

      <IconButton sx={styles.qrButtonGroup}>
        <QrCode2RoundedIcon />
      </IconButton>

    </Box>

  );
}

export { SearchBox };
