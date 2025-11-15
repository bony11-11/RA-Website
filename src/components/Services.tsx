
import React, { useEffect, useRef, useState } from 'react';

interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

const Services = () => {
  const [activeService, setActiveService] = useState<number>(1);
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

  const services: ServiceType[] = [
    {
      id: 1,
      title: 'Tent Solutions',
      description: 'Tailored tent designs for every occasion, from intimate gatherings to grand celebrations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      image: '/lovable-uploads/b3_optimized.png'
    },
    {
      id: 2,
      title: 'Internal Finishing',
      description: 'Elegance and durability perfect for every occasion.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: '/lovable-uploads/d7-Mejorado_MAX.png'
    },
    {
      id: 3,
      title: 'Parking Sheds',
      description: 'Protect vehicles with our reliable parking shed designs, built for longevity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: '/lovable-uploads/d10-Mejorado_MAX.png'
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-300 text-sm font-medium mb-4 fade-in-on-scroll">
            What We Offer
          </div>
          <h2 className="section-title fade-in-on-scroll">
            Our Specialized Services
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Crafting exceptional structures that combine aesthetics with functionality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Service Navigation */}
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-4 fade-in-on-scroll sticky top-24">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 cursor-pointer transition-all duration-300 rounded-lg border ${
                    activeService === service.id 
                      ? 'bg-gold-500/10 border-gold-500' 
                      : 'bg-dark-800/50 border-gold-500/20 hover:bg-dark-800 hover:border-gold-500/40'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start">
                    <div className={`mr-4 text-gold-500`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${
                        activeService === service.id 
                          ? 'text-gold-500' 
                          : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Service Image */}
          <div className="col-span-1 lg:col-span-3 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden fade-in-on-scroll min-h-[400px]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeService === service.id 
                      ? 'opacity-100 z-10 transform scale-100' 
                      : 'opacity-0 z-0 transform scale-110'
                  }`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
