
import React, { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" className="section-padding bg-dark-500" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-on-scroll">
            Trusted Since 2005
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Innovative Interior Solutions for Modern Living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative fade-in-on-scroll">
              <div className="w-full h-full absolute -right-4 -bottom-4 border-2 border-gold-500 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/1721322800607-8c38375eef04.png" 
                  alt="Elegant interior design" 
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gold-500 fade-in-on-scroll">
                Crafting Premium Interiors That Define Elegance
              </h3>
              
              <p className="text-gray-300 fade-in-on-scroll">
                For over fifteen years, our design studio has been at the forefront of creating and designing premium interior solutions that combine aesthetic appeal with unmatched functionality.
              </p>
              
              <p className="text-gray-300 fade-in-on-scroll">
                We specialize in various living spaces, including modern apartments, home offices, and custom furniture, all crafted with meticulous attention to detail and designed to withstand the test of time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Quality</h4>
                  <p className="text-gray-300 text-sm">Top-notch materials for durable and sophisticated interiors.</p>
                </div>
                
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Variety</h4>
                  <p className="text-gray-300 text-sm">Explore a diverse selection of interior styles and furniture designs.</p>
                </div>
                
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Experience</h4>
                  <p className="text-gray-300 text-sm">18 years of experience in crafting exceptional living spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
