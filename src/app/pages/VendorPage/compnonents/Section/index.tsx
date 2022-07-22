import React from 'react';
import {
  Box, Typography, List, ListSubheader, ListItem,
} from '@mui/material';
import { MenuItem } from 'app/components/MenuItem';
import { styles } from './styles';

function Section() {
  return (
    <Box sx={styles.container}>
      <ListSubheader sx={styles.header}>
        <Typography sx={styles.headerText}>Main Menu</Typography>
      </ListSubheader>
      <List sx={styles.list} subheader={<li />}>
        <ListItem>
          <MenuItem onClick={() => console.log('click test')} />
        </ListItem>
        <ListItem>
          <MenuItem onClick={() => console.log('click test')} />
        </ListItem>
        <ListItem>
          <MenuItem onClick={() => console.log('click test')} />
        </ListItem>
        <ListItem>
          <MenuItem onClick={() => console.log('click test')} />
        </ListItem>
      </List>
    </Box>
  );
}

export { Section };
