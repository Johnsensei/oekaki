import React, { useState } from 'react';

const EditButton = ({ alt, onClick, src }) => {
    const [pushed, setPushed] = useState(false);
  
    return (<img 
             src={src}
             alt={alt}
             className={`edit-button ${pushed ? "push" : ""}`}
             onClick={() => {
                onClick();
                setPushed(true);
             }}
             onAnimationEnd={() => setPushed(false)}
             />)
  }

  export default EditButton;