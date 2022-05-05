/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
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
import { Popper, Button, Card, Chip } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

let startCoordinate = {};
export default function Annotation({
  imageSource,
  objectClasses,
  drawWidth,
  drawHeight,
  setCurrentView
}) {
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
  const [selectedClass, setSelectedClass] = useState('');
  const [crop, setCrop] = useState('');
  const [coordinates, setCoordinate] = useState({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0
  });
  // console.log(coordinates);
  const [color, setColor] = useState('green');
  const [image, setImage] = useState('');
  const [anchorButtonEl, setAnchorButtonEl] = useState(null);
  const [openButton, setButtonOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleButtonClose = () => {
    setAnchorButtonEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [drawEnabled, setDrawEnabled] = useState(true);

  useEffect(() => {
    const img = document.createElement('img');
    img.src = imageSource || '/132.jpg';
    img.onload = () => {
      setImage(img);
    };

    const reactCrop = document.getElementsByClassName('ReactCrop__child-wrapper')[0];

    if (reactCrop) {
      reactCrop.style = `height: ${drawHeight || img.naturalHeight}px !important; width: ${
        drawWidth || img.naturalWidth
      }px !important;`;
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
      setAnchorButtonEl(dragbleElement);
      setButtonOpen(true);
      setDrawEnabled(false);
    }
  };

  const cancelButtonHandler = () => {
    setButtonOpen(false);
    setDrawEnabled(true);
    setCrop('');
    setCoordinate({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
  };

  const rightButtonHandler = () => {
    const dragbleElement = document.getElementsByClassName('ReactCrop__crop-selection')[0];

    if (dragbleElement) {
      dragbleElement.dataset.ord = 'not_draggble_now';
      dragbleElement.style.pointerEvents = 'none';
      setAnchorEl(dragbleElement);
      setOpen(true);
      setButtonOpen(false);
    }
  };

  const selectClassHandler = (className) => {
    setSelectedClass(className);
  };

  const saveHotspot = () => {
    setButtonOpen(false);
    setDrawEnabled(true);
    setOpen(false);
    setCrop('');
    setCoordinate({
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0
    });
    // setCurrentView();
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
        onChange={drawEnabled ? (percentCrop) => setCrop(percentCrop) : () => {}}
        disabled={!drawEnabled}
        onDragStart={(e) => dragStartHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}>
        <Stage
          width={drawWidth || image.offsetWidth || window.innerWidth}
          height={drawHeight || image.offsetLeft || window.innerHeight}>
          <Layer>
            <Image x={0} y={0} image={image} width={drawWidth} height={drawHeight} />
            {PolygonElement(coordinates)}
          </Layer>
        </Stage>

        <Popper
          className="popoverButton"
          open={openButton}
          anchorEl={anchorButtonEl}
          onClose={handleButtonClose}
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10]
                }
              }
            ]
          }}>
          <button onClick={cancelButtonHandler} className="popoverButton__left">
            <CloseOutlinedIcon className="popoverButton__icon" fontSize="small" />
          </button>
          <button onClick={rightButtonHandler} className="popoverButton__right">
            <CheckOutlinedIcon className="popoverButton__icon" fontSize="small" />
          </button>
        </Popper>

        <Popper
          id="objectClass__poppover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          placement="left"
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 20]
                }
              }
            ]
          }}>
          <Card sx={{ maxWidth: 420 }}>
            <div className="popover">
              <div className="popover__top">
                <div>
                  <input placeholder="Traffi" />
                  <Button onClick={() => saveHotspot()}>Save</Button>
                </div>
                <div>
                  Create class with name <span>“Traffi”</span> or select from suggested
                </div>
              </div>

              <div className="popover__bottom">
                <div>suggested</div>
                <div>
                  {annotationClasses &&
                    annotationClasses.map((el, i) => (
                      <Chip
                        className={`chip ${selectedClass === el && 'chip__active'}`}
                        key={el + i}
                        label={el}
                        onClick={() => selectClassHandler(el)}
                        variant="outlined"
                      />
                    ))}
                </div>
              </div>
            </div>
          </Card>
        </Popper>
      </ReactCrop>
    </div>
  );
}
