import React, { useEffect, useRef, Fragment, useCallback, useState} from 'react';
import { render } from 'react-dom';
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';

const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

const getRandomColor = () =>
  `#${Array.from({ length: 3 }, () =>
    String(getRandomInt(255).toString(16)).padStart(2, '0')
  ).join('')}`


function App() {

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
    penWidth: 3,
    penColor: '#000'
  })
  const [xml, setXml] = useState('')
  const [penMode, setPenMode] = useState('normal')
  const [penWidth, setPenWidth] = useState(5)
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
      if (penMode == 'thinner') {
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

      {/* Pen Options
        TODO: Remove rainbow and random width options.
        Just have three selectable sizes: 2, 5, 10.
      */}
      <fieldset>

        <label>
          <input
            type="checkbox"
            checked={penMode === 'normal'}
            value="normal"
            onChange={handleChangeMode}
          />
          Normal pen.
        </label>

        <label>
          <input
            type="checkbox"
            checked={penMode === 'thinner'}
            value="thinner"
            onChange={handleChangeMode}
          />
          Pen becoming thinner.
        </label>
        <label>
          <input
            type="checkbox"
            checked={penMode === 'random'}
            value="random"
            onChange={handleChangeMode}
          />
          Pen becoming Random Width.
        </label>
        <label>
          <input
            type="checkbox"
            checked={penMode === 'rainbow'}
            value="rainbow"
            onChange={handleChangeMode}
          />
          Rainbow pen.
        </label>
        {['normal', 'rainbow'].includes(penMode) && (
          <div>
            pen width
            <input
              type="range"
              value={penWidth}
              min={1}
              max={50}
              onChange={handlePenWidth}
            />
          </div>
        )}
        {penMode !== 'rainbow' && (
          <button onClick={handleColor}>Change Color</button>
        )}
      </fieldset>

      {/* <div
TODO: Can most likely remove this div altogether.
Keeping for now in case we use as some sort of container.
        style={{
          display: 'flex',
          justifyContent: 'flexWrap'
        }}
      > */}

        {/* Draw Pad
        TODO: Move to own component.
        Will be difficult given how the functions are all grouped together.
        */}
        <div>
          <div
            ref={divRef}
            style={{
              // TODO: Make the width and height responsive, not hard coded.
              width: 500,
              height: 500,
              border: '1px solid #eee',
              margin: 'auto'
            }}
            onTouchEnd={handleChangeXML}
            onMouseLeave={handleChangeXML}
          />

          {/* Control Buttons
            Move to preferred area of the screen.
            TODO: Can be moved to own component.
          */}
          <button onClick={undo}>Undo</button>
          <button onClick={clear}>Clear</button>
          <button onClick={handleClickDownload('svg')}>Download SVG</button>
          <button onClick={handleClickDownload('png')}>Download PNG</button>
          <button onClick={handleClickDownload('jpg')}>Download JPG</button>
          <button onClick={() => changePenWidth(2)}>2</button>
          <button onClick={() => changePenWidth(5)}>5</button>
          <button onClick={() => changePenWidth(10)}>10</button>

        </div>

        {/* <div
          style={{
            fontSize: '8px'
          }}
        >
          {xml}
TODO: Can we remove variables and functions associated with this?
Or will that break the ability to save SVG?
        </div> */}

      {/* </div> */}

    </Fragment>
  );
}

export default App;