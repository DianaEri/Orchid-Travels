// This is a component made by Diana to display a banner.
// The banner image was styled and designed in Figma.
// The component serves as a shortcut for displaying the image
// instead of using CSS overlays or complex styles.
// This component is only used on the start page.

import React from 'react'; // Import React
import Bild from './assets/Bild.jpg'; // Import the banner image file

// Banner component that displays a full-width image
const Banner = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Render the banner image with full width and automatic height adjustment */}
      <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Banner;

