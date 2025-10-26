import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ 
  name, 
  date, 
  rating, 
  review, 
  avatar,
  className = '' 
}) => {
  return (
    <div className={`bg-[#1a1a1a] rounded-lg p-6 text-white shadow-lg ${className}`}>
      <div className="flex items-center mb-4">
        {avatar && (
          <img 
            src={avatar} 
            alt={name} 
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
      <div className="flex text-[#D4AF37] mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            color={index < rating ? '#D4AF37' : '#444'} 
          />
        ))}
      </div>
      <p className="text-gray-300 italic">"{review}"</p>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string
};

export default TestimonialCard;
