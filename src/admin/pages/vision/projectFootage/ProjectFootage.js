/* eslint-disable react/jsx-filename-extension */
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import Pannellum from '../../../components/Pannellum/Pannellum';
import Annotation from '../../../components/Annotation/Annotation';

export default function ProjectFootage() {
  const [currentView, setCurrentView] = useState('annotation');
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={0.5} alignContent="flex-start">
      <Grid className="infai_inner_content" item xs={6} md={8}>
        <Typography variant="h5" component="div" className="card__heading">
          PROJECT Footage
        </Typography>
      </Grid>
      <Grid className="infai_inner_content" item xs={6} md={4}>
        <Button onClick={() => setCurrentView('objectClasses')}>Object Classes</Button>
        <Button onClick={() => setCurrentView('pannellum')}>Penullum</Button>
        <Button onClick={() => setCurrentView('annotation')}>Draw</Button>
      </Grid>
      <Grid>
        <Button>Return to Map</Button>
        <Button>Return to Overview</Button>
      </Grid>

      <Grid item xs={12} md={12}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
          sx={{ width: '100%', typography: 'body1' }}>
          {(!currentView || currentView === 'objectClasses') && <VideoPlayer height="80vh" />}
          {currentView === 'pannellum' && <Pannellum width="100%" height="75vh" />}
          {currentView === 'annotation' && <Annotation />}
        </Box>
      </Grid>
    </Grid>
  );
}
