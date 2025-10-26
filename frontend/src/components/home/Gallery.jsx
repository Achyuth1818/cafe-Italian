import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', // Steak
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600', // Restaurant interior
    'https://media.istockphoto.com/id/1480296179/photo/bengali-wedding-ritual-bhat-kapor-of-bride.webp?a=1&b=1&s=612x612&w=0&k=20&c=o4yLHJEB2uofXQtLu6HBH9WELspEw-faN882RPrLD0I=', // Meze platter
    'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600', // Baklava
    'https://images.unsplash.com/photo-1511920170033-f8396924c348', // Coffee
    'https://media.istockphoto.com/id/621849666/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mr9Dh-ogwRIfA9S04DCGUdf1H2OxI2GupLkHXdR_iow=', // Mixed kebab
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Kebab
    'https://images.unsplash.com/photo-1546548970-71785318a17b', // Food plating
    'https://images.unsplash.com/photo-1600271886742-f049cd451bba' // Cocktails
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <SectionHeading 
            subtitle="GALLERY" 
            title="Follow Us" 
            className="mb-0"
          />
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="flex items-center space-x-2">
              <FaInstagram />
              <span>CHECK OUT OUR INSTAGRAM</span>
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                <FaInstagram 
                  className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
