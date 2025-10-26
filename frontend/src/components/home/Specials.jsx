import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Specials = () => {
  const specialDishes = [
    {
      title: 'Classic Ribeye Steak',
      image: 'https://www.bing.com/th/id/OIP.JYcOyY7i_9ZUT4cqwsGK_wHaLH?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      fallbackImage: 'https://via.placeholder.com/400x300.png?text=Ribeye+Steak',
      price: 30,
    },
    {
      title: 'Grilled T-Bone',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300.png?text=T-Bone+Steak',
      price: 35,
    },
    {
      title: 'Premium Sirloin',
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=80',
      fallbackImage: 'https://via.placeholder.com/400x300.png?text=Sirloin+Steak',
      price: 28,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState(
    new Array(specialDishes.length).fill(false)
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specialDishes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specialDishes.length) % specialDishes.length);
  };

  const handleImageError = (index) => {
    const newImageErrors = [...imageErrors];
    newImageErrors[index] = true;
    setImageErrors(newImageErrors);
  };

  const getSlideIndex = (offset) => {
    return (currentSlide + offset + specialDishes.length) % specialDishes.length;
  };

  const prevDish = specialDishes[getSlideIndex(-1)];
  const currentDish = specialDishes[currentSlide];
  const nextDish = specialDishes[getSlideIndex(1)];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="OUR MENU" 
          title="Our Specials" 
        />

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center mt-16 min-h-[500px]">
          
          {/* Previous Dish (Left - Small) */}
          <div className="absolute left-0 md:left-20 z-10 opacity-40 scale-75 transition-all duration-500">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <img 
                src={imageErrors[getSlideIndex(-1)] ? prevDish.fallbackImage : prevDish.image}
                alt={prevDish.title} 
                className="w-full h-full object-cover rounded-full shadow-2xl"
                onError={() => handleImageError(getSlideIndex(-1))}
                loading="lazy"
              />
            </div>
          </div>

          {/* Current Dish (Center - Large with Dome) */}
          <div className="relative z-20 transition-all duration-500 carousel-center">
            {/* Dome/Cloche Effect */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Dark circular background */}
              <div className="absolute inset-0 bg-gradient-radial from-gray-900 via-black to-transparent rounded-full blur-xl"></div>
              
              {/* Price Badge */}
              <div className="absolute -top-8 right-1/2 transform translate-x-1/2 bg-[#D4AF37] text-black px-6 py-2 rounded-full text-xl font-bold z-30 badge-pulse">
                €{currentDish.price}
              </div>

              {/* Dish Image with Dome Overlay */}
              <div className="relative z-10">
                <img 
                  src={imageErrors[currentSlide] ? currentDish.fallbackImage : currentDish.image}
                  alt={currentDish.title} 
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-[#D4AF37]/30"
                  onError={() => handleImageError(currentSlide)}
                  loading="lazy"
                />
                
                {/* Dome glass effect overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Dish Title */}
            <div className="text-center mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentDish.title}
              </h3>
            </div>
          </div>

          {/* Next Dish (Right - Small) */}
          <div className="absolute right-0 md:right-20 z-10 opacity-40 scale-75 transition-all duration-500">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <img 
                src={imageErrors[getSlideIndex(1)] ? nextDish.fallbackImage : nextDish.image}
                alt={nextDish.title} 
                className="w-full h-full object-cover rounded-full shadow-2xl"
                onError={() => handleImageError(getSlideIndex(1))}
                loading="lazy"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 md:left-8 z-30 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
            aria-label="Previous special"
          >
            <FaChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-4 md:right-8 z-30 w-12 h-12 flex items-center justify-center rounded-full border-2 border-white/30 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
            aria-label="Next special"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specials;