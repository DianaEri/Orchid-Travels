import React from 'react';

const SubHeading = ({
  text,
  fontSize = '1.1rem',     
  color = '#000',     
  textAlign = 'left',  
  margin = '1rem 2rem'      
}) => {
  const style = {
    fontSize: fontSize,
    color: color,      
    textAlign: textAlign,
    margin: margin,
    fontFamily: 'Roboto, sans-serif',  
  };

  return <h2 style={style}>{text}</h2>;
};

export default SubHeading;
