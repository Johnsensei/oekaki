import React, { useEffect, useCallback, useState} from 'react';
import ColorButton from './ColorButton';
import PenButton from './PenButton';
import EditButton from './EditButton';
import DownloadButton from './DownloadButton';
import ShareModal from './ShareModal';
import '../App.css'
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';

import WhiteCircle from '../img/white-circle.png';
import BlackCircle from '../img/black-circle.png';
import GreenCircle from '../img/green-circle.png';
import RedCircle from '../img/red-circle.png';
import PurpleCircle from '../img/purple-circle.png';
import BlueCircle from '../img/blue-circle.png';
import OrangeCircle from '../img/orange-circle.png';
import YellowCircle from '../img/yellow-circle.png';
import TwoPX from '../img/2PX.png';
import FivePX from '../img/5PX.png';
import TenPX from '../img/10PX.png';
import Undo from '../img/undo.png';
import Clear from '../img/clear.png';
import Png from '../img/png.png';
import Jpg from '../img/jpg.png';
import Share from '../img/share.png';
import Svg from '../img/svg.png';
import Logo from '../img/drawsultation.png';


function Main() {

  const [
    divRef,
    {
      changePenColor,
      changePenWidth,
      getSvgXML,
      download,
      undo,
      clear
    }
  ] = useSvgDrawing({
    penWidth: 2,
    penColor: '#000'
  })

  // Ignore warnings that these values are never used. They are needed.
  const [xml, setXml] = useState('')
  const [penThinnerWidth, setPenThinnerWidth] = useState(0)

  const [showModal, setShowModal] = useState(false);

  const handleChangeXML = useCallback(() => {
    setXml(getSvgXML())
  }, [getSvgXML])

  const handleClickDownload = useCallback(
    (ext = 'svg' | 'png' | 'jpg') => () => {
      download(ext)
    },
    [download]
  )

  const pressureChange = useCallback(
    (force, event) => {
      setPenThinnerWidth(30 - Math.floor(force * 40))
    },
    [setPenThinnerWidth]
  )

  // Pressure -> https://github.com/stuyam/pressure
  useEffect(() => {
    window.scrollTo(0, 1);
    if (!divRef.current) return
    Pressure.set(divRef.current, {
      change: pressureChange
    })
  }, [divRef, pressureChange]);


  return (
    
    <div className='main-container'>

      {/* Share Modal */}
      {showModal && <ShareModal setShowModal={setShowModal}/>}

        {/* Draw Pad */}
        <div
        className='draw-pad'
        ref={divRef}
        onTouchEnd={handleChangeXML}
        onMouseLeave={handleChangeXML}
        />

        {/* Buttons */}
        <div className='side-buttons-container'>

          <div className='side-logo-container'>
            <img
              src={Logo}
              alt='Drawsultation logo'
              className='side-logo'
            />

          </div>

            {/* Pen Width IMAGE Buttons */}
            <div className='pen-button-container'>

              <PenButton
                src={TwoPX}
                alt='2 pixel pen'
                onClick={() => changePenWidth(2)}
              />
              <PenButton
                src={FivePX}
                alt='5 pixel pen'
                onClick={() => changePenWidth(5)}
              />
              <PenButton
                src={TenPX}
                alt='10 pixel pen'
                onClick={() => changePenWidth(10)}
              />

            </div>

            {/* Circle Color Buttons */}
            <div className='color-button-container'>

                <ColorButton
                  src={BlackCircle}
                  alt='black'
                  onClick={() => changePenColor('#000000')}
                />
                <ColorButton
                  src={WhiteCircle}
                  alt='white'
                  onClick={() => changePenColor('#FFFFFF')}
                />
                <ColorButton
                  src={RedCircle}
                  alt='red'
                  onClick={() => changePenColor('#FE2B01')}
                />
                <ColorButton
                  src={GreenCircle}
                  alt='green'
                  onClick={() => changePenColor('#3FF913')}
                />
                <ColorButton
                  src={YellowCircle}
                  alt='yellow'
                  onClick={() => changePenColor('#FCFC0A')}
                />
                <ColorButton
                  src={BlueCircle}
                  alt='blue'
                  onClick={() => changePenColor('#2A2EFE')}
                />
                <ColorButton
                  src={OrangeCircle}
                  alt='orange'
                  onClick={() => changePenColor('#FF8B00')}
                />
                <ColorButton
                  src={PurpleCircle}
                  alt='purple'
                  onClick={() => changePenColor('#F03EFE')}
                />

            </div>

            {/* Action Buttons */}
            <div className='action-button-container'>
              <div className='edit-button-container'>
                <EditButton
                  src={Undo}
                  alt='undo'
                  onClick={undo}
                />
                <EditButton
                  src={Clear}
                  alt='clear'
                  onClick={clear}
                />
              </div>
              <div className='download-button-container'>
                <DownloadButton
                  src={Png}
                  alt='png'
                  onClick={handleClickDownload('png')}
                />
                <DownloadButton
                  src={Jpg}
                  alt='jpeg'
                  onClick={handleClickDownload('jpg')}
                />
                <DownloadButton
                  src={Share}
                  alt='share button'
                  onClick={() => setShowModal(!showModal)}
                />
              </div>
               
            </div>

        </div>

    </div>

  );
}

export default Main;