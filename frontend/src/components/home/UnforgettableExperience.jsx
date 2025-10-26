import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const UnforgettableExperience = () => {
  const experienceCards = [
    {
      title: 'Food',
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b', // Food plating image
      description: 'Exquisite culinary creations that tantalize your taste buds'
    },
    {
      title: 'Drinks',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba', // Colorful cocktails
      description: 'Crafted cocktails and premium beverages'
    },
    {
      title: 'Atmosphere',
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=710', // Restaurant interior
      description: 'Elegant and inviting dining environment'
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Surendra" 
          title="Unforgettable Dining Experience" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceCards.map((card, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg border-4 border-[#FF1493] hover:border-opacity-80 transition-all duration-300"
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnforgettableExperience;
