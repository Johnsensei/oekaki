import React, { useEffect, useCallback, useState} from 'react';
import '../App.css'
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';


import White from '../img/white.png';
import Black from '../img/black.png';
import Green from '../img/green.png';
import Red from '../img/red.png';
import Purple from '../img/purple.png';
import Blue from '../img/blue.png';
import Orange from '../img/orange.png';
import Yellow from '../img/yellow.png';

import WhiteCircle from '../img/white-circle.png';
import BlackCircle from '../img/black-circle.png';
import GreenCircle from '../img/green-circle.png';
import RedCircle from '../img/red-circle.png';
import PurpleCircle from '../img/purple-circle.png';
import BlueCircle from '../img/blue-circle.png';
import OrangeCircle from '../img/orange-circle.png';
import YellowCircle from '../img/yellow-circle.png';

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
  }, [divRef, pressureChange])

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

            {/* Pen Width Buttons */}
            <div >
                <button style={{width: 32}} onClick={() => changePenWidth(2)}>2</button>
                <button style={{width: 32}} onClick={() => changePenWidth(5)}>5</button>
                <button style={{width: 32}} onClick={() => changePenWidth(10)}>10</button>
            </div>

            {/* Image Color Buttons */}
            {/* <div style={{width: 96}}>
                <img src={White} alt='white' className='color-button' onClick={() => changePenColor('#FFFFFF')}/>
                <img src={Black} alt='black' className='color-button' onClick={() => changePenColor('#000000')}/>
                <img src={Green} alt='green' className='color-button' onClick={() => changePenColor('#3FF913')}/>
                <img src={Red} alt='red' className='color-button' onClick={() => changePenColor('#FE2B01')}/>
                <img src={Purple} alt='purple' className='color-button' onClick={() => changePenColor('#F03EFE')}/>
                <img src={Blue} alt='blue' className='color-button' onClick={() => changePenColor('#2A2EFE')}/>
                <img src={Orange} alt='orange' className='color-button' onClick={() => changePenColor('#FF8B00')}/>
                <img src={Yellow} alt='yellow' className='color-button' onClick={() => changePenColor('#FCFC0A')}/> 
            </div> */}

            {/* Circle Color Buttons */}
            <div style={{width: 96}}>
                <img src={BlackCircle} alt='black' className='color-button' onClick={() => changePenColor('#000000')}/>
                <img src={WhiteCircle} alt='white' className='color-button' onClick={() => changePenColor('#FFFFFF')}/>
                <img src={RedCircle} alt='red' className='color-button' onClick={() => changePenColor('#FE2B01')}/>
                <img src={GreenCircle} alt='green' className='color-button' onClick={() => changePenColor('#3FF913')}/>
                <img src={YellowCircle} alt='yellow' className='color-button' onClick={() => changePenColor('#FCFC0A')}/>
                <img src={BlueCircle} alt='blue' className='color-button' onClick={() => changePenColor('#2A2EFE')}/>
                <img src={OrangeCircle} alt='orange' className='color-button' onClick={() => changePenColor('#FF8B00')}/>
                <img src={PurpleCircle} alt='purple' className='color-button' onClick={() => changePenColor('#F03EFE')}/>
            </div>

            {/* Action Buttons */}
            <div style={{width: 96}}>
                <button style={{width: 96}} onClick={undo}>Undo</button>
                <button style={{width: 96}} onClick={clear}>Clear</button>
                <button style={{width: 96}} onClick={handleClickDownload('png')}>Download PNG</button>
                <button style={{width: 96}} onClick={handleClickDownload('jpg')}>Download JPG</button>
                <button style={{width: 96}} onClick={handleClickDownload('svg')}>Download SVG</button>
            </div>

            {/* <div style={{backgroundColor: 'red', width: 439, height: 439}}></div> */}

        </div>

    </div>

  );
}

export default Main;