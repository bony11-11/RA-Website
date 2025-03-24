
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
};
