import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import DishCard from '../components/ui/DishCard';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Italian Dishes');

  const menuCategories = [
    'Italian Dishes',
    'Pastry',
    'Coffee'
  ];

  const menuItems = {
    'Italian Dishes': [
      {
        title: 'Pasta Carbonara',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9',
        price: 18,
        description: 'Classic Roman pasta with pancetta and pecorino cheese'
      },
      {
        title: 'Margherita Pizza',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        price: 15,
        description: 'Traditional pizza with tomato, mozzarella, and basil'
      },
      {
        title: 'Risotto Milanese',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        price: 22,
        description: 'Creamy saffron risotto with parmesan'
      }
    ],
    'Pastry': [
      {
        title: 'Tiramisu',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9',
        price: 8,
        description: 'Classic Italian coffee-flavored dessert'
      },
      {
        title: 'Cannoli',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
        price: 6,
        description: 'Sicilian pastry tubes filled with sweet ricotta'
      },
      {
        title: 'Croissant',
        image: 'https://images.unsplash.com/photo-1595475207225-428b62bda831',
        price: 4,
        description: 'Buttery, flaky French-style pastry'
      }
    ],
    'Coffee': [
      {
        title: 'Espresso',
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
        price: 3,
        description: 'Intense, concentrated Italian coffee'
      },
      {
        title: 'Cappuccino',
        image: 'https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
        price: 4,
        description: 'Espresso with steamed milk and foam'
      },
      {
        title: 'Latte',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
        price: 5,
        description: 'Smooth espresso with generous milk'
      }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="EXPLORE OUR" 
          title="Menu" 
        />

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-lg transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-[#D4AF37] text-black' 
                  : 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((dish, index) => (
            <DishCard
              key={index}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              className="hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
