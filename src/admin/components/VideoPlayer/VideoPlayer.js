/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-self-import */
import React, { useEffect } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import './VideoPlayer.scss';

export default function VideoPlayer({ style, videoSource, videoPoster, height }) {
  useEffect(() => {
    const videoReact = document.getElementsByClassName('video-react')[0];
    if (videoReact) {
      videoReact.style = `height: ${height || '75vh'} !important `;
    }
  }, []);
  return (
    <div style={style} className="videoPlayer">
      <Player poster={videoPoster || 'https://vistapointe.net/images/sintel-1.jpg'}>
        <source
          src={
            videoSource ||
            'https://infraai.s3.amazonaws.com/360_video/GS052879_480p.mov' ||
            'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          }
        />
      </Player>
    </div>
  );
}
