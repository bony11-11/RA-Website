
import React, { useState, useEffect, useRef } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const products: Product[] = [
    {
      id: 1,
      title: 'Event Tents',
      description: 'Spacious and versatile tents perfect for large events, corporate gatherings, and exhibitions with customizable layouts.',
      image: '/lovable-uploads/d2-Mejorado_MAX.png'
    },
    {
      id: 2,
      title: 'Wedding Tents',
      description: 'Elegant tent designs with beautiful finishing touches, ideal for creating magical wedding venues and celebrations.',
      image: '/lovable-uploads/d8-Mejorado_MAX.png'
    },
    {
      id: 3,
      title: 'Open Tents',
      description: 'Bespoke tent solutions tailored to your specific requirements, combining functionality with innovative design elements.',
      image: '/lovable-uploads/b10-Mejorado_MAX.png'
    }
  ];
  
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
    <section id="solutions" className="relative section-padding bg-dark-400" ref={sectionRef}>
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-300 text-sm font-medium mb-4 fade-in-on-scroll">
            Our Solutions
          </div>
          <h2 className="section-title fade-in-on-scroll">
            Premium Tent Solutions
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Functional and elegant temporary structures for all your event needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Product Navigation */}
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-4 fade-in-on-scroll sticky top-24">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-6 cursor-pointer transition-all duration-300 rounded-lg border ${
                    activeProduct === product.id 
                      ? 'bg-gold-500/10 border-gold-500' 
                      : 'bg-dark-800/50 border-gold-500/20 hover:bg-dark-800 hover:border-gold-500/40'
                  }`}
                  onClick={() => setActiveProduct(product.id)}
                >
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeProduct === product.id 
                        ? 'text-gold-500' 
                        : 'text-white'
                    }`}>
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Image */}
          <div className="col-span-1 lg:col-span-3 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative rounded-lg overflow-hidden fade-in-on-scroll min-h-[400px]">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    activeProduct === product.id 
                      ? 'opacity-100 z-10 transform scale-100' 
                      : 'opacity-0 z-0 transform scale-110'
                  }`}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
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

export default ProductShowcase;
