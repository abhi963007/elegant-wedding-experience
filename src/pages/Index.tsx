import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import AboutSection from '../components/AboutSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WeddingVideoSection from '../components/WeddingVideoSection';
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
      <Helmet>
        <title>Vynora Wedding Company | Premium Wedding Cinematography</title>
        <meta name="description" content="Premium wedding cinematography and video editing that transforms your special moments into cinematic masterpieces." />
      </Helmet>
      <Navbar />
      <VideoHero />
      <AboutSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <WeddingVideoSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
