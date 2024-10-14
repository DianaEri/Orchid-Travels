import React from 'react';

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
  paddingLeft = '2rem',  
  paddingRight = '2rem',
}) => {
  const style = {
    fontSize: fontSize,   
    color: color,        
    textAlign: textAlign,   
    paddingLeft: paddingLeft,  
    paddingRight: paddingRight, 
    fontFamily: 'Roboto, sans-serif !important'
  };

  return <h1 style={style}>{text}</h1>;  
};

export default HeadingBlock;