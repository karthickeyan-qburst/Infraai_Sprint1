import React from 'react';
import { Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import './NavBar.scss';

function NavBar({mobileOpen, handleDrawerToggle, ...props}) {
    const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div className='navbar__drawer'>
          <Toolbar sx = {{display: {xs: 'none', sm:'block'}}} className='drawer__top'/>
          <List className='navbar__list'>
            {['Home', 'My Projects', 'Intel', 'Vision', 'Marketplace'].map((text, index) => (
              <ListItem button key={text} 
              className='navbar__listitem'
              >
                <ListItemIcon className='navbar__listitem-icon'>
                  <InboxIcon /> 
                </ListItemIcon>
                <ListItemText primary={text} className='navbar__listitem-text'  />
                <div className='navbar__divider' />
              </ListItem>
            ))}
          </List>
        </div>
      );

  return (
    <Box component='nav' className='navbar__container'>
        <Drawer
          container={container}
          variant="temporary"
          anchor='left'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' }
          }}
          open
        >
          {drawer}
        </Drawer>
        
    </Box>
  )
}

export default NavBar