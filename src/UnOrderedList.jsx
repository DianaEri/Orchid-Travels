// Component made by Diana to store and display unordered lists.
// This component receives a list of items and renders them as an unordered list (<ul>).
// It also allows the use of custom CSS classes via the className prop for styling.

import React from 'react'; // Import React to create the component

// UnOrderedList component definition, which accepts `items` and `className` as props
const UnOrderedList = ({ items, className }) => {
  return (
    // Render an unordered list (<ul>) with a dynamic className for styling
    <ul className={className}>
      {/* Loop over the array of items and render each one as a list item (<li>) */}
      {items.map((item, index) => (
        // Use the index of the item as the key, as each item should have a unique key
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UnOrderedList; // Export the component for use in other parts of the application
