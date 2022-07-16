import React from 'react';
// import './App.css';
import {
  Box, Paper, Typography,
} from '@mui/material';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100px',
      backgroundColor: 'red',
    }}
    >
      <Paper elevation={3}>
        <Typography>Hello World</Typography>
      </Paper>
    </Box>
  );
}

export { App };
