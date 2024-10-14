import React from 'react';
import Bild from './assets/Bild.jpg';

const Banner = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Banner;
