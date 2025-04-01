import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-white">Our <span className="gold-gradient">Pricing</span></h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Investment options for your wedding cinematography needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Packages */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$2,999",
                description: "Perfect for intimate weddings seeking quality cinematic coverage.",
                features: [
                  "6 Hours of Coverage",
                  "1 Cinematographer",
                  "5-7 Minute Highlight Film",
                  "Digital Delivery",
                  "Custom Music Licensing",
                  "Color Grading & Audio Enhancement"
                ],
                popular: false,
                cta: "Get Started"
              },
              {
                name: "Signature",
                price: "$4,999",
                description: "Our most popular package with comprehensive coverage for your special day.",
                features: [
                  "10 Hours of Coverage",
                  "2 Cinematographers",
                  "Drone Aerial Coverage",
                  "8-10 Minute Highlight Film",
                  "30-Minute Documentary Edit",
                  "Digital Delivery & USB Keepsake",
                  "Custom Music Licensing",
                  "Premium Color Grading"
                ],
                popular: true,
                cta: "Most Popular"
              },
              {
                name: "Luxury",
                price: "$7,999",
                description: "The ultimate wedding film experience with premium coverage and extras.",
                features: [
                  "Full Day Coverage (Up to 12 Hours)",
                  "3 Cinematographers",
                  "Dedicated Drone Operator",
                  "10-15 Minute Cinematic Film",
                  "60-Minute Documentary Edit",
                  "Same-Day Edit for Reception",
                  "Raw Footage Archive",
                  "Premium USB & Custom Box",
                  "Next-Day Teaser Film"
                ],
                popular: false,
                cta: "Get Started"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden ${pkg.popular ? 'border-2 border-gold shadow-xl relative -mt-4 mb-4' : 'border border-slate-200 shadow-md'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 inset-x-0 bg-gold text-white text-center py-1 text-sm font-medium tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-8 ${pkg.popular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-heading mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`block text-center py-3 px-4 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider ${
                      pkg.popular 
                        ? 'bg-gold hover:bg-gold-dark text-white' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* A La Carte Add-ons */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">À La Carte Add-ons</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Customize your package with these additional services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Additional Coverage Hours",
                price: "$350/hour",
                description: "Extend your filming hours with our team."
              },
              {
                name: "Raw Footage Archive",
                price: "$599",
                description: "All unedited footage delivered on a hard drive."
              },
              {
                name: "Engagement Session",
                price: "$899",
                description: "Pre-wedding filming session at a location of your choice."
              },
              {
                name: "Next-Day Edit",
                price: "$799",
                description: "1-2 minute teaser film delivered within 24 hours."
              },
              {
                name: "Same-Day Edit",
                price: "$1,299",
                description: "3-5 minute highlight film shown at your reception."
              },
              {
                name: "Additional Cinematographer",
                price: "$899",
                description: "Add another camera operator for more coverage."
              },
            ].map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-md shadow-sm border border-slate-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium">{addon.name}</h3>
                  <span className="text-gold font-bold">{addon.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Common questions about our pricing and packages.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do you require a deposit to secure our date?",
                answer: "Yes, we require a 50% non-refundable deposit to secure your wedding date. The remaining balance is due 30 days prior to the wedding date."
              },
              {
                question: "How long does it take to receive our wedding film?",
                answer: "Our standard delivery timeline is 8-12 weeks for the final wedding film. Rush delivery options are available for an additional fee."
              },
              {
                question: "Can we customize a package based on our specific needs?",
                answer: "Absolutely! We understand each wedding is unique and are happy to create a custom package tailored to your specific requirements and budget."
              },
              {
                question: "Do you offer travel for destination weddings?",
                answer: "Yes, we love destination weddings! Travel fees are determined based on the location. Please contact us for a custom quote."
              },
              {
                question: "What is your cancellation policy?",
                answer: "The 50% deposit is non-refundable. If you need to reschedule, we'll do our best to accommodate your new date, subject to availability."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="mb-6 border-b border-slate-200 pb-6 last:border-b-0"
              >
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
            <h2 className="text-3xl font-heading mb-6">Ready to Book or Have Questions?</h2>
            <p className="mb-8 text-white/80">
              Contact us today to check availability for your wedding date or to discuss custom packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
              >
                Book a Consultation
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-8 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
