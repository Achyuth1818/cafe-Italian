import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const About = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1578474846511-04a1349a3efa';

  const storyImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', // Restaurant interior
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', // Chef with food
    'https://media.istockphoto.com/id/624065320/photo/business-man-hand-shake.webp?a=1&b=1&s=612x612&w=0&k=20&c=mGlSYTVd_YevZGPcKGn-5xPZ6jKOTC4Fed7phEFVCkw=',
    'https://media.istockphoto.com/id/2239718934/photo/businesswoman-enjoying-a-meal-at-a-modern-self-serving-restaurant-while-checking-her-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=qoCwBc8s8CzWSiuASggClRYuZFypfd4W1NbjU_Pk8h0=' // Team photo
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-3xl px-4">
          <SectionHeading 
            subtitle="OUR STORY" 
            title="About Cafe Italia" 
          />
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Welcome to Cafe Italia, where passion meets culinary artistry in the heart of Manchester. 
            Founded in 2020, our restaurant is a celebration of authentic Italian cuisine, 
            blending traditional recipes with modern innovation.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-[#D4AF37] mb-6">Our Journey</h2>
            <p className="text-gray-300 mb-4">
              At Cafe Italia, we believe in more than just serving food. We create experiences 
              that transport you to the vibrant streets of Italy. Our chefs, trained in 
              traditional Italian culinary techniques, craft each dish with love and precision.
            </p>
            <p className="text-gray-300 mb-8">
              From our hand-rolled pasta to our carefully curated wine list, every element 
              is chosen to provide an authentic and memorable dining experience.
            </p>
            <Button variant="primary" className="px-6 py-3">
              BOOK A TABLE
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {storyImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg"
              >
                <img 
                  src={image} 
                  alt={`Story image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="OUR COMMITMENT" 
            title="Our Values" 
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We source the finest ingredients, ensuring every dish meets our high standards.'
              },
              {
                title: 'Authenticity',
                description: 'Our recipes are true to traditional Italian cooking methods.'
              },
              {
                title: 'Hospitality',
                description: 'We treat every guest like family, creating a warm and welcoming atmosphere.'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="text-center bg-black p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors"
              >
                <h3 className="text-2xl text-[#D4AF37] mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
