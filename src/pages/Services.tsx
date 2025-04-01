import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services | Vynora Wedding Company</title>
        <meta name="description" content="Explore our premium wedding cinematography services including cinematic wedding films, drone coverage, and same-day edits." />
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
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-white">Our <span className="gold-gradient">Services</span></h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Cinematic storytelling that preserves your wedding memories for a lifetime.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Service Cards Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cinematic Wedding Films",
                description: "Our signature full-day coverage includes a beautifully crafted 5-10 minute cinematic highlight film that tells the story of your wedding day.",
                image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Documentary Edit",
                description: "A longer 30-60 minute documentary-style edit that includes more moments, speeches, and interactions from your special day.",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Same-Day Edit",
                description: "A short film of your ceremony and preparations, edited during your reception and displayed for your guests on the same day.",
                image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Drone Aerial Coverage",
                description: "Breathtaking aerial shots of your venue and surroundings, adding a cinematic perspective to your wedding film.",
                image: "https://images.unsplash.com/photo-1527979888946-d922fc0f8ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Engagement Sessions",
                description: "Capture your love story before the wedding with a beautifully filmed engagement video at a location of your choice.",
                image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Raw Footage Archive",
                description: "All the unedited footage from your wedding day, archived and delivered for your personal collection.",
                image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
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
              How we work together to create your perfect wedding film.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "We meet to discuss your vision, style preferences, and wedding details."
              },
              {
                step: "2",
                title: "Planning",
                description: "We create a custom filming strategy for your wedding day."
              },
              {
                step: "3",
                title: "Filming",
                description: "Our team captures all the beautiful moments of your wedding day."
              },
              {
                step: "4",
                title: "Editing & Delivery",
                description: "We craft your story and deliver your finished films."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-heading">
                  {process.step}
                </div>
                <h3 className="text-xl font-medium mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading mb-6">Premium Equipment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We use only the highest quality cinematic cameras, lenses, stabilizers, and audio equipment to ensure your wedding film looks and sounds spectacular.
                </p>
                <p>
                  Our professional-grade equipment includes Sony cinema cameras, prime lenses, DJI drones, gimbal stabilizers, and discrete audio recording devices.
                </p>
                <p>
                  We stay at the forefront of wedding cinematography technology, consistently upgrading our gear to deliver the best possible results for our clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582574501002-9c79034aac7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional camera equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
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
            <h2 className="text-3xl font-heading mb-6">Ready to Capture Your Special Day?</h2>
            <p className="mb-8 text-white/80">
              Let's discuss how we can create a beautiful wedding film that you'll cherish forever.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
