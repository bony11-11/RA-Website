
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
      
      // Close popup if open
      if (contactPopup) {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      // Scroll to section
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
      
      // Update active card
      solutionCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      
      // Update active image
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
      
      // Update active tab
      serviceTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Update active display
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
      
      // Update dots
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

  // Auto slide for testimonials
  let testimonialInterval = setInterval(function() {
    let index = currentSlide + 1;
    if (index >= slideCount) index = 0;
    goToSlide(index);
  }, 5000);

  // Pause auto slide on hover
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

  // Add fade-in class to elements
  const elementsToAnimate = document.querySelectorAll('.section-header, .feature-card, .feature-box, .about-image, .about-text, .solutions-selector, .solution-images-container, .service-tab, .service-display, .contact-info, .contact-form-container');
  
  elementsToAnimate.forEach(element => {
    element.classList.add('fade-in');
  });

  // Run on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission (replace with actual form processing)
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
});
