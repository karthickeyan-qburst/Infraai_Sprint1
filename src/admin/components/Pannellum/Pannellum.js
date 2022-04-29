/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import './Pannellum.scss';
import ReactPannellum, {
  getConfig,
  loadScene,
  getViewer,
  getCurrentScene,
  addScene,
  // getAllScenes,
  addHotSpot
  // toggleFullscreen,
} from 'react-pannellum';

export default function Pannellum({ sceneId, imageSource, hotSpots }) {
  const [config, setConfig] = useState({
    uiText: { loadingLabel: '' },
    autoLoad: true,
    hotSpotDebug: true,
    mouseZoom: false
  });

  return (
    <div>
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
    </div>
  );
}
