import React from 'react';
import Bild from './assets/Bild.jpg';

//Picture styled and made in Figma, shortcut instead of 
//doing CSS overlays on image. This component only figures in startpage.

const Banner = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Banner;
