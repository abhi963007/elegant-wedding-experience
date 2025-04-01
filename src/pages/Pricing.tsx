import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activePlan, setActivePlan] = useState('standard');

  const plans = {
    basic: {
      name: "Essential Story",
      price: "$2,800",
      description: "A focused narrative of your wedding day's key moments in a beautiful cinematic style.",
      features: [
        "6 hours of continuous coverage",
        "1 cinematographer",
        "3-5 minute highlight film",
        "Licensed music",
        "Digital delivery",
        "Basic color grading",
        "Raw footage archive (6 months)"
      ],
      recommended: false
    },
    standard: {
      name: "Premium Story",
      price: "$4,200",
      description: "A comprehensive cinematic experience capturing the complete story of your special day.",
      features: [
        "10 hours of continuous coverage",
        "2 cinematographers",
        "5-7 minute highlight film",
        "Separate ceremony & first dance edits",
        "Premium licensed music",
        "Advanced color grading",
        "Drone footage (location permitting)",
        "Raw footage archive (12 months)"
      ],
      recommended: true
    },
    deluxe: {
      name: "Luxury Experience",
      price: "$6,500",
      description: "The ultimate wedding film package with premium cinematic quality and distinctive storytelling.",
      features: [
        "Full-day coverage (up to 12 hours)",
        "3 cinematographers",
        "8-10 minute cinematic highlight film",
        "Separate ceremony & full reception edit",
        "Custom-selected premium licensed music",
        "Premium color grading & sound design",
        "4K delivery option",
        "Drone coverage (location permitting)",
        "Raw footage archive (18 months)",
        "Same-day edit for reception viewing"
      ],
      recommended: false
    }
  };

  const addOns = [
    {
      name: "Engagement Session",
      price: "$800",
      description: "A beautifully crafted 2-3 minute cinematic film showcasing your love story before the wedding."
    },
    {
      name: "Extended Highlight Film",
      price: "$600",
      description: "Extend your highlight film up to an additional 5 minutes to include more special moments."
    },
    {
      name: "Same-Day Edit",
      price: "$1,200",
      description: "A 3-4 minute highlight film edited on-site and ready to view during your reception."
    },
    {
      name: "Raw Footage Archive",
      price: "$400",
      description: "All your unedited footage delivered on a hard drive for you to keep permanently."
    },
    {
      name: "Additional Coverage Hours",
      price: "$350/hour",
      description: "Extend your coverage beyond your package's included hours."
    },
    {
      name: "Rehearsal Dinner Coverage",
      price: "$1,200",
      description: "3 hours of coverage of your rehearsal dinner with a 2-3 minute highlight edit."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Pricing | Vynora Wedding Company</title>
        <meta name="description" content="Explore our wedding cinematography packages and pricing options to find the perfect coverage for your special day." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">Investment & <span className="gold-gradient">Packages</span></h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-heading tracking-wider">
              Discover the perfect wedding cinematography package to beautifully preserve your special day.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Toggle */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Choose Your Package</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Each package is thoughtfully designed to capture your unique story. All packages can be customized to your specific needs.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md p-1 bg-slate-100">
              <button
                onClick={() => setActivePlan('basic')}
                className={`px-6 py-2 rounded-md text-sm transition-all duration-300 ${
                  activePlan === 'basic'
                    ? 'bg-white text-gold shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Essential
              </button>
              <button
                onClick={() => setActivePlan('standard')}
                className={`px-6 py-2 rounded-md text-sm transition-all duration-300 ${
                  activePlan === 'standard'
                    ? 'bg-white text-gold shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Premium
              </button>
              <button
                onClick={() => setActivePlan('deluxe')}
                className={`px-6 py-2 rounded-md text-sm transition-all duration-300 ${
                  activePlan === 'deluxe'
                    ? 'bg-white text-gold shadow-md'
                    : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Luxury
              </button>
            </div>
          </div>
          
          <motion.div
            key={activePlan}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className={`bg-white p-8 rounded-lg shadow-lg border-2 ${plans[activePlan].recommended ? 'border-gold' : 'border-transparent'}`}>
              {plans[activePlan].recommended && (
                <div className="bg-gold text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-heading mb-2">{plans[activePlan].name}</h3>
                  <p className="text-muted-foreground">{plans[activePlan].description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-3xl font-heading text-gold">{plans[activePlan].price}</span>
                </div>
              </div>
              
              <div className="border-t border-slate-200 pt-6">
                <h4 className="font-medium mb-4">What's Included:</h4>
                <ul className="space-y-2">
                  {plans[activePlan].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <svg className="h-5 w-5 text-gold flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="/contact" 
                  className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
                >
                  Book This Package
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Add-Ons Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Enhance Your Experience</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Customize your package with these premium add-ons to further enhance your wedding film experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-heading">{addon.name}</h3>
                  <span className="text-gold font-heading">{addon.price}</span>
                </div>
                <p className="text-muted-foreground">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Our Process</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and professional experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl font-heading">1</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We'll discuss your vision, preferences, and wedding details to understand your unique story.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl font-heading">2</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Booking</h3>
              <p className="text-muted-foreground">
                Secure your date with a signed contract and deposit, then we'll begin planning your coverage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl font-heading">3</span>
              </div>
              <h3 className="text-xl font-heading mb-2">The Wedding Day</h3>
              <p className="text-muted-foreground">
                Our team captures your day with artful, unobtrusive coverage focused on authentic moments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl font-heading">4</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Delivery</h3>
              <p className="text-muted-foreground">
                Receive your beautifully crafted wedding film to cherish for generations to come.
              </p>
            </motion.div>
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
            <h2 className="text-3xl font-heading mb-6">Ready to Book or Have Questions?</h2>
            <p className="mb-8 text-white/80 font-heading tracking-wider">
              Contact us today to check availability for your wedding date or to discuss custom packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
              >
                Book a Consultation
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider hover:shadow-lg"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>
      </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Pricing;
