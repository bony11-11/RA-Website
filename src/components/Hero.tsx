import React, { useEffect, useState, useRef } from 'react';
import { useParallax } from '../hooks/use-parallax';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollY = useParallax();
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-900/70 z-20 backdrop-filter backdrop-blur-sm"></div>
        
        {/* Far background (mountains) - moves slowest */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{
            backgroundImage: 'url(/lovable-uploads/a10-Mejorado-Edit_MAX.jpg)',
            transform: `translateY(${isLoaded ? scrollY * 0.1 : 0}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
        </div>
        
        {/* Mid background (tents) - moves medium speed */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10" 
          style={{
            backgroundImage: 'url(/lovable-uploads/b1-Mejorado_MAX.jpg)',
            transform: `translateY(${isLoaded ? scrollY * 0.3 : 0}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
        </div>
        
        {/* Foreground (people) - moves fastest */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-15" 
          style={{
            backgroundImage: 'url(/lovable-uploads/b3.jpg)',
            transform: `translateY(${isLoaded ? scrollY * 0.5 : 0}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-300 text-sm font-medium mb-6 border border-gold-500/30">
            Premium temporary structures for all occasions
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            <span className="block">
              Quality <span className="text-gold-500">Tents</span> for
            </span>
            <span className="block">
              Every <span className="text-gold-500">Event</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            From corporate events to wedding celebrations, we provide exceptional temporary structures tailored to your specific needs with superior craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => {
              document.getElementById('solutions')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }} className="btn-primary">
              View Our Solutions
            </button>
            <button onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }} className="btn-outline">
              Get a Quote
            </button>
          </div>

          {/* Scroll down indicator */}
          <div className={`flex justify-center mt-10 cursor-pointer animate-bounce transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onClick={() => {
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}>
            <div className="flex flex-col items-center">
              <span className="text-gold-500 text-sm font-light mb-2">Scroll</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FCC007" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
