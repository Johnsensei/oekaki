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
    
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '100vh'}}>

        {/* Draw Pad */}
        <div
        ref={divRef}
        style={{
            width: 500,
            height: 500,
            border: '1px solid #eee',
            marginTop: '5vh',
            backgroundColor: '#fff'
        }}
        onTouchEnd={handleChangeXML}
        onMouseLeave={handleChangeXML}
        />

        {/* Buttons */}
        <div style={{ height: 262, marginTop: '5vh', marginLeft: 5}}>

            <div style={{}}>
                <button onClick={() => changePenWidth(2)}>2</button>
                <button onClick={() => changePenWidth(5)}>5</button>
                <button onClick={() => changePenWidth(10)}>10</button>
            </div>

            {/* Image Color Buttons */}
            <div style={{width: 96}}>

                <img src={White} alt='white' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#FFFFFF')}/>
                <img src={Black} alt='black' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#000000')}/>
                <img src={Green} alt='green' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#3FF913')}/>
                <img src={Red} alt='red' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#FE2B01')}/>
                <img src={Purple} alt='purple' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#F03EFE')}/>
                <img src={Blue} alt='blue' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#2A2EFE')}/>
                <img src={Orange} alt='orange' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#FF8B00')}/>
                <img src={Yellow} alt='yellow' style={{width: 48, height: 48, verticalAlign: 'bottom'}} onClick={() => changePenColor('#FCFC0A')}/>
              
            </div>

            <div style={{width: 100}}>
                <button onClick={undo}>Undo</button>
                <button onClick={clear}>Clear</button>
                <button onClick={handleClickDownload('svg')}>Download SVG</button>
                <button onClick={handleClickDownload('png')}>Download PNG</button>
                <button onClick={handleClickDownload('jpg')}>Download JPG</button>
            </div>

        </div>

    </div>

  );
}

export default Main;