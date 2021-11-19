import React, { useEffect, useCallback, useState} from 'react';
import ColorButton from './ColorButton';
import PenButton from './PenButton';
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
    if (!divRef.current) return
    Pressure.set(divRef.current, {
      change: pressureChange
    })
  }, [divRef, pressureChange]);

  return (
    
    <div className='main-container'>

        {/* Draw Pad */}
        <div
        className='draw-pad'
        ref={divRef}
        onTouchEnd={handleChangeXML}
        onMouseLeave={handleChangeXML}
        />

        {/* Buttons */}
        <div className='side-buttons-container'>

            {/* Pen Width IMAGE Buttons */}
            <div>

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

              {/* <img src={TwoPX} alt='2 pixel pen' className='pen-select-button'
                onClick={() => changePenWidth(2)}
                />
              <img src={FivePX} alt='5 pixel pen' className='pen-select-button'
                onClick={() => changePenWidth(5)}
                />
              <img src={TenPX} alt='10 pixel pen' className='pen-select-button'
                onClick={() => changePenWidth(10)}
                /> */}

            </div>

            {/* Circle Color Buttons */}
            <div style={{width: 96}}>

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
            <div style={{width: 96}}>
                <button style={{width: 96}} onClick={undo}>Undo</button>
                <button style={{width: 96}} onClick={clear}>Clear</button>
                <button style={{width: 96}} onClick={handleClickDownload('png')}>Download PNG</button>
                <button style={{width: 96}} onClick={handleClickDownload('jpg')}>Download JPG</button>
                <button style={{width: 96}} onClick={handleClickDownload('svg')}>Download SVG</button>
            </div>

        </div>

    </div>

  );
}

export default Main;