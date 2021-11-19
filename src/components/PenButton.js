import React, { useState } from 'react';

const PenButton = ({ alt, onClick, src }) => {
    const [pushed, setPushed] = useState(false);
  
    return (<img 
             src={src}
             alt={alt}
             className={`pen-select-button ${pushed ? "push" : ""}`}
             onClick={() => {
                onClick();
                setPushed(true);
             }}
             onAnimationEnd={() => setPushed(false)}
             />)
  }

  export default PenButton;