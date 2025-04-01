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
          className="aspect-video rounded-md overflow-hidden shadow-lg"
        >
          <video
            className="w-full h-full object-cover"
            controls
            poster="/assets/images/video-poster.jpg"
          >
            <source src="/assets/videos/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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