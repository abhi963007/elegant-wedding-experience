import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VideoHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        if (video.readyState >= 2) {
          setIsVideoLoaded(true);
        }
      });
      
      // For browsers that don't trigger loadeddata
      if (video.readyState >= 2) {
        setIsVideoLoaded(true);
      }
    }
    
    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-dark/70 z-10"></div>
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/backgorund-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gold-gradient">Capturing Moments</span>
            <br />
            <span className="tracking-wider">Crafting Memories</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto font-heading tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium wedding cinematography and video editing that transforms your special moments into cinematic masterpieces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/contact" 
              className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-heading font-medium tracking-wider inline-block shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-xs mb-2 tracking-widest">SCROLL</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
