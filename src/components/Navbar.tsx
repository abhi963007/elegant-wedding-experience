
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6',
        scrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="font-heading text-2xl font-bold tracking-wide">
            <span className="text-gold">VYN</span>ORA
          </span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                'text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold relative pb-1',
                isActive ? 'text-gold' : 'text-foreground'
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
            className="bg-gold hover:bg-gold-dark text-white py-2.5 px-6 rounded-sm transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            Book Now
          </NavLink>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-foreground hover:text-gold transition-colors"
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
                    'text-sm font-medium tracking-wide transition-colors hover:text-gold py-2',
                    isActive ? 'text-gold' : 'text-foreground'
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold hover:bg-gold-dark text-white py-2.5 px-6 rounded-sm transition-colors duration-300 text-sm font-medium tracking-wide self-start mt-2"
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
