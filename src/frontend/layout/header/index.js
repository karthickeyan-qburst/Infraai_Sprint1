import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './header.scss';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="iai_login_header_main">
        <Toolbar className="iai_login_header_topbar">
          <Typography
            variant="h4"
            className="iai_login_header_title"
            component="div"
            sx={{ flexGrow: 1 }}>
            infra ai
          </Typography>
          <Button className="iai_login_header_button" variant="outlined">
            Back to Homepage
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
