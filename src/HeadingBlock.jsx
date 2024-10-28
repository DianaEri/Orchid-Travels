// This component, created by (Madelene), displays a styled heading block for the website.
// It allows customization of text, font size, color, alignment, and padding through props.
// The HeadingBlock component is used to create consistent, responsive headers throughout the site.

import React from 'react'; // Import React to create the component

const HeadingBlock = ({ 
  text,                       // The text to display as the heading
  fontSize = '1.3rem',         // Font size of the heading 
  color = 'black',             // Text color 
  textAlign = 'center',        // Text alignment 
  margin = '1rem 0',           // Margin around the heading 
  width = '88%',               // Width of the heading block
  paddingLeft = '1rem',        // Padding on the left
  paddingRight = '1rem',       // Padding on the right 
  paddingTop = '2.5rem'        // Padding on the top 
}) => {
  const style = {
    fontSize: fontSize,        // Apply the font size
    color: color,              // Apply the text color
    textAlign: textAlign,      // Apply the text alignment
    paddingLeft: paddingLeft,  // Apply the left padding
    paddingRight: paddingRight, // Apply the right padding
    paddingTop: paddingTop,    // Apply the top padding
    fontFamily: 'Roboto, sans-serif !important', // Apply the Roboto font family
    width: width,              // Set the width of the heading block
    maxWidth: '75rem',         // Set the maximum width to 75rem 
    boxSizing: 'border-box',   // Include padding in the element's total width and height
    margin: '0 auto'           // Center the block horizontally by setting left and right margins to auto
  };

  return <h1 style={style}>{text}</h1>;  // Render the heading with the applied styles
};

export default HeadingBlock; // Export the component for use in other parts of the project