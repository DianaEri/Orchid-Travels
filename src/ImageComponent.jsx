import React from 'react';

const ImageComponent = ({ src, alt, width = 'auto', height = '20em' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: width, height: height }} 
    />
  );
};

export default ImageComponent;
