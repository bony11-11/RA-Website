
import React, { useState } from 'react';

const galleryItems = [
  { id: 1, category: 'wedding', image: '/lovable-uploads/wedding1.jpg', title: 'Luxury Wedding Setup' },
  { id: 2, category: 'corporate', image: '/lovable-uploads/corporate1.jpg', title: 'Corporate Event Venue' },
  { id: 3, category: 'exhibition', image: '/lovable-uploads/exhibition1.jpg', title: 'Exhibition Tent Structure' },
  { id: 4, category: 'wedding', image: '/lovable-uploads/wedding2.jpg', title: 'Garden Wedding Arrangement' },
  { id: 5, category: 'corporate', image: '/lovable-uploads/corporate2.jpg', title: 'Conference Hall Setup' },
  { id: 6, category: 'exhibition', image: '/lovable-uploads/exhibition2.jpg', title: 'Product Launch Exhibition' },
];

const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterChanging, setIsFilterChanging] = useState(false);

  const handleFilterChange = (filter: string) => {
    setIsFilterChanging(true);
    setActiveFilter(filter);
    
    setTimeout(() => {
      setIsFilterChanging(false);
    }, 300);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Gallery</h2>
          <p>Explore our previous tent projects</p>
        </div>
        
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            data-filter="all"
            onClick={() => handleFilterChange('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'wedding' ? 'active' : ''}`}
            data-filter="wedding"
            onClick={() => handleFilterChange('wedding')}
          >
            Weddings
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
            data-filter="corporate"
            onClick={() => handleFilterChange('corporate')}
          >
            Corporate
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'exhibition' ? 'active' : ''}`}
            data-filter="exhibition"
            onClick={() => handleFilterChange('exhibition')}
          >
            Exhibitions
          </button>
        </div>
        
        <div className={`gallery-grid ${isFilterChanging ? 'filter-change' : ''}`}>
          {galleryItems.map(item => (
            <div 
              key={item.id} 
              className={`gallery-item ${activeFilter !== 'all' && item.category !== activeFilter ? 'hidden' : ''}`}
              data-category={item.category}
            >
              <div className="gallery-item-inner">
                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/lovable-uploads/placeholder.png'; 
                  }}
                />
                <div className="gallery-item-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
