import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './admin/layout/Header/Header';
import './App.scss';
const Home = lazy(() => import('./admin/pages/home/Home'));
const Marketplace = lazy(() => import('./admin/pages/maketplace/Marketplace'));
const Myprojects = lazy(() => import('./admin/pages/myprojects/Myprojects'));
const Intel = lazy(() => import('./admin/pages/intel/Intel'));
const ProjectMap = lazy(() => import('./admin/pages/vision/projectMap/ProjectMap'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Box className="parent-container">
            <Header />
            {/*  <CardComponent /> */}
            <Box className="infai_fill_width_grid ">
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/myprojects" element={<Myprojects />} />
                <Route exact path="/marketplace" element={<Marketplace />} />
                <Route exact path="/intel/:id" element={<Intel />} />
                <Route exact path="/vision/:id" element={<ProjectMap />} />
              </Routes>
            </Box>
          </Box>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
