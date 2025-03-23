
/**
 * RA Tents - Main JavaScript
 * 
 * This file contains all interactive functionality for the RA Tents website:
 * - Navigation behavior
 * - Parallax effects
 * - Scroll animations
 * - Interactive tabs/sliders
 * - Form handling
 * - Toast notifications
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize page elements and effects
  initPage();
  
  // Set up navigation behavior
  setupNavigation();
  
  // Set up interactive elements
  setupProductSelector();
  setupServiceTabs();
  setupParallaxEffects();
  setupScrollAnimations();
  setupContactForm();
  setupScrollToTop();
  
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

/**
 * Initialize page elements after DOM is loaded
 */
function initPage() {
  // Add loaded class to hero elements for entrance animation
  setTimeout(function() {
    document.querySelector('.hero-bg-image').classList.add('loaded');
    document.querySelector('.hero-content').classList.add('loaded');
    document.querySelector('.scroll-indicator').classList.add('loaded');
  }, 100);
}

/**
 * Set up navigation behavior (desktop and mobile)
 */
function setupNavigation() {
  const navbar = document.querySelector('.navbar');
  const contactBtn = document.querySelector('.contact-btn');
  const contactPopover = document.getElementById('contactPopover');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Navbar scroll behavior
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Contact popover toggle
  if (contactBtn && contactPopover) {
    contactBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      contactPopover.classList.toggle('active');
    });
    
    // Close popover when clicking outside
    document.addEventListener('click', function(e) {
      if (!contactBtn.contains(e.target) && !contactPopover.contains(e.target)) {
        contactPopover.classList.remove('active');
      }
    });
  }
  
  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking a nav link
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // Handle scroll to section for all navigation links
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .scroll-indicator, a[href^="#"]');
  
  allNavLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#') && href !== '#') {
        e.preventDefault();
        scrollToSection(href.substring(1));
      }
    });
  });
}

/**
 * Scroll to a specific section with smooth behavior
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    // Get navbar height to offset scroll position
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const sectionPosition = section.offsetTop;
    
    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: 'smooth'
    });
  }
}

/**
 * Set up interactive product showcase tabs
 */
function setupProductSelector() {
  const productOptions = document.querySelectorAll('.product-option');
  const productImages = document.querySelectorAll('.product-image');
  
  productOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const productId = this.getAttribute('data-product');
      
      // Update active class on options
      productOptions.forEach(function(opt) {
        opt.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update active class on images
      productImages.forEach(function(image) {
        if (image.getAttribute('data-product') === productId) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Set up interactive services tabs
 */
function setupServiceTabs() {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const serviceImages = document.querySelectorAll('.service-image');
  
  serviceTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const serviceId = this.getAttribute('data-service');
      
      // Update active class on tabs
      serviceTabs.forEach(function(t) {
        t.classList.remove('active');
      });
      this.classList.add('active');
      
      // Update active class on images
      serviceImages.forEach(function(image) {
        if (image.getAttribute('data-service') === serviceId) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    });
  });
}

/**
 * Set up parallax effects on scroll
 */
function setupParallaxEffects() {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  
  parallaxSections.forEach(function(section) {
    const bgImage = section.getAttribute('data-bg-image');
    if (bgImage) {
      section.style.backgroundImage = `url(${bgImage})`;
    }
  });
  
  window.addEventListener('scroll', function() {
    parallaxSections.forEach(function(section) {
      const scrollPosition = window.pageYOffset;
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Only apply parallax effect when section is in viewport
      if (scrollPosition + window.innerHeight > sectionOffset && 
          scrollPosition < sectionOffset + sectionHeight) {
        // Calculate parallax offset (adjust speed as needed)
        const yPos = -(scrollPosition - sectionOffset) * 0.15;
        section.style.backgroundPositionY = yPos + 'px';
      }
    });
  });
}

/**
 * Set up scroll animations for elements
 */
function setupScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  // Initialize Intersection Observer
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.15 } // Trigger when at least 15% of element is visible
  );
  
  // Observe all fade elements
  fadeElements.forEach(function(element) {
    observer.observe(element);
  });
}

/**
 * Set up contact form submission and validation
 */
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        showToast('Please fill out all required fields', 'error');
        return;
      }
      
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', {
        name: name,
        email: email,
        phone: document.getElementById('phone').value,
        message: message
      });
      
      // Show success message
      showToast('Your message has been sent. We\'ll get back to you soon!', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
}

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast ('success' or 'error')
 */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  
  // Set message and type
  toast.textContent = message;
  toast.className = 'toast';
  toast.classList.add(type, 'visible');
  
  // Auto-hide toast after 5 seconds
  setTimeout(function() {
    toast.classList.remove('visible');
  }, 5000);
}

/**
 * Set up scroll to top button behavior
 */
function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
