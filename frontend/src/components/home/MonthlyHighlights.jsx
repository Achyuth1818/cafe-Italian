import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import DishCard from '../ui/DishCard';

const MonthlyHighlights = () => {
  const highlightedDishes = [
    {
      title: 'Adana Kebab',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Kebab image
      price: 120,
      description: 'Traditional Turkish grilled meat skewer'
    },
    {
      title: 'Meze Platter',
      image: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600', // Meze platter image
      price: 120,
      description: 'Assorted Mediterranean appetizers'
    },
    {
      title: 'Baklava',
      image: 'https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600', // Baklava image
      price: 30,
      description: 'Classic sweet pastry with nuts and honey'
    },
    {
      title: 'Kebab Platter',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600', // Mixed kebab platter image
      price: 120,
      description: 'Variety of grilled meats and accompaniments'
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="OUR TOP PICKS THIS MONTH" 
          title="Monthly Highlights" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightedDishes.map((dish, index) => (
            <div 
              key={index} 
              className="animate-slideInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <DishCard 
                image={dish.image}
                title={dish.title}
                price={dish.price}
                description={dish.description}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyHighlights;
