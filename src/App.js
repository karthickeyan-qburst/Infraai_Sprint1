import * as React from "react";
import { Box } from '@mui/material';

import Header from './admin/layout/Header/Header';
import CardComponent from './admin/components/Card/CardComponent';


function App() {
  return (
  <Box className='parent-container'>
    <Header />
    <CardComponent />
  </Box>);
}

export default App;
