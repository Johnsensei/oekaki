import React, { useEffect, useRef, Fragment, useCallback, useState} from 'react';
import { render } from 'react-dom';
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { GithubPicker, CustomPicker } from 'react-color';

const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

const getRandomColor = () =>
  `#${Array.from({ length: 3 }, () =>
    String(getRandomInt(255).toString(16)).padStart(2, '0')
  ).join('')}`


function Main() {

  const [
    divRef,
    {
      instance,
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
  const [xml, setXml] = useState('')
  const [penMode, setPenMode] = useState('normal')
  const [penWidth, setPenWidth] = useState(2)
  const [penThinnerWidth, setPenThinnerWidth] = useState(0)

  const handleColor = useCallback(() => {
    changePenColor(getRandomColor())
  }, [changePenColor])

  const handlePenWidth = useCallback(
    (e) => {
      setPenWidth(Number(e.target.value))
      changePenWidth(Number(e.target.value))
    },
    [changePenWidth]
  )
  const handleChangeXML = useCallback(() => {
    setXml(getSvgXML())
  }, [getSvgXML])
  const handleChangeMode = useCallback(
    (e) => {
      setPenMode(e.target.value)
    },
    []
  )
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

  useEffect(() => {
    if (penMode === 'normal') return

    const stopId = setInterval(() => {
      if (penMode === 'rainbow') {
        changePenColor(getRandomColor())
      }
      if (penMode === 'random') {
        changePenWidth(getRandomInt(50) + 5)
      }
      if (penMode === 'thinner') {
        changePenWidth(penThinnerWidth)
      }
    }, (instance && instance.delay) || 20)
    return () => clearInterval(stopId)
  }, [penMode, changePenWidth, changePenColor, instance, penThinnerWidth])

  // Pressure -> https://github.com/stuyam/pressure
  useEffect(() => {
    if (!divRef.current) return
    Pressure.set(divRef.current, {
      change: pressureChange
    })
  }, [divRef, pressureChange])

  return (
    <Fragment>

        <div style={{display: 'flex', alignItems: 'center', height: '100vh', backgroundColor: 'blue'}}>

            {/* Draw Pad */}
            <div
            ref={divRef}
            style={{
                width: 500,
                height: 500,
                border: '1px solid #eee',
                margin: 'auto',
                backgroundColor: '#fff'
            }}
            onTouchEnd={handleChangeXML}
            onMouseLeave={handleChangeXML}
            />

            {/* Buttons */}
            <div style={{margin: 'auto', backgroundColor: 'red'}}>
                <button onClick={() => changePenWidth(2)}>2</button>
                <button onClick={() => changePenWidth(5)}>5</button>
                <button onClick={() => changePenWidth(10)}>10</button>

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
                />

                <div style={{width: 100}}>
                    <button onClick={undo}>Undo</button>
                    <button onClick={clear}>Clear</button>
                    <button onClick={handleClickDownload('svg')}>Download SVG</button>
                    <button onClick={handleClickDownload('png')}>Download PNG</button>
                    <button onClick={handleClickDownload('jpg')}>Download JPG</button>
                </div>

            </div>

        </div>

    </Fragment>
  );
}

export default Main;