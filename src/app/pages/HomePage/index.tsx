import React from 'react';
import {
  Box,
} from '@mui/material';

import { NavBar } from 'app/components/NavBar';
import { Header } from './components/Header';
import { MainList } from './components/MainList';
import { Footer } from './components/Footer';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <Header />
      <MainList />
      <Footer />
      <Box />
    </Box>
  );
}

export { HomePage };
