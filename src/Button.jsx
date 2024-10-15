// Button.jsx
import React from 'react';

const Button = ({ type, className, onClick, children }) => {
  return (
    <div className="button-container">
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
