/* eslint-disable no-unreachable */
/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop'; // PixelCrop, // Crop, // makeAspectCrop, // centerCrop,
import 'react-image-crop/dist/ReactCrop.css';
import './Annotation.scss';
import { Stage, Layer, Rect, Image } from 'react-konva';

let startCoordinate = {};
export default function Annotation({ imageSource }) {
  const [crop, setCrop] = useState('');
  const [coordinates, setCoordinate] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  });
  const [color, setColor] = useState('green');
  const [image, setImage] = useState(new window.Image());

  useEffect(() => {
    const img = new window.Image();
    img.src = imageSource || 'https://telanganatoday.com/wp-content/uploads/2020/11/Link-road.jpg';
    setImage(img);

    const reactCrop = document.getElementsByClassName('ReactCrop__child-wrapper')[0];

    if (reactCrop) {
      reactCrop.style = `height: ${img.naturalHeight}px !important; width: ${img.naturalWidth}px !important;`;
    }
  }, []);

  const handleClick = () => {};

  const dragStartHandler = (event) => {
    startCoordinate = {
      ...coordinates,
      startX: event.offsetX,
      startY: event.offsetY
    };
  };

  const dragEndHandler = (event) => {
    setCoordinate(() => ({
      ...startCoordinate,
      endX: event.offsetX,
      endY: event.offsetY
    }));

    const dragbleElement = document.getElementsByClassName('ReactCrop__crop-selection')[0];

    if (dragbleElement) {
      dragbleElement.dataset.ord = 'not_draggble_now';
      dragbleElement.style.pointerEvents = 'none';
    }
  };

  function PolygonElement(coordinates) {
    if (
      coordinates.startX === 0 &&
      coordinates.startY === 0 &&
      coordinates.endX === 0 &&
      coordinates.endY === 0
    ) {
      return;
    }

    return (
      <Rect
        x={coordinates.startX}
        y={coordinates.startY}
        width={coordinates.endX - coordinates.startX}
        height={coordinates.endY - coordinates.startY}
        fill={color}
        opacity={0.4}
        onClick={handleClick}
      />
    );
  }

  return (
    <div className="draw__container">
      <ReactCrop
        ariaLabels={{ cropArea: false }}
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        // disabled={drawEnabled ? false : true}
        onDragStart={(e) => dragStartHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}>
        <Stage
          width={imageSource?.offsetWidth || window.innerWidth}
          height={image.offsetLeft || window.innerHeight}>
          <Layer>
            <Image x={0} y={0} image={image} />
            {PolygonElement(coordinates)}
          </Layer>
        </Stage>
      </ReactCrop>
    </div>
  );
}
