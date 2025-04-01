import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide">
                <span className="text-gold">VYN</span>
                <span className="text-white">ORA</span>
              </span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 flex flex-wrap justify-center gap-6">
            <Link to="/" className="font-heading text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-gold transition-colors">Home</Link>
            <Link to="/about" className="font-heading text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-gold transition-colors">About</Link>
            <Link to="/services" className="font-heading text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-gold transition-colors">Services</Link>
            <Link to="/portfolio" className="font-heading text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-gold transition-colors">Portfolio</Link>
            <Link to="/contact" className="font-heading text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p className="font-heading tracking-wide">&copy; {new Date().getFullYear()} Vynora Wedding Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
