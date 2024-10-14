import React from 'react';

/*
Skapar en svart linje komponent, centrerar den och stylar den.
*/

const BlackLine = () => {
  const style = {
    width: '90%',
    height: '0.1rem', 
    backgroundColor: 'black', 
    margin: '2rem auto', 
  };

  return <div style={style}></div>;
};

export default BlackLine;