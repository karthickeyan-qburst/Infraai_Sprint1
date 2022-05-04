import React from 'react';
import { ReactComponent as ZoomSvg } from '../../../assets/zoom.svg';
import { ReactComponent as FileSearchSvg } from '../../../assets/filesearch.svg';
import { ReactComponent as SelectSvg } from '../../../assets/select.svg';
import { ReactComponent as RedoSvg } from '../../../assets/redo.svg';
import { ReactComponent as UndoSvg } from '../../../assets/undo.svg';


import './FooterIconMenu.scss';

function FooterIconMenu() {
  return (
    <div className='footericonmenu__container'>
        <span className='footericonmenu__icon-button'>
            <FileSearchSvg  className="footericonmenu_icon" />
        </span>
        <span className='footericonmenu__icon-button'>
            <ZoomSvg className="footericonmenu_icon"/>
        </span>
        <span className='footericonmenu__icon-button'>
            <SelectSvg className="footericonmenu_icon" />
        </span>
        <span className='footericonmenu__icon-button'>
            <UndoSvg className="footericonmenu_icon" />
        </span>
        <span className='footericonmenu__icon-button'>
            <RedoSvg className="footericonmenu_icon"/>
        </span>
    </div>
  )
}

export default FooterIconMenu