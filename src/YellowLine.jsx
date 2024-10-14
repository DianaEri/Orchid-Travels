import React from 'react';

/*Skapar en gul linjekomponent, centrerar och stylar den. Koden har anpassats 
för att uppfylla utseendemålen för applikationen.*/

const YellowLine = () => {
  const style = {
    width: '90%',
    height: '0.8rem', 
    backgroundColor: '#D4A355',
    margin: '1.1rem auto', 
  };

  return <div style={style}></div>;
};

export default YellowLine;