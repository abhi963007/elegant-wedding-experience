import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Page Not Found | Vynora Wedding Company</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>
      <Navbar />
      <div className="pt-28 pb-20 px-6 md:px-12 lg:px-24 bg-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading mb-6">Page <span className="gold-gradient">Not Found</span></h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-block bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
            >
              Return to Home
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
