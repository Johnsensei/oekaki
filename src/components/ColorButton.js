import React, { useState} from 'react';

const ColorButton = ({ alt, onClick, src }) => {
    const [pushed, setPushed] = useState(false);
  
    return (<img 
             src={src}
             alt={alt}
             className={`color-button ${pushed ? "push" : ""}`}
             onClick={() => {
                onClick();
                setPushed(true);
             }}
             onAnimationEnd={() => setPushed(false)}
             />)
  }

  export default ColorButton;