/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-self-import */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { Popper, Button, Card, Chip, Grid } from '@mui/material';
import SnapAnnotation from '../SnapAnnotation/SnapAnnottation';
import './VideoPlayer.scss';

export default function VideoPlayer({
  videoSource,
  videoPoster,
  height,
  showClasses,
  objectClasses,
  drawWidth,
  drawHeight
}) {
  useEffect(() => {
    const videoReact = document.getElementsByClassName('video-react')[0];
    if (videoReact) {
      videoReact.style = `height: ${height || '75vh'} !important `;
    }
  }, []);

  const [paused, setPaused] = useState('');
  const [playerObject, setPlayerObject] = useState('');

  const playerRef = useCallback((player) => {
    if (player !== null) {
      // player = playerRef.current
      player.actions.toggleFullscreen = () => {
        console.log('prevent full screen video');
      };
      setPlayerObject(player);
    }
  }, []);

  const [annotationClasses, setAnnotationClasses] = useState(
    objectClasses || [
      'Car',
      'Foot Traffic light',
      'Lane Mark',
      'Light',
      'Pedestrian road sign',
      'Road cone',
      'Road Cone',
      'Traffic light'
    ]
  );

  const takeSnapshotHandler = () => {
    console.log(playerObject.getState().player.paused);
    setPaused(playerObject.getState().player.paused);
  };

  return (
    <div className="videoPlayer">
      <SnapAnnotation
        paused={paused}
        drawWidth={drawWidth}
        drawHeight={drawHeight}
        setPaused={setPaused}
        playerObject={playerObject}
      />

      <div style={{ display: paused ? 'none' : 'block' }}>
        {showClasses === 'objectClasses' && (
          <Card className="object__classes">
            <Grid container>
              <Grid item container>
                Object Classes
              </Grid>
              <Grid item container spacing={2} marginTop="5px">
                {annotationClasses &&
                  annotationClasses.map((el, i) => (
                    <Grid item>
                      <Chip className="object__chip" key={el + i} label={el} variant="outlined" />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Card>
        )}
        <Player
          ref={playerRef}
          onPlay={() => {}}
          onPause={() => takeSnapshotHandler()}
          poster={videoPoster || 'https://vistapointe.net/images/sintel-1.jpg'}>
          <source
            src={
              videoSource ||
              'https://infraai.s3.amazonaws.com/360_video/GS052879_480p.mov' ||
              'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            }
          />
        </Player>
      </div>
    </div>
  );
}
