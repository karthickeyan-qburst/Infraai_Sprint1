/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { Card } from '@mui/material';
import './SnapAnnotation.scss';

function SnapAnnotation({ imageSource, playerObject, setPaused, drawHeight, drawWidth, paused }) {
  const [color, setColor] = useState('green');
  const [image, setImage] = useState('');
  const [coordinates, setCoordinate] = useState({
    endX: 295.5,
    endY: 277,
    startX: 273.5,
    startY: 247
  });

  useEffect(() => {
    const img = document.createElement('img');
    img.src = imageSource || '/132.jpg';
    img.onload = () => {
      setImage(img);
    };

    const snapContainer = document.getElementById('snapAnnotation');

    if (snapContainer) {
      snapContainer.style = `height: ${drawHeight || img.naturalHeight}px !important; width: ${
        drawWidth || img.naturalWidth
      }px !important; display: ${paused ? 'block' : 'none'}!important`;
    }
  }, [paused]);

  const handleClick = () => {};

  const playerhandler = () => {
    playerObject.play();
    console.log('hello');
    setPaused(false);
  };

  return (
    <Card onClick={() => playerhandler()} className="snapAnnotation" id="snapAnnotation">
      <Stage width={drawWidth || window.innerWidth} height={drawHeight || window.innerHeight}>
        <Layer>
          <Image x={0} y={0} image={image} width={drawWidth} height={drawHeight} />
          <Rect
            x={coordinates.startX}
            y={coordinates.startY}
            width={coordinates.endX - coordinates.startX}
            height={coordinates.endY - coordinates.startY}
            fill={color}
            opacity={0.4}
            onClick={handleClick}
          />
        </Layer>
      </Stage>
    </Card>
  );
}

export default SnapAnnotation;
