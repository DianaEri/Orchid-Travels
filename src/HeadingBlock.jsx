import React from 'react';
import { Link } from 'react-router-dom';

/*
  Skapar en specifikt stylad textlåda (För "Headings") där innehåll, storlek, färg och 
  andra egenskaper kan anpassas via props för återanvändbarhet. Istället 
  för att TextBlock alltid visar samma text eller samma stil, kan man ändra 
  dessa aspekter genom att skicka in olika props när komponenten används. 
  Koden har anpassats för att uppfylla utseendemålen för "Orchid Travels 
  "applikationen. Texten anpassas beroende på vad som skickas in som prop "text" 
  när komponenten renderas.
*/



const HeadingBlock = ({ 
  text, 
  fontSize = '1.3rem',  
  color = 'black', 
  textAlign = 'center', 
  margin = '1rem 0',
  width = '88%',
  paddingLeft = '1rem',  // Adding default value for paddingLeft
  paddingRight = '1rem',  // Adding default value for paddingRight
  paddingTop = '1rem'
}) => {
  const style = {
    fontSize: fontSize,   
    color: color,        
    textAlign: textAlign,   
    paddingLeft: paddingLeft,  // Now paddingLeft is defined
    paddingRight: paddingRight,  // Now paddingRight is defined
    paddingTop: paddingTop,
    fontFamily: 'Roboto, sans-serif !important',
    width: width,
    maxWidth: '1200px',  
    boxSizing: 'border-box',  
    margin: '0 auto' 
  };

  return <h1 style={style}>{text}</h1>;  
};

export default HeadingBlock;