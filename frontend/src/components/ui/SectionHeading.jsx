import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = ({ subtitle, title, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <p className="text-sm uppercase text-[#D4AF37] tracking-widest mb-4 animate-fadeIn">
        {subtitle}
      </p>
      <h2 className="text-4xl text-white font-bold italic tracking-wide animate-slideInUp">
        {title}
      </h2>
    </div>
  );
};

SectionHeading.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SectionHeading;
