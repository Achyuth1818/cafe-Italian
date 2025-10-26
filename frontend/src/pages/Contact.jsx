import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your reservation request!');
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      info: '0161 795 5502'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      info: '2 Bury Old Road, Manchester M8 9JN'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'reservations@cafeitalia.com'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="GET IN TOUCH" 
            title="Contact Us" 
          />
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl text-[#D4AF37] mb-6">Make a Reservation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
                <input
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <textarea
                name="message"
                placeholder="Additional Notes (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-[#1a1a1a] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full py-3"
              >
                SUBMIT RESERVATION
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl text-[#D4AF37] mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 bg-[#1a1a1a] p-4 rounded-lg"
                >
                  <contact.icon className="text-[#D4AF37] text-3xl" />
                  <div>
                    <h4 className="text-lg font-semibold">{contact.title}</h4>
                    <p className="text-gray-300">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps Embed (Placeholder) */}
            <div className="mt-8 bg-[#1a1a1a] p-4 rounded-lg">
              <h3 className="text-2xl text-[#D4AF37] mb-4">Our Location</h3>
              <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-gray-400">
                Google Maps Embed Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
