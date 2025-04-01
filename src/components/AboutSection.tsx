import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading">Cinematic Wedding <span className="gold-gradient">Films</span> That Tell Your Story</h2>
            <div className="w-20 h-1 bg-gold"></div>
            <p className="text-lg text-muted-foreground leading-relaxed font-serif italic">
              At Vynora Wedding Company, we believe that your wedding film should be as unique as your love story. Our team of skilled cinematographers and editors work tirelessly to create a cinematic experience that captures the emotions, details, and magic of your special day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-serif italic">
              From tender moments to grand celebrations, we document your wedding day with an artistic eye and technical excellence, crafting a timeless keepsake you'll treasure for generations.
            </p>
            <div className="pt-6">
              <a 
                href="/portfolio" 
                className="inline-flex items-center group transition-all duration-300 font-medium text-gold hover:text-gold-dark"
              >
                View Our Work
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Wedding couple" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Wedding ceremony" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Wedding details" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-md shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Wedding couple dancing" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
