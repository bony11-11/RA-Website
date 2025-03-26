
import React, { useEffect, useRef } from 'react';
import ParallaxSection from './ParallaxSection';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <ParallaxSection 
        bgImage="/lovable-uploads/1721322800607-8c38375eef04.png"
        className="section-padding"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div id="features" className="text-center mb-16">
            <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-300 text-sm font-medium mb-4 fade-in-on-scroll">
              Design Excellence
            </div>
            <h2 className="section-title fade-in-on-scroll">
              Customizable Interiors
            </h2>
            <p className="section-subtitle fade-in-on-scroll">
              Whether you're creating a family space, a home office, a modern kitchen, or a relaxing bedroom, we have the perfect design elements to transform your space with style and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center fade-in-on-scroll hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-500/20 border border-gold-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold-500 mb-4">Sophisticated Design</h3>
              <p className="text-gray-300">
                Our interiors feature sophisticated aesthetics that elevate any space. From intricate details to clean lines, each design reflects luxury and refinement.
              </p>
            </div>

            <div className="glass-card p-8 text-center fade-in-on-scroll hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-500/20 border border-gold-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold-500 mb-4">Personalized Options</h3>
              <p className="text-gray-300">
                Tailor your space to your specific lifestyle with various customization options. Choose from different styles, materials, and features to make your living space uniquely yours.
              </p>
            </div>

            <div className="glass-card p-8 text-center fade-in-on-scroll hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold-500/20 border border-gold-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gold-500 mb-4">Durable Quality</h3>
              <p className="text-gray-300">
                Our furniture and design elements are built to last, providing your home with beauty and functionality that stands the test of time, regardless of daily use.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Features;
