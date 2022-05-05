/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import Pannellum from '../../../components/Pannellum/Pannellum';
import Annotation from '../../../components/Annotation/Annotation';
import { ReactComponent as PanellumSvg } from '../../../../assets/zoom.svg';
import { ReactComponent as FileSearchSvg } from '../../../../assets/filesearch.svg';
import { ReactComponent as AnnotationSvg } from '../../../../assets/select.svg';
import { ReactComponent as RedoSvg } from '../../../../assets/redo.svg';
import { ReactComponent as UndoSvg } from '../../../../assets/undo.svg';
import { useNavigate } from 'react-router-dom';

import './ProjectFootage.scss';

export default function ProjectFootage() {
  const [currentView, setCurrentView] = useState('');
  const navigate = useNavigate();
  return (
    <Grid
      className="infai_inner_content_projectfootage"
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={0.5}
      alignContent="flex-start">
      <Grid item xs={6} md={8} className="projectfootage_header">
        <Typography variant="h5" component="div" className="card__heading-projectfootage">
          Footage of Project
        </Typography>
        <Grid className="projectfootage_header-menu">
          <div className="footericonmenu__container">
            <span className="footericonmenu__icon-button">
              <FileSearchSvg
                onClick={() =>
                  setCurrentView((view) => (view === 'objectClasses' ? '' : 'objectClasses'))
                }
                className={`footericonmenu_icon ${
                  currentView === 'objectClasses' && 'footericonmenu_icon__active'
                }`}
              />
            </span>
            <span className="footericonmenu__icon-button">
              <PanellumSvg
                onClick={() => setCurrentView('pannellum')}
                className={`footericonmenu_icon ${
                  currentView === 'pannellum' && 'footericonmenu_icon__active'
                }`}
              />
            </span>
            <span className="footericonmenu__icon-button">
              <AnnotationSvg
                onClick={() => setCurrentView('annotation')}
                className={`footericonmenu_icon ${
                  currentView === 'annotation' && 'footericonmenu_icon__active'
                }`}
              />
            </span>
            {/* <span className="footericonmenu__icon-button">
              <UndoSvg className="footericonmenu_icon" />
            </span>
            <span className="footericonmenu__icon-button">
              <RedoSvg className="footericonmenu_icon" />
            </span> */}
          </div>
          <Button onClick={() => navigate('/vision/:id')} className="projectfootage__btn-rtnmap">
            Return to Map
          </Button>
          <Button onClick={() => navigate('/intel/id')} className="projectfootage__btn-rtnoverview">
            Return to Overview
          </Button>
        </Grid>
      </Grid>
      {/* <Grid className="infai_inner_content" item xs={6} md={4}>
        <Button
          onClick={() =>
            setCurrentView((view) => (view === 'objectClasses' ? '' : 'objectClasses'))
          }>
          Object Classes
        </Button>
        <Button onClick={() => setCurrentView('pannellum')}>Penullum</Button>
        <Button onClick={() => setCurrentView('annotation')}>Draw</Button>
      </Grid> */}

      <Grid item xs={12} md={12}>
        <Box
          style={{
            display: 'flex'
            // justifyContent: 'center'
          }}
          sx={{ width: '100%', typography: 'body1' }}>
          {(!currentView || currentView === 'objectClasses') && (
            <VideoPlayer
              showClasses={currentView}
              height="80vh"
              // drawWidth={1200}
              // drawHeight={600}
            />
          )}
          {currentView === 'pannellum' && <Pannellum width="100%" height="75vh" />}
          {currentView === 'annotation' && (
            <Annotation
              setCurrentView={() => setCurrentView('objectClasses')}
              // drawWidth={1200}
              // drawHeight={600}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
