import React from 'react';
import {
  AppBar, Box,
  Toolbar, Typography,
} from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              size: 2,
            }}
          >
            Yummi Logo

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { NavBar };
