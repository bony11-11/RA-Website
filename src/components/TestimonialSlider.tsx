
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Event Manager',
    company: 'Global Conferences Inc.',
    quote: 'The tent solutions provided by RA Tents exceeded our expectations. The quality, service, and attention to detail were exceptional. Our corporate event was a huge success!',
    image: '/lovable-uploads/testimonial1.jpg'
  },
  {
    id: 2,
    name: 'Mohammed Al Farsi',
    position: 'Wedding Planner',
    company: 'Dream Weddings',
    quote: 'We have been working with RA Tents for over 5 years for our luxury weddings. Their tent structures are elegant, and their team is professional and reliable.',
    image: '/lovable-uploads/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'David Chen',
    position: 'Exhibition Director',
    company: 'Tech Expo UAE',
    quote: 'RA Tents delivered an impressive structure for our technology exhibition. The customization options were excellent, and they worked within our tight timeline.',
    image: '/lovable-uploads/testimonial3.jpg'
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startSlideInterval = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopSlideInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startSlideInterval();
    return () => stopSlideInterval();
  }, []);

  return (
    <div className="testimonial-slider">
      <div 
        className="testimonial-track" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={stopSlideInterval}
        onMouseLeave={startSlideInterval}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v3m10 1h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v3"></path>
                  <path d="M4 17.3v-5.5a2 2 0 012-2.2h.8L8 14h3l-1.8-5.8h2.6l1.2 5.8h3l-1.8-5.8h2.6L22 17.3"></path>
                </svg>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/lovable-uploads/placeholder.png'; 
                  }}
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="prev-slide" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button className="next-slide" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`} 
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
