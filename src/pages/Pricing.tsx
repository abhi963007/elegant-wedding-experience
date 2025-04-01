
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-28 pb-20 px-6 md:px-12 lg:px-24 bg-background">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading mb-6 text-center">Pricing & <span className="gold-gradient">Packages</span></h1>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">Coming soon</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
