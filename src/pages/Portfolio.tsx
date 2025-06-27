import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Films' },
    { id: 'beach', name: 'Beach Weddings' },
    { id: 'estate', name: 'Estate Weddings' },
    { id: 'destination', name: 'Destination Weddings' },
    { id: 'traditional', name: 'Traditional Weddings' }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Emma & James",
      location: "Malibu, California",
      category: "beach",
      thumbnail: "/assets/Images/Works-pic/ALB_1048 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Sofia & Michael",
      location: "Tuscany, Italy",
      category: "destination",
      thumbnail: "/assets/Images/Works-pic/ALB_8844 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Alexandra & William",
      location: "Beverly Hills, California",
      category: "estate",
      thumbnail: "/assets/Images/Works-pic/ALB_8883 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Jessica & Robert",
      location: "New York, New York",
      category: "traditional",
      thumbnail: "/assets/Images/Works-pic/ALB_8892 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Olivia & Noah",
      location: "Santa Barbara, California",
      category: "beach",
      thumbnail: "/assets/Images/Works-pic/ALB_8914 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Ava & Liam",
      location: "Lake Como, Italy",
      category: "destination",
      thumbnail: "/assets/Images/Works-pic/ALB_8921 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 7,
      title: "Charlotte & Ethan",
      location: "Napa Valley, California",
      category: "estate",
      thumbnail: "/assets/Images/Works-pic/ALB_8932 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      title: "Mia & Benjamin",
      location: "Boston, Massachusetts",
      category: "traditional",
      thumbnail: "/assets/Images/Works-pic/ALB_8968 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 9,
      title: "Amelia & Lucas",
      location: "Newport Beach, California",
      category: "beach",
      thumbnail: "/assets/Images/Works-pic/ALB_8993 copy.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState('');

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo('');
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Portfolio | Vynora Wedding Company</title>
        <meta name="description" content="View our showcase of beautiful wedding films and cinematic stories from weddings around the world." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 md:px-12 lg:px-24 bg-dark">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">Our <span className="gold-gradient">Portfolio</span></h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-heading tracking-wider">
              A showcase of our most beautiful wedding films and cinematic stories.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Categories */}
      <section className="pt-12 pb-6 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true }}
                className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative group aspect-video overflow-hidden cursor-pointer" onClick={() => openModal(item.videoUrl)}>
                  <img 
                    src={item.thumbnail} 
                    alt={`${item.title} wedding`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-heading font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.location}</p>
                  <button 
                    onClick={() => openModal(item.videoUrl)}
                    className="text-gold font-medium text-sm inline-flex items-center group"
                  >
                    Watch Film
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-dark text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading mb-6">Ready to Create Your Own Wedding Story?</h2>
            <p className="mb-8 text-white/80 font-heading tracking-wider">
              Let's discuss how we can capture your special day in a cinematic film.
            </p>
            <a 
              href="/contact" 
              className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl aspect-video relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white hover:text-gold transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={activeVideo}
              title="Wedding Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      )}
      
      <Footer />
    </motion.div>
  );
};

export default Portfolio;
