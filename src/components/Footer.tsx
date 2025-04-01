
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide">
                <span className="text-gold">VYN</span>ORA
              </span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Premium wedding cinematography and video editing services that transform your special moments into cinematic masterpieces.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg mb-5 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Wedding Cinematography</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Pre-Wedding Shoots</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Professional Editing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Event Videography</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Corporate Videos</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg mb-5 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold mr-3 mt-1" />
                <span className="text-gray-400">123 Cinematic Street, Suite 101<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold mr-3" />
                <a href="mailto:info@vynora.com" className="text-gray-400 hover:text-gold transition-colors">info@vynora.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vynora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
