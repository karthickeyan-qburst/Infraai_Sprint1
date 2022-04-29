/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './Pannellum.scss';
import ReactPannellum from 'react-pannellum'; // toggleFullscreen, //   addHotSpot // getAllScenes, //   addScene, //   getCurrentScene, //   getViewer, //   loadScene, //   getConfig,
import { Card } from '@material-ui/core';

export default function Pannellum({ sceneId, imageSource, height, width }) {
  const [config, setConfig] = useState({
    uiText: { loadingLabel: '' },
    autoLoad: true,
    hotSpotDebug: true,
    mouseZoom: true
  });

  useEffect(() => {
    const pannellumContainer = document.getElementsByClassName('pannellum__container')[0];
    if (pannellumContainer) {
      pannellumContainer.style = `width: ${width || '100%'} !important; height: ${
        height || '75vh'
      } !important `;
    }
  }, []);

  return (
    <Card className="pannellum__container">
      <ReactPannellum
        id="pannellumId"
        sceneId={sceneId || 'scene1'}
        imageSource={
          imageSource ||
          'https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kris-guico-rsB-he-ye7w-unsplash.jpg&w=1920'
        }
        config={config}
        className="custom-panell"
      />
    </Card>
  );
}
