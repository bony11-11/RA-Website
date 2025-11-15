
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
            Trusted Since 1986
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Innovative Tent Solutions for Every Occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative fade-in-on-scroll">
              <div className="w-full h-full absolute -right-4 -bottom-4 border-2 border-gold-500 rounded-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/756ff86f-5dbc-4c7e-8f2a-4b389e0297c4.png" 
                  alt="Elegant tent solution" 
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gold-500 fade-in-on-scroll">
                Crafting Premium Shelters That Define Elegance
              </h3>
              
              <p className="text-gray-300 fade-in-on-scroll">
                For over three decades, RA Tents has been at the forefront of designing and manufacturing premium tent solutions that combine aesthetic appeal with unmatched functionality.
              </p>
              
              <p className="text-gray-300 fade-in-on-scroll">
                We specialize in various gazebo tents, including Ramadan tents and parking sheds, all crafted with meticulous attention to detail and designed to withstand the test of time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Quality</h4>
                  <p className="text-gray-300 text-sm">Top-notch materials for durable and reliable tents.</p>
                </div>
                
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Variety</h4>
                  <p className="text-gray-300 text-sm">Explore a diverse selection of gazebo and tent designs.</p>
                </div>
                
                <div className="glass-card p-6 text-center fade-in-on-scroll">
                  <h4 className="text-xl font-bold text-gold-500 mb-2">Experience</h4>
                  <p className="text-gray-300 text-sm">36 years of experience in crafting exceptional shades and tents.</p>
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
