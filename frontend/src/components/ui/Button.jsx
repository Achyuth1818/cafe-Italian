import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-[#D4AF37] text-black hover:bg-opacity-90',
    secondary: 'border-2 border-[#D4AF37] text-white bg-transparent hover:bg-[#D4AF37] hover:text-black'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
