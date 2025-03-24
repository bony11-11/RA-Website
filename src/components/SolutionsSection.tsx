
import React, { useState } from 'react';

const SolutionsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState('solution1');

  const solutions = [
    { id: 'solution1', title: 'Corporate Events', description: 'Elegant tent solutions for corporate events and conferences.' },
    { id: 'solution2', title: 'Weddings', description: 'Beautiful tent arrangements for your special day.' },
    { id: 'solution3', title: 'Exhibitions', description: 'Professional tent setups for exhibitions and trade shows.' },
    { id: 'solution4', title: 'Private Parties', description: 'Stylish tent options for private celebrations.' }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Solutions</h2>
          <p>We provide premium tent solutions for all types of events</p>
        </div>
        
        <div className="solutions-content">
          <div className="solutions-selector">
            {solutions.map(solution => (
              <div 
                key={solution.id}
                className={`solution-card ${solution.id === activeCard ? 'active' : ''}`}
                data-id={solution.id}
                onClick={() => setActiveCard(solution.id)}
              >
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
          
          <div className="solution-images-container">
            {solutions.map(solution => (
              <div 
                key={solution.id}
                className={`solution-image ${solution.id === activeCard ? 'active' : ''}`}
                data-id={solution.id}
              >
                <img 
                  src={`/lovable-uploads/${solution.id}.jpg`} 
                  alt={solution.title} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/lovable-uploads/placeholder.png'; 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
