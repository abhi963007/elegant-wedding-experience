
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const featuredWorks = [
  {
    id: 1,
    title: "Sarah & Michael's Elegant Garden Wedding",
    category: "Wedding Film",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    videoId: "example1"
  },
  {
    id: 2,
    title: "Emma & John's Beach Ceremony",
    category: "Wedding Film",
    thumbnail: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    videoId: "example2"
  },
  {
    id: 3,
    title: "Luxury Destination Wedding in Bali",
    category: "Pre-Wedding",
    thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    videoId: "example3"
  },
  {
    id: 4,
    title: "Corporate Event Highlight",
    category: "Event",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    videoId: "example4"
  },
  {
    id: 5,
    title: "Vineyard Wedding Cinematic Film",
    category: "Wedding Film",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    videoId: "example5"
  },
  {
    id: 6,
    title: "Romantic Pre-Wedding Shoot",
    category: "Pre-Wedding",
    thumbnail: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    videoId: "example6"
  }
];

const FeaturedWorkSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Featured <span className="gold-gradient">Work</span></h2>
          <div className="h-0.5 w-20 bg-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of cinematic wedding films and video editing projects that have captivated hearts and created lasting memories.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuredWorks.map((work) => (
            <motion.div key={work.id} variants={item} className="group">
              <div className="relative aspect-video overflow-hidden rounded-sm">
                <img 
                  src={work.thumbnail} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                    <Play className="text-white h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-xs text-gold uppercase tracking-wider">{work.category}</span>
                <h3 className="text-lg font-medium mt-1">{work.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/portfolio" className="inline-flex items-center text-gold hover:text-gold-dark transition-colors border-b border-gold hover:border-gold-dark pb-1">
            <span className="mr-2">View Full Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
