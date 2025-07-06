import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useContent } from '@/context/ContentContext';
import { Skeleton } from '@/components/ui/skeleton';

// Fallback data in case Firebase data is not available
const fallbackHeroContent = {
  id: "hero",
  videoUrl: "/assets/videos/backgorund-video.mp4",
  title: "Capturing Moments",
  subtitle: "Crafting Memories",
  description: "Premium wedding cinematography and video editing that transforms your special moments into cinematic masterpieces.",
  ctaText: "Book a Consultation",
  ctaLink: "/contact"
};

const VideoHero = () => {
  const { content, loading } = useContent();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use content from Firebase if available, otherwise use fallback data
  const heroContent = content.hero || fallbackHeroContent;

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

  if (loading) {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-black/90">
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-16 w-64 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-16 w-80 mx-auto mb-8 bg-gray-800" />
            <Skeleton className="h-24 w-full max-w-2xl mx-auto mb-8 bg-gray-800" />
            <Skeleton className="h-12 w-48 mx-auto rounded-full bg-gray-800" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-dark/70 z-10"></div>
      
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroContent.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute / Unmute Button */}
      <button
        onClick={() => {
          const video = videoRef.current;
          if (video) {
            video.muted = !isMuted;
            setIsMuted(!isMuted);
          }
        }}
        className="absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-colors"
        aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
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
            <span className="gold-gradient font-montague">{heroContent.title}</span>
            <br />
            <span className="tracking-wider font-montague">{heroContent.subtitle}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto font-melikan tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroContent.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to={heroContent.ctaLink} 
              className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-heading font-medium tracking-wider inline-block shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
            >
              {heroContent.ctaText}
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
