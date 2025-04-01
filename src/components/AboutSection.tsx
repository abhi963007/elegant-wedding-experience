
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Our <span className="gold-gradient">Story</span></h2>
          <div className="h-0.5 w-20 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                alt="Vynora team filming a wedding" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/20 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading mb-6">Passionate about <span className="gold-gradient">Preserving Memories</span></h3>
            <p className="text-muted-foreground mb-6">
              At Vynora, we believe that every moment deserves to be captured with artistry and emotion. Founded in 2015, our team of passionate cinematographers and editors has been dedicated to transforming ordinary footage into extraordinary memories.
            </p>
            <p className="text-muted-foreground mb-6">
              We specialize in capturing the essence of your special day, from the nervous anticipation to the joyful celebration, creating a timeless keepsake that you'll treasure for generations.
            </p>
            <p className="text-muted-foreground">
              With our meticulous attention to detail and cinematic approach, we craft videos that don't just document events but tell compelling stories that resonate with emotion and authenticity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
