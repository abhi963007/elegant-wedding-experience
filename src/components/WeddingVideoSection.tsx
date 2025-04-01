import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const WeddingVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

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
          className="aspect-video rounded-md overflow-hidden shadow-xl relative group"
        >
          {!hasStarted && (
            <div 
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 cursor-pointer"
              onClick={handlePlay}
            >
              <div className="w-20 h-20 rounded-full bg-gold/80 flex items-center justify-center mb-4 transition-transform duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium tracking-wider uppercase">Play Video</span>
            </div>
          )}
          
          <ReactPlayer
            url="/assets/videos/videoplayback.mp4"
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={hasStarted}
            onPlay={handlePlay}
            onPause={handlePause}
            light={!hasStarted ? "/assets/images/video-poster.jpg" : false}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  disablePictureInPicture: true,
                }
              }
            }}
            style={{ 
              borderRadius: '0.375rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            progressInterval={1000}
            className="react-player"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg font-medium font-heading">Isabella & Thomas</p>
          <p className="text-muted-foreground">A Beachside Wedding in Malibu</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingVideoSection; 