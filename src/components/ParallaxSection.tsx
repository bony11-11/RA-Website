
import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  bgImage: string;
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  bgImage, 
  speed = 0.5, 
  className = '', 
  children 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollTop = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate when the section is in view
      if (scrollTop + window.innerHeight > sectionTop && 
          scrollTop < sectionTop + sectionHeight) {
        
        // Calculate the parallax offset
        const offset = (scrollTop - sectionTop) * speed;
        
        // Apply the transform
        sectionRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div 
      ref={sectionRef}
      className={`relative bg-cover bg-center bg-no-repeat ${className}`}
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-dark-900/60"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
