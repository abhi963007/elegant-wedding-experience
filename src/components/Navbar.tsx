import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-background/90 backdrop-blur-md py-4 shadow-md' 
          : 'bg-dark/50 backdrop-blur-sm py-6'
      )}
      style={{ 
        opacity: mounted ? 1 : 0,
        visibility: mounted ? 'visible' : 'hidden'
      }}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="font-heading text-2xl font-bold tracking-wide py-1">
            <span className="text-gold">VYN</span>
            <span className={scrolled ? "text-foreground" : "text-white"}>ORA</span>
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                'text-sm font-heading font-medium tracking-wider uppercase transition-colors hover:text-gold relative pb-1',
                isActive ? 'text-gold' : scrolled ? 'text-foreground' : 'text-white'
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden lg:block">
          <NavLink 
            to="/contact" 
            className="bg-gold hover:bg-gold-dark text-white py-2.5 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
          >
            Book Now
          </NavLink>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "lg:hidden transition-colors",
            scrolled ? "text-foreground hover:text-gold" : "text-white hover:text-gold"
          )}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-muted"
          >
            <nav className="container-padding py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => cn(
                    'text-sm font-heading font-medium tracking-wider transition-colors hover:text-gold py-2',
                    isActive ? 'text-gold' : 'text-foreground'
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold hover:bg-gold-dark text-white py-2.5 px-8 rounded-full transition-all duration-300 text-sm font-medium tracking-wider self-start mt-2 shadow-md hover:shadow-lg hover:scale-105 transform hover:translate-y-[-2px] border border-gold/20"
              >
                Book Now
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
