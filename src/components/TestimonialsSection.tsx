
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amanda & Daniel",
    role: "Newlyweds",
    quote: "Vynora truly captured the essence of our special day. The cinematic approach and attention to detail exceeded our expectations. We couldn't be happier with the results!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 2,
    name: "Jessica & Michael",
    role: "Couple",
    quote: "Working with Vynora was a dream come true. They made us feel comfortable in front of the camera and delivered a film that perfectly tells our love story.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
  },
  {
    id: 3,
    name: "Emily & James",
    role: "Newlyweds",
    quote: "The team at Vynora went above and beyond to create a wedding film that brought tears to our eyes. Their artistic vision and professionalism are unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-gold opacity-5 rounded-full -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-gold opacity-5 rounded-full translate-x-1/2"></div>
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">Client <span className="gold-gradient">Testimonials</span></h2>
          <div className="h-0.5 w-20 bg-gold mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
              >
                <div className="bg-secondary/50 backdrop-blur-sm rounded-sm p-8 md:p-12 text-center relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <Quote className="h-12 w-12 text-gold opacity-60 rotate-180" />
                  </div>
                  
                  <p className="text-lg md:text-xl italic text-foreground/90 mb-8">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-medium text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
