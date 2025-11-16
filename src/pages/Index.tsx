import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Differentiators from '../components/Differentiators';
import Solutions from '../components/Solutions';
import Clients from '../components/Clients';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
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
    <div className="bg-background-dark text-text-dark font-display">
        <Navbar />
        <main className="flex flex-col items-center">
            <div className="w-full max-w-6xl px-4">
                <Hero />
                <Differentiators />
                <Solutions />
                <Clients />
                <About />
                <ContactForm />
            </div>
        </main>
        <Footer />
        <button
            onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all"
            aria-label="Scroll to top"
        >
            <span className="material-symbols-outlined">arrow_upward</span>
        </button>
    </div>
  );
};

export default Index;
