import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      label: 'BOOKING REQUEST',
      info: '0161 795 5502'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'LOCATION',
      info: '2 Bury Old Road, Manchester M8 9JN'
    },
    {
      icon: FaClock,
      label: 'OPENING HOURS',
      info: 'Monday to Saturday 11:00am - 11:30pm, Sunday 12:00pm - 11:00pm'
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="CONNECT WITH US" 
          title="Contact Us" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] rounded-lg p-6 text-center hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <contact.icon 
                  className="text-[#D4AF37] text-4xl" 
                />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-300">
                {contact.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
