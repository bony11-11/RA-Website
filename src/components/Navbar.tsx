import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
const Navbar = () => {
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
  const scrollToSection = (sectionId: string) => {
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
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center">
              <img src="/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png" alt="RA Tents Logo" className="h-[13.5rem] max-h-[13.5rem] w-auto transition-all" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            
            {/* Contact Popover */}
            <Popover>
              <PopoverTrigger asChild>
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  Contact Us
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-dark-800 border border-gold-500/30">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gold-500">Contact Us</h3>
                  
                  <div className="flex flex-col space-y-3">
                    <a href="tel:+971501234567" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                      <Phone className="h-5 w-5 text-gold-500" />
                      <span>+971 50 123 4567</span>
                    </a>
                    
                    <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                      <MessageSquare className="h-5 w-5 text-gold-500" />
                      <span>WhatsApp</span>
                    </a>
                    
                    <a href="mailto:info@ratents.com" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                      <Mail className="h-5 w-5 text-gold-500" />
                      <span>info@ratents.com</span>
                    </a>
                  </div>
                  
                  <div className="pt-2">
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-dark-900" onClick={() => scrollToSection('contact')}>
                      Go to Contact Form
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-white hover:text-gold-500 focus:outline-none">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-800 border-l border-gold-500/30">
                <nav className="flex flex-col gap-4 mt-6">
                  <button onClick={() => {
                  scrollToSection('about');
                  document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                }} className="px-4 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md">
                    About
                  </button>
                  <button onClick={() => {
                  scrollToSection('solutions');
                  document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                }} className="px-4 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md">
                    Solutions
                  </button>
                  <button onClick={() => {
                  scrollToSection('features');
                  document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                }} className="px-4 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md">
                    Features
                  </button>
                  <button onClick={() => {
                  scrollToSection('services');
                  document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                }} className="px-4 py-2 text-white hover:text-gold-500 hover:bg-dark-700 rounded-md">
                    Services
                  </button>
                  <button onClick={() => {
                  scrollToSection('contact');
                  document.querySelector('[data-state="open"]')?.setAttribute('data-state', 'closed');
                }} className="px-4 py-2 text-gold-500 hover:text-gold-400 hover:bg-dark-700 rounded-md">
                    Contact Us
                  </button>
                  
                  <div className="border-t border-gold-500/20 pt-4 mt-2">
                    <h3 className="text-lg font-medium text-gold-500 mb-3 px-4">Quick Contact</h3>
                    <div className="space-y-3 px-4">
                      <a href="tel:+971501234567" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                        <Phone className="h-5 w-5 text-gold-500" />
                        <span>+971 50 123 4567</span>
                      </a>
                      
                      <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                        <MessageSquare className="h-5 w-5 text-gold-500" />
                        <span>WhatsApp</span>
                      </a>
                      
                      <a href="mailto:info@ratents.com" className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors">
                        <Mail className="h-5 w-5 text-gold-500" />
                        <span>info@ratents.com</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;
