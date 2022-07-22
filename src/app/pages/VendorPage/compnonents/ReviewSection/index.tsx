import React from 'react';
import {
  Box, Typography, List, ListSubheader, ListItem, Pagination,
} from '@mui/material';
import { styles } from './styles';

function ReviewSection() {
  return (
    <Box sx={styles.container}>
      <ListSubheader sx={styles.header}>
        <Typography sx={styles.headerText}>Reviews</Typography>
      </ListSubheader>
      <List sx={styles.list} subheader={<li />}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ListItem key={item}>
            <Box sx={styles.itemContainer}>
              <Typography sx={styles.itemHeader}>Anonymous</Typography>
              <Typography>
                This is an example review and should be quit long,
                this food truck is awesome, I recommend people to try it
                {' '}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
      <Pagination count={5} />
    </Box>
  );
}

export { ReviewSection };
