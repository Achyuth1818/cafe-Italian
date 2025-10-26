import React from 'react';
import PropTypes from 'prop-types';

const DishCard = ({ 
  image, 
  title, 
  price, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-bold">
          €{price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-400 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

DishCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  className: PropTypes.string
};

export default DishCard;
