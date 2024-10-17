import React from 'react';

const SubHeading = ({
  text,
  fontSize = '1.2rem',     
  color = '#000',     
  textAlign = 'left',  
  margin = '1rem 0',
  paddingTop = '10px',
  width = '88%'  
}) => {
  const style = {
    fontSize: fontSize,
    color: color,      
    textAlign: textAlign,
    paddingTop: paddingTop,
    margin: margin,
    fontFamily: 'Roboto, sans-serif', 
    width: width,
    maxWidth: '1200px',  
    boxSizing: 'border-box',  
    margin: '0 auto' 
  };

  return <h2 style={style}>{text}</h2>;
};

export default SubHeading;
