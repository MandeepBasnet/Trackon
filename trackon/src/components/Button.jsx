import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  iconTrailing, 
  iconLeading, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`btn btn-${variant.toLowerCase().replace(' ', '-')} btn-${size.toLowerCase()} ${className}`} 
      {...props}
    >
      {iconLeading && <span className="btn-icon">{iconLeading}</span>}
      <span className="btn-text">{children}</span>
      {iconTrailing && <span className="btn-icon">{iconTrailing}</span>}
    </button>
  );
};

export default Button;
