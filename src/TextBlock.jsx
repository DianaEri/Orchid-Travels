import React from 'react';

/*
  Skapar en specifikt stylad textlåda där innehåll, storlek, färg och 
  andra egenskaper kan anpassas via props för återanvändbarhet. Istället 
  för att TextBlock alltid visar samma text eller samma stil, kan man ändra 
  dessa aspekter genom att skicka in olika props när komponenten används. 
  Koden har anpassats för att uppfylla utseendemålen för "Orchid Travels 
  "applikationen. Texten anpassas beroende på vad som skickas in som prop "text" 
  när komponenten renderas.
*/

const TextBlock = ({ 
  text, 
  fontSize = '1.1rem', 
  color = 'black', 
  textAlign = 'left', 
  paddingLeft = '2rem',  
  paddingRight = '2rem',
  paddingBottom = '1rem',
  width = '99%'
}) => {
  const style = {
    fontSize: fontSize,   
    color: color,        
    textAlign: textAlign,   
    paddingLeft: paddingLeft,  
    paddingRight: paddingRight, 
    paddingBottom: paddingBottom, 
    fontFamily: 'Roboto, sans-serif !important',
    width: width,
    boxSizing: 'border-box'  
  };

  return <p style={style}>{text}</p>; 
};

export default TextBlock;