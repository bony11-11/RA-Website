import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const ElementorProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState('product1');

  const products: Product[] = [
    {
      id: 'product1',
      title: 'Marquee Tents',
      description: 'Perfect for large events, gatherings, and exhibitions. These spacious tents offer a versatile solution with various size options.',
      features: [
        'Customizable sizes and layouts',
        'Weather-resistant materials',
        'Elegant and sophisticated design',
        'Easy installation and dismantling'
      ]
    },
    {
      id: 'product2',
      title: 'Arched Tents',
      description: 'Known for their elegant curved peak, these tents provide a touch of sophistication for weddings, galas, or product launches.',
      features: [
        'Distinctive arched design',
        'Premium quality materials',
        'Suitable for upscale events',
        'Customizable interiors'
      ]
    },
    {
      id: 'product3',
      title: 'Bedouin Tents',
      description: 'Experience the charm and tradition of the region with our authentic Bedouin tents, which are ideal for cultural events or outdoor dining experiences.',
      features: [
        'Authentic traditional design',
        'Adaptable to various terrains',
        'Creates a unique ambiance',
        'Perfect for themed events'
      ]
    }
  ];

  const handleTabClick = (productId: string) => {
    setActiveProduct(productId);
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  useEffect(() => {
    const animateElements = document.querySelectorAll('.ra-product-header, .ra-product-tabs, .ra-product-display');
    
    animateElements.forEach(element => {
      element.classList.add('fade-in');
    });
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animateElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="ra-product-showcase">
      <div className="ra-product-header">
        <div className="ra-section-badge">Our Offerings</div>
        <h2 className="ra-section-title">Our Premium Tent Solutions</h2>
        <p className="ra-section-description">
          Elegance and functionality combined to create the perfect atmosphere for your events
        </p>
      </div>
      
      <div className="ra-product-content">
        <div className="ra-product-tabs">
          {products.map(product => (
            <button 
              key={product.id}
              className={`ra-tab-button ${activeProduct === product.id ? 'active' : ''}`} 
              data-product={product.id}
              onClick={() => handleTabClick(product.id)}
            >
              {product.title}
            </button>
          ))}
        </div>
        
        <div className="ra-product-display">
          {products.map(product => (
            <div 
              key={product.id}
              className={`ra-product ${activeProduct === product.id ? 'active' : ''}`} 
              id={product.id}
            >
              <div className="ra-product-image">
                <img 
                  src={`/lovable-uploads/${product.id}.jpg`} 
                  alt={product.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/lovable-uploads/placeholder.png'; 
                  }}
                />
                <div className="ra-image-overlay"></div>
              </div>
              <div className="ra-product-info">
                <h3 className="ra-product-name">{product.title}</h3>
                <p className="ra-product-description">
                  {product.description}
                </p>
                <ul className="ra-product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="ra-product-cta" onClick={handleCTAClick}>Inquire Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        /* Product Showcase Styles */
        .ra-product-showcase {
          padding: 80px 20px;
          max-width: 1200px;
          margin: 0 auto;
          background-color: #0a0a0a;
        }

        .ra-product-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .ra-section-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 9999px;
          background-color: rgba(252, 192, 7, 0.2);
          color: #FCC007;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 16px;
          border: 1px solid rgba(252, 192, 7, 0.3);
        }

        .ra-section-title {
          font-size: 36px;
          font-weight: 700;
          color: #FCC007;
          margin-bottom: 16px;
          font-family: 'Playfair Display', serif;
        }

        .ra-section-description {
          font-size: 18px;
          color: #d1d1d1;
          max-width: 800px;
          margin: 0 auto;
        }

        .ra-product-content {
          display: flex;
          flex-direction: column;
        }

        .ra-product-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .ra-tab-button {
          padding: 12px 24px;
          background-color: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(252, 192, 7, 0.2);
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }

        .ra-tab-button:hover {
          border-color: rgba(252, 192, 7, 0.5);
          background-color: rgba(252, 192, 7, 0.1);
        }

        .ra-tab-button.active {
          background-color: rgba(252, 192, 7, 0.2);
          border-color: rgba(252, 192, 7, 0.5);
          color: #FCC007;
        }

        .ra-product-display {
          position: relative;
        }

        .ra-product {
          display: none;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .ra-product.active {
          display: grid;
          opacity: 1;
        }

        .ra-product-image {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          height: 400px;
        }

        .ra-product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .ra-product:hover .ra-product-image img {
          transform: scale(1.05);
        }

        .ra-image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          z-index: 1;
        }

        .ra-product-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ra-product-name {
          font-size: 28px;
          font-weight: 700;
          color: #FCC007;
          margin-bottom: 16px;
          font-family: 'Playfair Display', serif;
        }

        .ra-product-description {
          font-size: 16px;
          color: #d1d1d1;
          margin-bottom: 20px;
        }

        .ra-product-features {
          list-style-type: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .ra-product-features li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 10px;
          color: #d1d1d1;
        }

        .ra-product-features li:before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23FCC007' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        .ra-product-cta {
          display: inline-block;
          padding: 12px 24px;
          background-color: #FCC007;
          color: #0a0a0a;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
          margin-top: 16px;
        }

        .ra-product-cta:hover {
          background-color: #D9A206;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .ra-product {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .ra-product-image {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .ra-product-showcase {
            padding: 60px 16px;
          }
          
          .ra-section-title {
            font-size: 28px;
          }
          
          .ra-section-description {
            font-size: 16px;
          }
          
          .ra-tab-button {
            padding: 10px 16px;
            font-size: 14px;
          }
          
          .ra-product-name {
            font-size: 24px;
          }
        }

        /* Animation classes */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>
    </div>
  );
};

export default ElementorProductShowcase;

