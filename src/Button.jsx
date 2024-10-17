// Button component made by Diana.
// This component is a reusable button element that can be customized with props.
// It accepts the following props:
// - `type`: The button type (e.g., "button", "submit").
// - `className`: Custom class name(s) to apply CSS styles.
// - `onClick`: The function to be called when the button is clicked.
// - `children`: The content inside the button (e.g., text or icons).

import React from 'react'; // Import React for creating components

// Button component definition
const Button = ({ type, className, onClick, children }) => {
  return (
    <div className="button-container"> {/* Container for styling purposes */}
      <button type={type} className={className} onClick={onClick}> {/* Button element */}
        {children} {/* Render the content inside the button (text, icons, etc.) */}
      </button>
    </div>
  );
};

export default Button; // Export the Button component for use in other parts of the application

