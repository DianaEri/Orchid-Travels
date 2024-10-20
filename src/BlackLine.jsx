// This component, created by Madelene, displays a black divider to separate 
// different sections of the website. It is a simple horizontal line that helps 
// to visually break up content into  distinct sections. The black line adds 
// structure and clarity to the layout, making it easier for users to follow the flow of 
// information.

// Import React to create the component
import React from 'react';

const BlackLine = () => {
  // Define the inline style for the black line
  const style = {
    width: '90%',              // The line will be 90% of the container's width
    height: '1px',             // Set the height of the line 
    backgroundColor: 'black',  // The line will have a black color
    margin: '1.5rem auto',     // Adds margin above and below the line, and centers it horizontally
  };

  // Return a div that will display the black line with the defined styles
  return <div style={style}></div>;
};

// Export the component so it can be used in other parts of the project
export default BlackLine;
