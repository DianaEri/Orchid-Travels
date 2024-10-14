// Button.jsx
import React from 'react';

const Button = ({ type, className, children }) => {
  return (
    <div className="button-container">
      <button type={type} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;
