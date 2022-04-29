import React, { useState } from "react";
import { ReactComponent as HomeSvg } from '../../../assets/home.svg';
import { ReactComponent as HomeSelectedSvg } from '../../../assets/home-selected.svg';
import { ReactComponent as IntelSvg } from '../../../assets/intel.svg';
import { ReactComponent as IntelSelectedSvg } from '../../../assets/intel-selected.svg';
import { ReactComponent as MarketSvg } from '../../../assets/market.svg';
import { ReactComponent as MarketSelectedSvg } from '../../../assets/market-selected.svg';
import { ReactComponent as MyProjectsSvg } from '../../../assets/projects.svg';
import { ReactComponent as MyProjectsSelectedSvg } from '../../../assets/projects-selected.svg';
import { ReactComponent as VisionSvg } from '../../../assets/vision.svg';
import { ReactComponent as VisionSelectedSvg } from '../../../assets/vision-selected.svg';

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import "./NavBar.scss";
import routes from "./../../../route/route";

function NavBar({ mobileOpen, handleDrawerToggle, ...props }) {
  const [ selected, setSelected ] = useState({});
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
  const routeChange = (routeName, index, name) => {
    setSelected({name, index});
    console.log(selected);
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
              <>
                <ListItem
                  key={index}
                  button
                  className="navbar__listitem"
                  onClick={routeChange.bind(this, route.path, index, route.name)}
                >
                  <MenuItem button  selected={selected.index === index}>
                  <ListItemIcon className = {`navbar__listitem-icon `}>
                    {
                      route.name === 'Home' ? (selected.name ==='Home' ? <HomeSelectedSvg /> : <HomeSvg />) : null
                    }
                    {
                      route.name === 'Intel' ? (selected.name ==='Intel' ? <IntelSelectedSvg /> : <IntelSvg />) : null
                    }
                    {
                      route.name === 'My Projects' ? (selected.name ==='My Projects' ? <MyProjectsSelectedSvg /> : <MyProjectsSvg />) : null
                    }
                    {
                      route.name === 'Vision' ? (selected.name ==='Vision' ? <VisionSelectedSvg /> : <VisionSvg />) : null
                    }
                    {
                      route.name === 'Marketplace' ? (selected.name ==='Marketplace' ? <MarketSelectedSvg /> : <MarketSvg />) : null
                    }
                  </ListItemIcon>
                  </MenuItem>
                    <ListItemText
                      key={index}
                      primary={route.name}
                      className="navbar__listitem-text"
                    />
                </ListItem>
                <div className="navbar__divider" />
              </>
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
