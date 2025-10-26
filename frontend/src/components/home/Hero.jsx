import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
  // Sample background image URL from Unsplash
  const backgroundImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4';

  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Top Info Bar */}
      <div className="absolute top-0 left-0 w-full bg-black/50 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#D4AF37]" />
              <span>2 Bury Old Road, Manchester M8 9JN</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <FaClock className="text-[#D4AF37]" />
              <span>Mon-Sat 11am-11:30pm, Sun 12pm-11pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-[#D4AF37]" />
            <span>0161 795 5502</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center max-w-2xl px-4">
        <p className="text-lg md:text-xl mb-4 text-[#D4AF37] animate-fadeIn">
          Welcome To
        </p>
        <h1 className="text-4xl md:text-6xl font-bold italic mb-6 text-white animate-slideInUp">
          Cafe Italia
        </h1>
        <div className="space-x-4 animate-zoomIn">
          <Link to="/menu">
            <Button variant="primary" className="px-6 py-3 text-lg">
              VIEW MENU
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary" className="px-6 py-3 text-lg">
              BOOK TABLE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
