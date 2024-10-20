// This component, created by Madelene, displays a yellow line that is meant to be combined 
// with the "HeadingBlock" component. Together, these two components will form a stylish header
// for the website.

import React from 'react'; // Import React to create the component

// Define the YellowLine component
const YellowLine = () => {
  // Create a style object for the yellow line
  const style = {
    width: '90%',             // The line takes up 90% of the width of its container
    height: '0.8rem',         // The line's height is 0.8 rem
    backgroundColor: '#D4A355', // The line is yellowish (#D4A355)
    margin: '1.1rem auto',    // Adds space around the line and centers it
  };

  // Render the div with the yellow line styling
  return <div style={style}></div>;
};

// Export the component to be used in other parts of the project
export default YellowLine;