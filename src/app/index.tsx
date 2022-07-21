import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { VendorPage } from 'app/pages/VendorPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
