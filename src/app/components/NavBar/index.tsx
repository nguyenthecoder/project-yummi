import React from 'react';
import {
  AppBar,
  Toolbar, Typography,
} from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <AppBar position="sticky">
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
  );
}

export { NavBar };
