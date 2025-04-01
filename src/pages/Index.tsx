
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import AboutSection from '../components/AboutSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <VideoHero />
      <AboutSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
