import React from 'react';

const SubHeading = ({
  text,
  fontSize = '1.1rem',        
  textAlign = 'center',   
  margin = '1rem 0'       
}) => {
  const style = {
    fontSize: fontSize,
    color: color,
    textAlign: textAlign,
    margin: margin,
    fontFamily: 'Roboto, sans-serif',  // Default font family
  };

  return <h2 style={style}>{text}</h2>;
};

export default SubHeading;