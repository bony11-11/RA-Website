
import React, { useState, useEffect, useRef } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
}

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const products: Product[] = [
    {
      id: 1,
      title: 'Living Rooms',
      description: 'Spacious and versatile living spaces perfect for family gatherings, entertainment, and relaxation with customizable layouts.',
      image: '/lovable-uploads/1649972904349-6e44c42644a7.png',
      hoverImage: '/lovable-uploads/1581091226825-a6a2a5aee158.png'
    },
    {
      id: 2,
      title: 'Modern Workspaces',
      description: 'Elegant home office designs with beautiful finishing touches, ideal for creating productive and inspiring work environments.',
      image: '/lovable-uploads/1498050108023-c5249f4df085.png',
      hoverImage: '/lovable-uploads/1486312338219-ce68d2c6f44d.png'
    },
    {
      id: 3,
      title: 'Custom Interiors',
      description: 'Bespoke interior solutions tailored to your specific requirements, combining functionality with innovative design elements.',
      image: '/lovable-uploads/1460925895917-afdab827c52f.png',
      hoverImage: '/lovable-uploads/1488590528505-98d2b5aba04b.png'
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
            Our Designs
          </div>
          <h2 className="section-title fade-in-on-scroll">
            Premium Interior Solutions
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Functional and elegant living spaces for all your lifestyle needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-2 lg:order-1">
            <div className="relative fade-in-on-scroll overflow-hidden rounded-lg">
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
                  />
                  
                  {/* Gold overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Product name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gold-500 mb-2">
                      {product.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Selector */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8 fade-in-on-scroll">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`glass-card p-6 cursor-pointer transition-all duration-300 hover-lift ${
                    activeProduct === product.id 
                      ? 'border-gold-500 bg-dark-400/90' 
                      : 'border-gold-500/20 hover:border-gold-500/50'
                  }`}
                  onClick={() => setActiveProduct(product.id)}
                >
                  <h3 className={`text-xl font-bold mb-3 ${
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
