import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaInstagram, 
  FaTripadvisor, 
  FaGoogle, 
  FaFacebook 
} from 'react-icons/fa';

const Footer = () => {
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaInstagram, url: '#' },
    { icon: FaTripadvisor, url: '#' },
    { icon: FaGoogle, url: '#' },
    { icon: FaFacebook, url: '#' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
              Cafe Italia
            </h2>
            <p className="text-gray-400 max-w-xs">
              Authentic Italian dining experience in the heart of Manchester
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © 2025 CAFE ITALIA RESTAURANT MANCHESTER. 
            All rights reserved | Powered By InsideOut
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
