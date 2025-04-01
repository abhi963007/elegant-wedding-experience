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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">Our <span className="gold-gradient">Services</span></h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-heading tracking-wider">
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
                image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Documentary Edit",
                description: "A longer 30-60 minute documentary-style edit that includes more moments, speeches, and interactions from your special day.",
                image: "https://images.pexels.com/photos/1444438/pexels-photo-1444438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Same-Day Edit",
                description: "A short film of your ceremony and preparations, edited during your reception and displayed for your guests on the same day.",
                image: "https://images.pexels.com/photos/1540408/pexels-photo-1540408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Drone Aerial Coverage",
                description: "Breathtaking aerial shots of your venue and surroundings, adding a cinematic perspective to your wedding film.",
                image: "https://images.pexels.com/photos/2253894/pexels-photo-2253894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Engagement Sessions",
                description: "Capture your love story before the wedding with a beautifully filmed engagement video at a location of your choice.",
                image: "https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Raw Footage Archive",
                description: "All the unedited footage from your wedding day, archived and delivered for your personal collection.",
                image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  <h3 className="text-xl font-heading font-medium mb-3">{service.title}</h3>
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
                <h3 className="text-xl font-heading font-medium mb-3">{process.title}</h3>
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
              <div className="aspect-video rounded-md overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
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
            <p className="mb-8 text-white/80 font-heading tracking-wider">
              Let's discuss how we can create a beautiful wedding film that you'll cherish forever.
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
      
      <Footer />
    </motion.div>
  );
};

export default Services;
