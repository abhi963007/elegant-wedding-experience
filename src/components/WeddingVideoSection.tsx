import React from 'react';
import { motion } from 'framer-motion';

const WeddingVideoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading mb-6">Our Wedding Masterpiece</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Experience the emotion and beauty of a wedding day through our cinematic storytelling.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-video rounded-md overflow-hidden shadow-lg bg-slate-100"
        >
          {/* Placeholder for the wedding video that will be added later */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4 text-gold opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-muted-foreground">Wedding video will be added here</p>
            </div>
          </div>
          
          {/* Once the video is available, uncomment and update the src attribute 
          <iframe
            className="w-full h-full"
            src=""
            title="Wedding Masterpiece"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          */}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg font-medium">Isabella & Thomas</p>
          <p className="text-muted-foreground">A Beachside Wedding in Malibu</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingVideoSection; 