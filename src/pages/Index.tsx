
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Services from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import TestimonialSlider from '../components/TestimonialSlider';
import ContactPopup from '../components/ContactPopup';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const [contactPopupOpen, setContactPopupOpen] = useState(false);
  
  // Use our custom scroll animation hook
  useScrollAnimation();

  // Set up event listener for the contact popup button
  useEffect(() => {
    const contactPopupBtn = document.getElementById('contact-popup-btn');
    
    if (contactPopupBtn) {
      const handleContactClick = (e: MouseEvent) => {
        e.preventDefault();
        setContactPopupOpen(true);
        document.body.style.overflow = 'hidden';
      };
      
      contactPopupBtn.addEventListener('click', handleContactClick as EventListener);
      
      return () => {
        contactPopupBtn.removeEventListener('click', handleContactClick as EventListener);
      };
    }
  }, []);

  const closeContactPopup = () => {
    setContactPopupOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-dark-400 overflow-x-hidden">
      <NavBar />
      <main>
        <Hero />
        <About />
        <ProductShowcase />
        <Features />
        <Services />
        <section id="testimonials" className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>What Our Clients Say</h2>
              <p>Testimonials from satisfied customers</p>
            </div>
            <TestimonialSlider />
          </div>
        </section>
        <GallerySection />
      </main>
      <Footer />
      
      <ContactPopup isOpen={contactPopupOpen} onClose={closeContactPopup} />
      <ScrollToTop />
    </div>
  );
};

export default Index;
