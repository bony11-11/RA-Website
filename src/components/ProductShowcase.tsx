
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
      title: 'Marquee Tents',
      description: 'Perfect for large events, gatherings, and exhibitions. These spacious tents offer a versatile solution with various size options.',
      image: '/lovable-uploads/a7bc39fb-a644-47d0-a541-fb26b800dfc1.png',
      hoverImage: '/lovable-uploads/98a47167-794f-490a-9bf0-e610147a6116.png'
    },
    {
      id: 2,
      title: 'Arched Tents',
      description: 'Known for their elegant curved peak, these tents provide a touch of sophistication for weddings, galas, or product launches.',
      image: '/lovable-uploads/f715e17d-78a8-4d7c-b4f1-edf76ebad6de.png',
      hoverImage: '/lovable-uploads/b4f01652-85d5-40fc-a99c-b9f22dcd14e5.png'
    },
    {
      id: 3,
      title: 'Bedouin Tents',
      description: 'Experience the charm and tradition of the region with our authentic Bedouin tents, which are ideal for cultural events or outdoor dining experiences.',
      image: '/lovable-uploads/91ef57b8-5f63-4b2e-a03a-af98fae329d1.png',
      hoverImage: '/lovable-uploads/0e5bbe5a-c74b-42c7-9397-05171cb9c176.png'
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
            Our Offerings
          </div>
          <h2 className="section-title fade-in-on-scroll">
            Our Premium Tent Solutions
          </h2>
          <p className="section-subtitle fade-in-on-scroll">
            Elegance and functionality combined to create the perfect atmosphere for your events
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
