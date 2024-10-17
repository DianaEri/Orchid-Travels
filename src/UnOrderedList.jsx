import React from 'react';

const UnOrderedList = ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default UnOrderedList;