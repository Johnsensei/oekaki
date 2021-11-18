import React, { useEffect, useCallback, useState} from 'react';
import '../App.css'
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
// May still use the CustomPicker instead of the GithubPicker.
import { GithubPicker, CustomPicker } from 'react-color';

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
    
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '100vh', backgroundColor: 'blue'}}>

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

            <div style={{}}>
                <GithubPicker
                    width={'50px'}
                    triangle={'hide'}
                    colors={[
                            '#FFFFFF', '#000000',
                            '#3FF913', '#FE2B01',
                            '#F03EFE', '#2A2EFE',
                            '#FF8B00', '#FCFC0A'
                            ]}
                    onChangeComplete={(color) => changePenColor(color.hex)}
                    // styles={{border: 500, backgroundColor: 'black'}}
                />
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