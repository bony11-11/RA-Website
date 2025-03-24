import React, { useEffect } from 'react';

interface ElementorParallaxProps {
  title: string;
  description: string;
  backgroundImage: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const ElementorParallax: React.FC<ElementorParallaxProps> = ({ 
  title, 
  description, 
  backgroundImage,
  features 
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBg = document.querySelector('.ra-parallax-background');
      if (parallaxBg) {
        const scrollPosition = window.pageYOffset;
        (parallaxBg as HTMLElement).style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const animateElements = document.querySelectorAll('.ra-feature-card, .ra-section-badge, .ra-section-title, .ra-section-description');
    
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
      window.removeEventListener('scroll', handleScroll);
      animateElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="ra-parallax-section">
      <div className="ra-parallax-background" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
      
      <div className="ra-parallax-overlay"></div>
      
      <div className="ra-parallax-content">
        <div className="ra-section-badge">Featured</div>
        
        <h2 className="ra-section-title">
          {title}
        </h2>
        
        <p className="ra-section-description">
          {description}
        </p>
        
        <div className="ra-feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="ra-feature-card">
              <div className="ra-feature-icon">
                {feature.icon}
              </div>
              <h3 className="ra-feature-title">{feature.title}</h3>
              <p className="ra-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        /* Parallax Section Styles */
        .ra-parallax-section {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 0;
        }

        .ra-parallax-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed; /* This creates the parallax effect */
          z-index: 0;
          transform: translateZ(0); /* Force hardware acceleration */
        }

        .ra-parallax-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .ra-parallax-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
          margin: 0 auto;
          text-align: center;
        }

        .ra-section-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 9999px;
          background-color: rgba(252, 192, 7, 0.2);
          color: #FCC007;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          border: 1px solid rgba(252, 192, 7, 0.3);
        }

        .ra-section-title {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          font-family: 'Playfair Display', serif;
        }

        .ra-section-description {
          font-size: 18px;
          color: #d1d1d1;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .ra-feature-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .ra-feature-card {
          background-color: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(252, 192, 7, 0.2);
          border-radius: 8px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ra-feature-card:hover {
          transform: translateY(-10px);
          border-color: rgba(252, 192, 7, 0.5);
          box-shadow: 0 10px 25px -5px rgba(252, 192, 7, 0.1);
        }

        .ra-feature-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(252, 192, 7, 0.2);
          border-radius: 50%;
          color: #FCC007;
        }

        .ra-feature-title {
          font-size: 20px;
          font-weight: 600;
          color: #FCC007;
          margin-bottom: 12px;
        }

        .ra-feature-description {
          font-size: 16px;
          color: #d1d1d1;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
          .ra-feature-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ra-section-title {
            font-size: 28px;
          }
          
          .ra-section-description {
            font-size: 16px;
          }
          
          .ra-feature-cards {
            grid-template-columns: 1fr;
          }
        }

        /* Animation for scroll reveal */
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

export default ElementorParallax;
