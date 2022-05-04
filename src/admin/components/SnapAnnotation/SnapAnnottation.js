/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Image, Label, Tag } from 'react-konva';
import { Card } from '@mui/material';
import './SnapAnnotation.scss';

function SnapAnnotation({ imageSource, playerObject, setPaused, drawHeight, drawWidth, paused }) {
  const [color, setColor] = useState('green');
  const [image, setImage] = useState('');
  const [coordinates, setCoordinate] = useState({
    endX: 489,
    endY: 344,
    startX: 441,
    startY: 306
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
    setPaused(false);
  };

  return (
    <Card onClick={() => playerhandler()} className="snapAnnotation" id="snapAnnotation">
      <Stage width={drawWidth || window.innerWidth} height={drawHeight || window.innerHeight}>
        <Layer>
          <Image x={0} y={0} image={image} width={drawWidth} height={drawHeight} />
          <Label x={coordinates.startX} y={coordinates.startY} opacity={0.75}>
            <Tag
              fill="black"
              lineJoin="round"
              // pointerDirection="down"
              // pointerWidth={10}
              // pointerHeight={10}
              // shadowColor="black"
              // shadowBlur={10}
              // shadowOffsetX={10}
              // shadowOffsetY={10}
              // shadowOpacity={0.5}
            />
            <Text text="Car" fontFamily="Calibri" fontSize={18} padding={5} fill="white" />
          </Label>

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
