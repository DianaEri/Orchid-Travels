import React from 'react';

/*
  Skapar en svart linje komponent, centrerar den och stylar den med height i px.
*/

const BlackLine = () => {
  const style = {
    width: '90%',
    height: '1px',  // Use px for more consistent line thickness
    backgroundColor: 'black',
    margin: '1.5rem auto',
  };

  return <div style={style}></div>;
};

export default BlackLine;