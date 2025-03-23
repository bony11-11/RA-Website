
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center">
              <span className="text-gold-500 font-playfair text-2xl md:text-3xl font-bold">
                RA <span className="text-white">Tents</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-gold-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-gold-500 transition-colors">
                Solutions
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white hover:text-gold-500 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-gold-500 transition-colors">
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-primary"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-dark-800 bg-opacity-95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('about')} 
            className="block w-full text-left px-3 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('solutions')} 
            className="block w-full text-left px-3 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md"
          >
            Solutions
          </button>
          <button 
            onClick={() => scrollToSection('features')} 
            className="block w-full text-left px-3 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="block w-full text-left px-3 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="block w-full text-left px-3 py-2 text-gold-500 hover:text-gold-400 hover:bg-dark-700 rounded-md"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
