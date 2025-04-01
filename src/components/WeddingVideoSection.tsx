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

  const handleClick = () => {
    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
    }
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
          className="aspect-video rounded-md overflow-hidden shadow-xl relative group max-w-4xl mx-auto"
        >
          <div className="relative w-full h-full">
            {!hasStarted && (
              <div 
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                onClick={handleClick}
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="z-20 w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
              </div>
            )}
            
            <ReactPlayer
              url="https://www.youtube.com/watch?v=N9zcvKqraxQ"
              width="100%"
              height="100%"
              playing={isPlaying}
              controls={hasStarted}
              onPlay={handlePlay}
              onPause={handlePause}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                  }
                }
              }}
              style={{ 
                borderRadius: '0.375rem',
                display: hasStarted ? 'block' : 'none'
              }}
              className="react-player"
            />
          </div>
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