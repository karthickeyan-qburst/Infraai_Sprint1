/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import ReactCrop from 'react-image-crop'; // PixelCrop, // Crop, // makeAspectCrop, // centerCrop,
import 'react-image-crop/dist/ReactCrop.css';
import './Annotation.scss';

export default function Annotation({ imageSource }) {
  const [crop, setCrop] = useState('');
  const [coordinates, setCoordinate] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  });
  const [ctx, setCtx] = useState('');

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    setCtx(context);

    function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
      return Math.min(maxW / imgW, maxH / imgH);
    }

    function make_base() {
      const img = new Image();
      img.src =
        imageSource || 'https://telanganatoday.com/wp-content/uploads/2020/11/Link-road.jpg';
      img.onload = function () {
        context.canvas.width = img.width;
        context.canvas.height = img.height;

        canvas.width = img.width;
        canvas.height = img.height;

        const w = img.width;
        const h = img.height;

        // resize img to fit in the canvas
        // You can alternately request img to fit into any specified width/height
        const sizer = scalePreserveAspectRatio(w, h, canvas.width, canvas.height);

        context.drawImage(img, 0, 0, w, h, 0, 0, w * sizer, h * sizer);
      };
    }
    make_base();
  }, []);

  const dragStartHandler = (event) => {
    setCoordinate((coordinates) => ({
      ...coordinates,
      startX: event.offsetX,
      startY: event.offsetY
    }));
  };
  const dragEndHandler = (event) => {
    setCoordinate((coordinates) => ({
      ...coordinates,
      endX: event.offsetX,
      endY: event.offsetY
    }));

    ctx.beginPath();
    ctx.moveTo(coordinates.startX, coordinates.startY);
    ctx.lineTo(event.offsetX, coordinates.startY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.lineTo(coordinates.startX, event.offsetY);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.stroke();
    setCoordinate({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
  };

  return (
    <div className="draw__container">
      <ReactCrop
        ariaLabels={{ cropArea: false }}
        crop={crop}
        onChange={(_, percentCrop) => setCrop(percentCrop)}
        // disabled={drawEnabled ? false : true}
        onDragStart={(e) => dragStartHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}>
        <canvas id="canvas" />
      </ReactCrop>
    </div>
  );
}
