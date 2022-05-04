import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Authenticator, useTheme,Heading, useAuthenticator } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';

import Header from '../src/frontend/layout/header'

import AdminHeader from "./admin/layout/Header/Header";

import Footer from '../src/frontend/layout/footer'
import '@aws-amplify/ui-react/styles.css';
import './App.scss';
I18n.putVocabularies(translations);
I18n.setLanguage('en');

I18n.putVocabularies({
  en: {
    'Sign in': 'Login',
  }
});

const Home = lazy(() => import("./admin/pages/home/Home"));
const Marketplace = lazy(() => import("./admin/pages/maketplace/Marketplace"));
const Myprojects = lazy(() => import("./admin/pages/myprojects/Myprojects"));
const Intel = lazy(() => import("./admin/pages/intel/Intel"));
const ProjectMap = lazy(() =>
  import("./admin/pages/vision/projectMap/ProjectMap")
);
const Order = lazy(() => import("./admin/pages/order/Order"));




const components = {
  Header,
  Footer,
  SignIn:{
    Header(){
      const { tokens } = useTheme();

    return (
      <Heading
        padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
        level={3}
      >
        Login
      </Heading>
    );
    },
    
  }
}

const formFields = {
  signIn: {
    username: {
      placeholder: 'Email Address',
      isRequired: true,
    },
  },
  resetPassword:{
    username: {
      placeholder: 'Email Address',
    }
  }
}

function App() {
  return ( <Authenticator 
              components={components} 
              formFields={formFields}  
            hideSignUp
           >
           <Router>
           <Suspense fallback={<div>Loading...</div>}>
             <Box className="parent-container">
               <AdminHeader/>
               <Box className="infai_fill_width_grid ">
                 <Routes>
                 <Route exact path="/" element={<Home />} />
                   <Route exact path="/home" element={<Home />} />
                   <Route exact path="/myprojects" element={<Home />} />
                   <Route exact path="/marketplace" element={<Home />} />
                   <Route exact path="/intel/:id" element={<Intel />} />
                   <Route exact path="/vision/:id" element={<ProjectMap />} />
                   <Route exact path="/order/:id" element={<Order />} />
                 </Routes>
               </Box>
             </Box>
           </Suspense>
         </Router>
         </Authenticator>);
}

export default App;
