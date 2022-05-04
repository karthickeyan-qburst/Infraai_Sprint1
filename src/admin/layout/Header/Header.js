import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import NavBar from "../NavBar/NavBar";

import "./Header.scss";
import { useNavigate} from "react-router-dom";
import { Auth } from 'aws-amplify';

function Header({ drawerWidth , ...rest }) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignout = () => {
    Auth.signOut().then(res => navigate('/')).catch(err => console.log(err))
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar elevation={0} className="header__appbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="header__menuicon"
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="header__logo"
          >
            infra ai
          </Typography>
          <IconButton size="large" className="header__user-icon">
            <AccountCircle />
          </IconButton>
          <Typography
            variant="p"
            noWrap
            component="div"
            className="header__user"
          >
            Super User
          </Typography>
          <IconButton size="large" onClick={handleMenu}>
            <ExpandMoreOutlinedIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleSignout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box component="div" mt={8}>
        <NavBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </>
  );
}

export default Header;
