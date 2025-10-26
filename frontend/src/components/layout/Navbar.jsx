import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50">
      {/* Top Info Bar - Hidden on Mobile */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#1a1a1a] text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-[#D4AF37]" />
            <span>2 Bury Old Road, Manchester M8 9JN</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-[#D4AF37]" />
            <span>Mon-Sat 11am-11:30pm, Sun 12pm-11pm</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-[#D4AF37]" />
          <span>0161 795 5502</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#D4AF37]">
          Cafe Italia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary">BOOK TABLE</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black">
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" onClick={toggleMenu}>BOOK TABLE</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
