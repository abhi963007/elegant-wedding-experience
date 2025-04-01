import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'tips', name: 'Wedding Tips' },
    { id: 'planning', name: 'Planning' },
    { id: 'cinematography', name: 'Cinematography' },
    { id: 'trends', name: 'Wedding Trends' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for Planning Your Wedding Film",
      excerpt: "Discover the essential tips for capturing the perfect wedding video that you'll cherish for years to come.",
      category: "tips",
      date: "May 15, 2023",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: {
        name: "Emily Chen",
        role: "Founder & Lead Cinematographer",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    },
    {
      id: 2,
      title: "Why Golden Hour is Perfect for Wedding Photos",
      excerpt: "Learn why photographers and cinematographers love golden hour, and how to plan your wedding to take advantage of this magical light.",
      category: "cinematography",
      date: "April 28, 2023",
      image: "https://images.pexels.com/photos/1247292/pexels-photo-1247292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: {
        name: "David Kim",
        role: "Drone Specialist & Cinematographer",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    },
    {
      id: 3,
      title: "Wedding Cinematography Trends for 2023",
      excerpt: "Stay ahead of the curve with these emerging trends in wedding videography that are making waves this year.",
      category: "trends",
      date: "March 10, 2023",
      image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: {
        name: "Sophia Rodriguez",
        role: "Cinematographer",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    },
    {
      id: 4,
      title: "How to Choose the Perfect Wedding Venue for Filming",
      excerpt: "Your venue choice greatly impacts your wedding film. Here's what to consider from a cinematographer's perspective.",
      category: "planning",
      date: "February 5, 2023",
      image: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: {
        name: "Marcus Johnson",
        role: "Senior Editor",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    },
    {
      id: 5,
      title: "The Art of Storytelling in Wedding Films",
      excerpt: "Discover how professional wedding cinematographers craft compelling narratives that capture the essence of your special day.",
      category: "cinematography",
      date: "January 18, 2023",
      image: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: {
        name: "Emily Chen",
        role: "Founder & Lead Cinematographer",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      }
    }
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Helmet>
        <title>Blog | Vynora Wedding Company</title>
        <meta name="description" content="Read our latest insights, stories, and inspiration from the world of wedding cinematography." />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-white">Our <span className="gold-gradient">Blog</span></h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-heading tracking-wider">
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
                    ? 'bg-gold text-white shadow-md'
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
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-md shadow-md overflow-hidden"
          >
            <div className="relative h-full min-h-[300px] lg:min-h-full">
              <img 
                src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Featured post" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block bg-gold/10 text-gold text-xs px-3 py-1 rounded-full mb-4 font-medium">Featured Article</span>
              <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4">The Future of Wedding Films: Emerging Technologies in 2023</h2>
              <p className="text-muted-foreground mb-6">From AI-enhanced editing to immersive VR experiences, discover how cutting-edge technology is transforming the way we capture and relive wedding memories.</p>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                  alt="Emily Chen" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium">Emily Chen</p>
                  <p className="text-xs text-muted-foreground">June 1, 2023</p>
                </div>
              </div>
              <a 
                href="#" 
                className="inline-block font-medium text-gold border-b-2 border-transparent hover:border-gold transition-all duration-300"
              >
                Read Article →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
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
                    <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">{categories.find(cat => cat.id === post.category)?.name}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-medium mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.author.image} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <span className="text-xs font-medium">{post.author.name}</span>
                    </div>
                    <a 
                      href="#" 
                      className="text-sm font-medium text-gold hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </motion.div>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-heading mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with our latest articles, wedding tips, and inspiration for your special day.
            </p>
            <form className="flex flex-col md:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-colors md:rounded-r-none"
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-gold-dark text-white py-3 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20 md:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Blog;
