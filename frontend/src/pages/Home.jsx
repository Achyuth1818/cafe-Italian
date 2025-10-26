import React from 'react';
import Hero from '../components/home/Hero';
import MenuPreview from '../components/home/MenuPreview';
import UnforgettableExperience from '../components/home/UnforgettableExperience';
import Specials from '../components/home/Specials';
import MonthlyHighlights from '../components/home/MonthlyHighlights';
import PrivateDining from '../components/home/PrivateDining';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <MenuPreview />
      <UnforgettableExperience />
      <Specials />
      <MonthlyHighlights />
      <PrivateDining />
      <Testimonials />
      <Gallery />
      <ContactSection />
    </div>
  );
};

export default Home;
