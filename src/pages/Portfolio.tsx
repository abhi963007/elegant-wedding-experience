import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
      thumbnail: "https://images.unsplash.com/photo-1583939411023-14783179e581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Sofia & Michael",
      location: "Tuscany, Italy",
      category: "destination",
      thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Alexandra & William",
      location: "Beverly Hills, California",
      category: "estate",
      thumbnail: "https://images.unsplash.com/photo-1606216769783-a9b2b6a982b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Jessica & Robert",
      location: "New York, New York",
      category: "traditional",
      thumbnail: "https://images.unsplash.com/photo-1606218143269-5347e06273e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 5,
      title: "Olivia & Ethan",
      location: "Maui, Hawaii",
      category: "beach",
      thumbnail: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 6,
      title: "Isabella & Thomas",
      location: "Santorini, Greece",
      category: "destination",
      thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-white">Our <span className="gold-gradient">Portfolio</span></h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
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
                    ? 'bg-gold text-white'
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
      <section className="py-8 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-video rounded-md overflow-hidden relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold bg-opacity-80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Film Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Featured Film</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              One of our most memorable wedding films that showcases our cinematic approach.
            </p>
          </motion.div>
          
          <div className="aspect-video rounded-md overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/c_KOydDwX-g"
              title="Featured Wedding Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="text-xl font-medium">Charlotte & Benjamin</h3>
            <p className="text-muted-foreground">Chateau Lake Louise, Canada</p>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-gold mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            <blockquote className="text-xl md:text-2xl italic text-slate-700 mb-6">
              "Vynora's team captured our wedding day in a way that exceeded all expectations. The film they created brings tears to our eyes every time we watch it, allowing us to relive those precious moments over and over again."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                  alt="Charlotte" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">Charlotte W.</p>
                <p className="text-sm text-muted-foreground">Chateau Lake Louise, Canada</p>
              </div>
            </div>
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
            <p className="mb-8 text-white/80">
              Let's discuss how we can capture your special day in a cinematic film.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Video Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl">
            <div className="relative">
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={selectedItem.videoUrl}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-xl font-medium">{selectedItem.title}</h3>
                <p className="text-white/70">{selectedItem.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Portfolio;
