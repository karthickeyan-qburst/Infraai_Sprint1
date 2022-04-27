import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Header from "./admin/layout/Header/Header";
import CardComponent from "./admin/components/Card/CardComponent";
import "./App.scss";

const Home = lazy(() => import("./admin/pages/home/Home"));
const Marketplace = lazy(() => import("./admin/pages/maketplace/Marketplace"));

function App() {
  const Myprojects = lazy(() => import("./admin/pages/myprojects/Myprojects"));
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Box className="parent-container">
            <Header />
            {/*  <CardComponent /> */}
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/myprojects" element={<Myprojects />} />
              <Route exact path="/marketplace" element={<Marketplace />} />
              <Route exact path="/intel/:id" element={<CardComponent />} />
              <Route exact path="/vision/:id" element={<CardComponent />} />
            </Routes>
          </Box>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
