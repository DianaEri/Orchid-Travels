import React from 'react';

const ImageComponent = ({ src, alt, width = '100%', height = 'auto' }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      style={{ width: width, height: height }} 
    />
  );
};

export default ImageComponent;
