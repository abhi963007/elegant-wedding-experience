import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tips', name: 'Wedding Tips' },
    { id: 'inspiration', name: 'Inspiration' },
    { id: 'behind', name: 'Behind the Scenes' },
    { id: 'stories', name: 'Client Stories' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Have Shots for Your Wedding Film",
      category: "tips",
      date: "April 15, 2023",
      excerpt: "From getting ready moments to the first dance, discover the essential shots that will make your wedding film truly memorable.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Emily Chen"
    },
    {
      id: 2,
      title: "How to Choose the Perfect Wedding Venue for Filming",
      category: "tips",
      date: "March 22, 2023",
      excerpt: "Lighting, acoustics, backdrop—all things to consider when selecting a venue that will translate beautifully on film.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "David Kim"
    },
    {
      id: 3,
      title: "Sarah & Mark's Sunset Beach Wedding",
      category: "stories",
      date: "February 14, 2023",
      excerpt: "A breathtaking celebration on the shores of Malibu, featuring emotional vows and spectacular golden hour footage.",
      image: "https://images.unsplash.com/photo-1511795409834-c70f1b20017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Sophia Rodriguez"
    },
    {
      id: 4,
      title: "The Evolution of Wedding Cinematography",
      category: "inspiration",
      date: "January 30, 2023",
      excerpt: "From shaky handheld camcorders to cinematic masterpieces—how wedding films have transformed over the decades.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Marcus Johnson"
    },
    {
      id: 5,
      title: "Setting Up the Perfect Wedding Day Timeline for Videography",
      category: "tips",
      date: "December 10, 2022",
      excerpt: "How to structure your wedding day schedule to ensure we capture all the important moments in the best light possible.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b3ce551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "Emily Chen"
    },
    {
      id: 6,
      title: "A Day in the Life: Behind the Scenes of a Wedding Shoot",
      category: "behind",
      date: "November 5, 2022",
      excerpt: "What does it take to film a wedding? Follow our team from sunrise preparations to the last dance.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      author: "David Kim"
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
            <h1 className="text-4xl md:text-5xl font-heading mb-6 text-white">Our <span className="gold-gradient">Blog</span></h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Insights, stories, and inspiration from the world of wedding cinematography.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Category Filter */}
      <section className="pt-12 pb-6 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
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
      
      {/* Featured Post */}
      <section className="pb-8 pt-4 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 rounded-lg overflow-hidden shadow-md"
          >
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Featured post" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-4">
                <span className="text-gold text-sm font-medium">FEATURED</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading mb-4">The Art of Cinematic Wedding Storytelling</h2>
              <p className="text-muted-foreground mb-6">
                How we approach each wedding as a unique story, carefully crafting a narrative that captures not just the events, but the emotions and atmosphere of your special day.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Emily Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-sm">Emily Chen</p>
                  <p className="text-xs text-muted-foreground">May 2, 2023 · 8 min read</p>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-block bg-gold hover:bg-gold-dark text-white py-2 px-6 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
              >
                Read More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-8 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs bg-slate-100 px-3 py-1 rounded-full">{categories.find(c => c.id === post.category)?.name}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                        <img 
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                          alt={post.author} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs">{post.author}</span>
                    </div>
                    <a href="#" className="text-gold text-sm font-medium hover:underline">Read More</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest wedding cinematography tips, trends, and inspiration delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 border border-slate-300 rounded-sm flex-grow focus:outline-none focus:ring-2 focus:ring-gold/50"
                required
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-gold-dark text-white py-3 px-6 rounded-sm transition-all duration-300 text-sm font-medium tracking-wider"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
