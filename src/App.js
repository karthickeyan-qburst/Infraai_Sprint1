import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./admin/layout/Header/Header";
import CardComponent from "./admin/components/Card/CardComponent";

const Home = lazy(() => import("./admin/pages/home/Home"));
const Marketplace = lazy(() => import("./admin/pages/maketplace/Marketplace"));
const Login = lazy(() => import("./frontend/login/Login"));
const Forgetpassword = lazy(() =>
  import("./frontend/forgotPassword/ForgotPassword")
);

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Route for users not logged in*/}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<Forgetpassword />} />
          </Routes>

          {/* Route for users logged in*/}
          <Box className="parent-container">
            <Header />
            <CardComponent />
          </Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
