import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import AboutSection from '../components/AboutSection';
import FeaturedWorkSection from '../components/FeaturedWorkSection';
import WeddingVideoSection from '../components/WeddingVideoSection';
import Footer from '../components/Footer';
import { useScrollAnimation, fadeInUp, fadeIn, slideInLeft, slideInRight } from '../hooks/use-scroll-animation';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutAnimation = useScrollAnimation(0.2);
  const featuredWorkAnimation = useScrollAnimation(0.2);
  const weddingVideoAnimation = useScrollAnimation(0.2);

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
      
      <motion.div
        ref={aboutAnimation.ref}
        initial="hidden"
        animate={aboutAnimation.controls}
        variants={fadeInUp}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div
        ref={featuredWorkAnimation.ref}
        initial="hidden"
        animate={featuredWorkAnimation.controls}
        variants={slideInRight}
      >
        <FeaturedWorkSection />
      </motion.div>

      <motion.div
        ref={weddingVideoAnimation.ref}
        initial="hidden"
        animate={weddingVideoAnimation.controls}
        variants={slideInLeft}
      >
        <WeddingVideoSection />
      </motion.div>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
