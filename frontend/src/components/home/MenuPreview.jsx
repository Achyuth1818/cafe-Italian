import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const MenuPreview = () => {
  const menuCategories = [
    {
      title: 'Italian Dishes',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', // Pizza image
      description: 'Authentic Italian cuisine'
    },
    {
      title: 'Pastry',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9', // Tiramisu image
      description: 'Delightful desserts'
    },
    {
      title: 'Coffee',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348', // Coffee art image
      description: 'Artisan coffee selection'
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="EXPLORE MENU" 
          title="Our Menu" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#D4AF37]">
                  {category.title}
                </h3>
                <p className="mb-4 text-white">{category.description}</p>
                <Link to="/menu">
                  <Button variant="secondary">
                    VIEW MENU
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button variant="primary" className="px-8 py-3">
              VIEW FULL MENU
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
