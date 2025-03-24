
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const sectionTop = section.offsetTop;
      
      onClose();
      
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className="mobile-menu-header">
        <button className="close-menu" onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <div className="mobile-menu-links">
        <a href="#about" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</a>
        <a href="#solutions" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('solutions');
        }}>Solutions</a>
        <a href="#services" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('services');
        }}>Services</a>
        <a href="#gallery" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('gallery');
        }}>Gallery</a>
        <a href="#testimonials" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('testimonials');
        }}>Testimonials</a>
        <a href="#contact" className="mobile-nav-link" onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}>Contact</a>
      </div>
    </div>
  );
};

export default MobileMenu;
