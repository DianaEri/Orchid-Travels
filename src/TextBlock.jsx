// This component, created by Madelene, displays a block of text with customizable styles.
// It allows you to adjust the font size, color, text alignment, padding, and width through 
// props. The goal is to have consistent styling for the "body text" sections of the website, 
// and this component helps achieve that.

import React from 'react'; // Import React to create the component

const TextBlock = ({ 
  text,                    // Text to display
  fontSize = '1.1rem',      // Font size
  color = 'black',          // Text color
  textAlign = 'left',       // Text alignment
  paddingLeft = '2rem',     // Left padding
  paddingRight = '2rem',    // Right padding
  paddingBottom = '0rem',   // Bottom padding
  width = '100%'            // Width of the block
}) => {
  const style = {
    fontSize,               // Apply font size
    color,                  // Apply color
    textAlign,              // Apply text alignment
    paddingLeft,            // Apply left padding
    paddingRight,           // Apply right padding
    paddingBottom,          // Apply bottom padding
    fontFamily: 'Roboto, sans-serif !important', // Font family
    width,                  // Apply width
    boxSizing: 'border-box'  // Include padding in width/height calculation
  };

  return <p style={style}>{text}</p>; // Render the text with styles
};

export default TextBlock;  // Export the component