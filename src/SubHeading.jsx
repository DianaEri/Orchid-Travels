// Diana took Madelene's HeadingBlock component, tweaked it,
// and created this SubHeading component to serve as a lower-level heading.

import React from 'react'; // Import React to create the component

// SubHeading component definition, which accepts customizable props for styling
const SubHeading = ({
  text,             // The heading text to be displayed
  fontSize = '1.2rem', // Default font size for the subheading
  color = '#000',      // Default text color (black)
  textAlign = 'left',  // Default text alignment (left-aligned)
  margin = '1rem 0',   // Default margin around the heading
  paddingTop = '10px', // Default padding on the top of the heading
  width = '88%'        // Default width of the heading text
}) => {
  
  // Define a style object to apply inline styles to the <h2> element
  const style = {
    fontSize: fontSize,         // Set the font size based on the passed or default value
    color: color,               // Set the text color
    textAlign: textAlign,       // Set the text alignment
    paddingTop: paddingTop,     // Set padding at the top
    margin: margin,             // Set the margin around the heading
    fontFamily: 'Roboto, sans-serif', // Set the font family to Roboto (sans-serif fallback)
    width: width,               // Set the width of the heading
    maxWidth: '1200px',         // Limit the maximum width of the heading to 1200px
    boxSizing: 'border-box',    // Ensure padding and border are included in the element's total width and height
    margin: '0 auto'            // Center the heading by setting automatic horizontal margins
  };

  // Return the <h2> element with the provided text and applied styles
  return <h2 style={style}>{text}</h2>;
};

export default SubHeading; // Export the component for use in other parts of the application
