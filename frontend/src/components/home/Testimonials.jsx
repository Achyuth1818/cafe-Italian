import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anna Mathew',
      date: 'June 15, 2025',
      rating: 5,
      review: 'Beautifully plated and extraordinarily fresh ingredients. Every bite was a delightful experience!',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Darrin Tom',
      date: 'May 22, 2025',
      rating: 5,
      review: 'We booked special dining for our anniversary, and it was absolutely magical. The service was impeccable!',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Mary Elsa',
      date: 'April 10, 2025',
      rating: 5,
      review: 'Best steak I\'ve ever had. The atmosphere, the food, the wine - everything was perfect!',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="REVIEWS" 
          title="Hear Our Guests" 
        />

        <div className="relative flex items-center justify-center">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 md:left-10 z-10 text-white hover:text-[#D4AF37] transition-colors"
          >
            <FaChevronLeft size={40} />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 md:right-10 z-10 text-white hover:text-[#D4AF37] transition-colors"
          >
            <FaChevronRight size={40} />
          </button>

          {/* Carousel Container */}
          <div className="w-full max-w-4xl relative overflow-hidden h-96">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  absolute w-full transition-all duration-500 ease-in-out
                  ${index === currentSlide 
                    ? 'opacity-100 translate-x-0 z-20' 
                    : 'opacity-0 translate-x-full z-10'
                  }
                `}
              >
                <div className="flex justify-center">
                  <TestimonialCard 
                    name={testimonial.name}
                    date={testimonial.date}
                    rating={testimonial.rating}
                    review={testimonial.review}
                    avatar={testimonial.avatar}
                    className="w-full max-w-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
