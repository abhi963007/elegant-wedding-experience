import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../hooks/use-scroll-animation';

const AboutSection = () => {
  const textAnimation = useScrollAnimation(0.2);
  const imageAnimation = useScrollAnimation(0.3);
  
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const singleImageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={textAnimation.ref}
            variants={textVariants}
            initial="hidden"
            animate={textAnimation.controls}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariant} className="text-3xl md:text-4xl font-heading">
              Cinematic Wedding <span className="gold-gradient">Films</span> That Tell Your Story
            </motion.h2>
            
            <motion.div variants={itemVariant} className="w-20 h-1 bg-gold"></motion.div>
            
            <motion.p variants={itemVariant} className="text-lg text-muted-foreground leading-relaxed font-serif italic">
              At Vynora Wedding Company, we believe that your wedding film should be as unique as your love story. Our team of skilled cinematographers and editors work tirelessly to create a cinematic experience that captures the emotions, details, and magic of your special day.
            </motion.p>
            
            <motion.p variants={itemVariant} className="text-lg text-muted-foreground leading-relaxed font-serif italic">
              From tender moments to grand celebrations, we document your wedding day with an artistic eye and technical excellence, crafting a timeless keepsake you'll treasure for generations.
            </motion.p>
            
            <motion.div variants={itemVariant} className="pt-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={imageAnimation.ref}
            variants={imageVariants}
            initial="hidden"
            animate={imageAnimation.controls}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div variants={singleImageVariant} className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="/assets/Images/Works-pic/SBW05732 copy.jpg" 
                  alt="Wedding couple" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div variants={singleImageVariant} className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="/assets/Images/Works-pic/SBW05813 copy.jpg" 
                  alt="Wedding ceremony" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
            <div className="space-y-4 mt-6">
              <motion.div variants={singleImageVariant} className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="/assets/Images/Works-pic/DSC05643 copy.jpg" 
                  alt="Wedding details" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div variants={singleImageVariant} className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="/assets/Images/Works-pic/DSC05780 copy.jpg" 
                  alt="Wedding couple dancing" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
