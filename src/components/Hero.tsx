import React, { useEffect, useState } from 'react';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-900/70 backdrop-filter backdrop-blur-sm z-10" style={{
        mixBlendMode: 'multiply'
      }}></div>
        <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/e2929eef-38ca-40e0-8d83-8810707c2324.png)',
        transform: isLoaded ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 10s ease-out'
      }}></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-300 text-sm font-medium mb-6 border border-gold-500/30">
            Specialized in premium tent solutions for over 36 years
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            <span className="block">
              Elegant <span className="text-gold-500">Shelters</span> for
            </span>
            <span className="block">
              Every <span className="text-gold-500">Occasion</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're hosting a business event, a grand wedding, a product launch, or a community gathering, we have the perfect temporary structure to accommodate your guests in style and comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => {
            document.getElementById('solutions')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }} className="btn-primary">
              Explore Our Solutions
            </button>
            <button onClick={() => {
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }} className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onClick={() => {
        document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }}>
          <div className="flex flex-col items-center">
            <span className="text-gold-500 mb-2 text-justify font-light text-sm">Scroll</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#FCC007" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;