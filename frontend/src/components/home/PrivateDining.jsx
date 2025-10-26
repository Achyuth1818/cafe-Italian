import React from 'react';
import Button from '../ui/Button';

const PrivateDining = () => {
  // Background image of restaurant interior
  const backgroundImage = 'https://www.bing.com/th/id/OIP.v19FddUzP0d0HPCJ-8ofDAHaE8?w=218&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2';

  return (
    <section 
      className="relative bg-cover bg-center py-24"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white md:pr-12">
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-4">
              BOOKING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold italic mb-6">
              Private & Group Dining
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At Cafe Italia, we specialize in creating unforgettable dining experiences for 
              private events and group gatherings. Whether you're planning an intimate celebration, 
              a corporate event, or a special occasion, our dedicated team is committed to making 
              your event truly exceptional.
            </p>
            <div className="space-x-4">
              <Button variant="primary" className="px-6 py-3">
                BOOK NOW
              </Button>
              <Button variant="secondary" className="px-6 py-3">
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Spacer for mobile */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default PrivateDining;
