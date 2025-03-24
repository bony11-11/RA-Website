
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const sectionTop = section.offsetTop;
      
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="navbar-inner">
            <div className="logo">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}>
                <img src="/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png" alt="RA Tents Logo" />
              </a>
            </div>
            
            <div className="nav-links">
              <a href="#about" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>About</a>
              <a href="#solutions" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('solutions');
              }}>Solutions</a>
              <a href="#services" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}>Services</a>
              <a href="#gallery" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}>Gallery</a>
              <a href="#testimonials" className="nav-link" onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}>Testimonials</a>
              <a href="#contact" id="contact-popup-btn" className="nav-link btn-primary">Contact Us</a>
            </div>
            
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default NavBar;
