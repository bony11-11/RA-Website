document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Contact popup
  const contactPopupBtn = document.getElementById('contact-popup-btn');
  const contactPopup = document.getElementById('contact-popup');
  const closePopup = document.querySelector('.close-popup');

  if (contactPopupBtn && contactPopup && closePopup) {
    contactPopupBtn.addEventListener('click', function(e) {
      e.preventDefault();
      contactPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closePopup.addEventListener('click', function() {
      contactPopup.classList.remove('active');
      document.body.style.overflow = '';
    });

    contactPopup.addEventListener('click', function(e) {
      if (e.target === contactPopup) {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll to section function
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = navbar.offsetHeight;
      const sectionTop = section.offsetTop;
      
      if (contactPopup) {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      window.scrollTo({
        top: sectionTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  // Solutions section tabs
  const solutionCards = document.querySelectorAll('.solution-card');
  const solutionImages = document.querySelectorAll('.solution-image');

  solutionCards.forEach(card => {
    card.addEventListener('click', function() {
      const dataId = this.getAttribute('data-id');
      
      solutionCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      
      solutionImages.forEach(img => {
        if (img.getAttribute('data-id') === dataId) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    });
  });

  // Services tabs
  const serviceTabs = document.querySelectorAll('.service-tab');
  const serviceDisplays = document.querySelectorAll('.service-display');

  serviceTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const dataId = this.getAttribute('data-id');
      
      serviceTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      serviceDisplays.forEach(display => {
        if (display.getAttribute('data-id') === dataId) {
          display.classList.add('active');
        } else {
          display.classList.remove('active');
        }
      });
    });
  });

  // Testimonial slider
  const testimonialTrack = document.querySelector('.testimonial-track');
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  const slideCount = testimonialSlides.length;

  function goToSlide(index) {
    if (testimonialTrack) {
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
      currentSlide = index;
      
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      let index = currentSlide - 1;
      if (index < 0) index = slideCount - 1;
      goToSlide(index);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      let index = currentSlide + 1;
      if (index >= slideCount) index = 0;
      goToSlide(index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      goToSlide(index);
    });
  });

  let testimonialInterval = setInterval(function() {
    let index = currentSlide + 1;
    if (index >= slideCount) index = 0;
    goToSlide(index);
  }, 5000);

  if (testimonialTrack) {
    testimonialTrack.addEventListener('mouseenter', function() {
      clearInterval(testimonialInterval);
    });

    testimonialTrack.addEventListener('mouseleave', function() {
      testimonialInterval = setInterval(function() {
        let index = currentSlide + 1;
        if (index >= slideCount) index = 0;
        goToSlide(index);
      }, 5000);
    });
  }

  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Scroll animations
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('visible');
      }
    });
  };

  const elementsToAnimate = document.querySelectorAll('.section-header, .feature-card, .feature-box, .about-image, .about-text, .solutions-selector, .solution-images-container, .service-tab, .service-display, .contact-info, .contact-form-container');
  
  elementsToAnimate.forEach(element => {
    element.classList.add('fade-in');
  });

  animateOnScroll();

  window.addEventListener('scroll', animateOnScroll);
  
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(function() {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.classList.add('fade-in');
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryGrid = document.querySelector('.gallery-grid');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
      
      galleryGrid.classList.add('filter-change');
      setTimeout(() => {
        galleryGrid.classList.remove('filter-change');
      }, 300);
    });
  });
  
  const navLinks = document.querySelector('.nav-links');
  const servicesLink = document.querySelector('.nav-links a[href="#services"]');
  
  if (navLinks && servicesLink) {
    const galleryLink = document.createElement('a');
    galleryLink.href = "#gallery";
    galleryLink.className = "nav-link";
    galleryLink.textContent = "Gallery";
    
    navLinks.insertBefore(galleryLink, servicesLink.nextSibling);
  }
  
  const mobileMenuLinks = document.querySelector('.mobile-menu-links');
  const mobileServicesLink = document.querySelector('.mobile-menu-links a[href="#services"]');
  
  if (mobileMenuLinks && mobileServicesLink) {
    const mobileGalleryLink = document.createElement('a');
    mobileGalleryLink.href = "#gallery";
    mobileGalleryLink.className = "mobile-nav-link";
    mobileGalleryLink.textContent = "Gallery";
    
    mobileMenuLinks.insertBefore(mobileGalleryLink, mobileServicesLink.nextSibling);
  }
  
  const footerQuickLinks = document.querySelector('.footer-column:first-child ul');
  const testimonialsFooterLink = document.querySelector('.footer-column:first-child ul li:nth-child(4)');
  
  if (footerQuickLinks && testimonialsFooterLink) {
    const footerGalleryItem = document.createElement('li');
    const footerGalleryLink = document.createElement('a');
    footerGalleryLink.href = "#gallery";
    footerGalleryLink.textContent = "Gallery";
    footerGalleryItem.appendChild(footerGalleryLink);
    
    footerQuickLinks.insertBefore(footerGalleryItem, testimonialsFooterLink);
  }
});
