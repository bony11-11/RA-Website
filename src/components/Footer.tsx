
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import { Toaster } from '@/components/ui/sonner';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-800 text-white pt-16 pb-8 relative">
      <Toaster position="top-right" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png")', 
          backgroundSize: '40%',
          backgroundRepeat: 'repeat',
          opacity: 0.05
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let us know how we can help you with your tent and shade structure needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Company Information */}
          <div className="space-y-8">
            <div>
              <img 
                src="/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png" 
                alt="RA Tents Logo" 
                className="h-16 mb-4" 
              />
              <p className="text-gray-400 max-w-md">
                Specialized in premium tent solutions for over 36 years. Crafting exceptional structures that combine aesthetics with functionality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gold-500 mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-gray-400 hover:text-gold-500 transition-colors">Our Solutions</a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</a>
                  </li>
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-gold-500 transition-colors">Features</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gold-500 mb-6">Our Office</h4>
                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-1" />
                  <span className="text-gray-400">Office #123, Building Name, Street Name, City, Country</span>
                </div>
                
                <h4 className="text-xl font-bold text-gold-500 mt-8 mb-6">Business Hours</h4>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} RA Tents. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
