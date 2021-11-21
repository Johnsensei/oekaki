import React, { useState } from 'react';

const DownloadButton = ({ alt, onClick, src }) => {
    const [pushed, setPushed] = useState(false);
  
    return (<img 
             src={src}
             alt={alt}
             className={`download-button ${pushed ? "push" : ""}`}
             onClick={() => {
                onClick();
                setPushed(true);
             }}
             onAnimationEnd={() => setPushed(false)}
             />)
  }

  export default DownloadButton;