import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate, useLocation } from "react-router-dom";

import "./NavBar.scss";
import routes from "./../../../route/route";

function NavBar({ mobileOpen, handleDrawerToggle, ...props }) {
  const { window } = props;
  let navigate = useNavigate();
  let location = useLocation();
  let showSubMenu = false;
  if (
    location.pathname.includes("vision") ||
    location.pathname.includes("intel")
  ) {
    showSubMenu = true;
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const routeChange = (routeName) => {
    navigate(routeName);
  };

  const drawer = (
    <div className="navbar__drawer">
      <Toolbar
        sx={{ display: { xs: "none", sm: "block" } }}
        className="drawer__top"
      />
      <List className="navbar__list">
        {routes.map((route, index) => (
          <>
            {route.menutype === "sub" && showSubMenu === false ? (
              ""
            ) : (
              <ListItem
                key={index}
                button
                className="navbar__listitem"
                onClick={routeChange.bind(this, route.path)}
              >
                <ListItemIcon className="navbar__listitem-icon">
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  key={index}
                  primary={route.name}
                  className="navbar__listitem-text"
                />
                <div className="navbar__divider" />
              </ListItem>
            )}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <Box component="nav" className="navbar__container">
      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default NavBar;
