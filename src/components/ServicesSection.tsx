
import React, { useState } from 'react';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('service1');

  const services = [
    { id: 'service1', title: 'Design & Planning', description: 'Our design team will work with you to create the perfect tent setup for your event.' },
    { id: 'service2', title: 'Installation', description: 'Our expert team will handle the complete installation of your tent structure.' },
    { id: 'service3', title: 'Event Support', description: 'We provide on-site support during your event to ensure everything runs smoothly.' },
    { id: 'service4', title: 'Customization', description: 'We offer a wide range of customization options to match your event theme and requirements.' }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive tent solutions from design to teardown</p>
        </div>
        
        <div className="services-tabs">
          {services.map(service => (
            <button
              key={service.id}
              className={`service-tab ${service.id === activeTab ? 'active' : ''}`}
              data-id={service.id}
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        <div className="service-displays">
          {services.map(service => (
            <div
              key={service.id}
              className={`service-display ${service.id === activeTab ? 'active' : ''}`}
              data-id={service.id}
            >
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  <li>Professional team</li>
                  <li>Quality equipment</li>
                  <li>Attention to detail</li>
                  <li>Customer satisfaction guarantee</li>
                </ul>
                <a href="#contact" className="service-cta">Get a Quote</a>
              </div>
              <div className="service-image">
                <img 
                  src={`/lovable-uploads/${service.id}.jpg`} 
                  alt={service.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/lovable-uploads/placeholder.png'; 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
