import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
        <title>About Us | Vynora Wedding Company</title>
        <meta name="description" content="Learn about Vynora Wedding Company - passionate storytellers dedicated to capturing the most beautiful moments of your wedding day." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">About <span className="gold-gradient">Vynora</span></h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-heading tracking-wider">
              We are passionate storytellers dedicated to capturing the most beautiful moments of your wedding day.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-md overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Wedding filmmakers at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Vynora began with a simple mission: to transform wedding videography from ordinary documentation into cinematic art that captures the essence of your special day.
                </p>
                <p>
                  Our founder, Emily Chen, after filming her sister's wedding, realized there was a gap in the market for wedding videos that felt like films rather than mere recordings. This sparked the beginning of our journey.
                </p>
                <p>
                  Today, our team of skilled cinematographers and editors work tirelessly to ensure each wedding story is told with creativity, emotion, and the highest production quality.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The talented individuals who bring your wedding stories to life through their passion, creativity, and technical expertise.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Anandhu K S",
                role: "Founder & Senior Editor",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Joel Joseph",
                role: "Founder & Senior Photographer",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Nibin Lal Babu",
                role: "Senior Photographer",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                name: "Bibin Sebastian",
                role: "Senior Videographer",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="overflow-hidden rounded-md mb-4 aspect-square shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg font-heading">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The principles that guide us in creating memorable wedding films.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Storytelling",
                description: "We believe in capturing real moments and emotions that tell your unique story."
              },
              {
                title: "Artistic Excellence",
                description: "We strive for the highest standards in cinematography, editing, and sound design."
              },
              {
                title: "Client Relationship",
                description: "We prioritize understanding your vision to create a film that exceeds your expectations."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="border border-gold/20 p-8 rounded-md hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-medium mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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

export default About;
