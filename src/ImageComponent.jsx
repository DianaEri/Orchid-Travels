// Image component made by Diana.
// This component serves as a container for images across the application, ensuring that all images 
// follow a consistent style in terms of width and height for uniformity in the UI.

import React from 'react'; // Import React to create the component

// Functional ImageComponent that accepts `src` (source), `alt` (alternative text), 
// and optional `width` and `height` props (with default values for width and height).
const ImageComponent = ({ src, alt, width = '100%', height = 'auto' }) => {
  return (
    // Render an img element with the passed src, alt, and inline styles for width and height
    <img 
      src={src}  // Image source passed as a prop
      alt={alt}  // Alternative text for accessibility and SEO purposes
      style={{ width: width, height: height }}  // Style to control the image's width and height
    />
  );
};

export default ImageComponent; // Export the component for use throughout the application

