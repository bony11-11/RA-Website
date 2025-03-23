
# Converting RA Tents React Site to WordPress with Elementor

This document provides guidance on how to recreate the RA Tents website design in WordPress using Elementor.

## General Setup

1. Install WordPress and Elementor (Pro recommended for advanced features)
2. Choose a lightweight theme like Hello Elementor or Astra
3. Import the custom fonts used in the React app (Playfair Display for headings)
4. Set up custom colors in Elementor to match our color scheme:
   - Primary Gold: #FCC007
   - Dark Background: #030303, #050505, #0A0A0A, etc.

## Custom CSS

Create a custom CSS file with these styles that you can add to Elementor → Custom CSS:

```css
/* Gold color classes */
.gold-text {
  color: #FCC007;
}

.gold-bg {
  background-color: #FCC007;
}

/* Glass card effect */
.glass-card {
  background: rgba(10, 10, 10, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(252, 192, 7, 0.2);
  border-radius: 8px;
}

/* Button styles */
.btn-primary {
  background-color: #FCC007;
  color: #030303;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #D9A206;
}

.btn-outline {
  background-color: transparent;
  color: #FCC007;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid #FCC007;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background-color: rgba(252, 192, 7, 0.1);
}

/* Animation classes */
.fade-in-animation {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover lift effect */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
}
```

## Recreating Sections in Elementor

### Hero Section

1. Create a full-width section with a background image
2. Add an overlay with opacity 0.7
3. Use Elementor's built-in scroll effects (Motion Effects) for the parallax effect
4. Add a heading, text, and buttons in a column
5. Configure Motion Effects → Scrolling Effects to animate elements on load

### About Section

1. Create a two-column section
2. Add image with a decorative border in one column
3. Add heading, text, and the three feature boxes in the other column
4. Apply glass card styling to the feature boxes using the custom CSS class

### Product Showcase

1. Create a section with a background color
2. Use Elementor Tabs widget to create the product tabs
3. Each tab should contain the product image and description
4. Apply custom styling to match the design

### Features Section

1. Create a section with a background image and overlay
2. Use a three-column layout for the feature cards
3. Add icons, headings, and text to each column
4. Apply glass card styling with the custom CSS class

### Services Section

1. Create a section with columns for services list and service image
2. Use Elementor Tabs widget or custom code for the service selector
3. Apply animations when switching between services

### Contact Section/Footer

1. Create a two-column section
2. Use Elementor Forms widget for the contact form
3. Add logo, text, and contact information in the other column
4. Style to match the design

## JavaScript Functionality

For interactive elements like the scroll animations and service selector, you'll need to add custom JavaScript. This can be done using Elementor's Custom JavaScript feature or by adding a custom JavaScript file to your theme.

```javascript
// Example JavaScript for scroll animations
document.addEventListener('DOMContentLoaded', function() {
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
  
  const elements = document.querySelectorAll('.fade-in-animation');
  elements.forEach((el) => observer.observe(el));
});

// Example JavaScript for service selector
document.addEventListener('DOMContentLoaded', function() {
  const serviceTabs = document.querySelectorAll('.service-tab');
  const serviceContents = document.querySelectorAll('.service-content');
  
  serviceTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      serviceTabs.forEach(t => t.classList.remove('active-tab'));
      serviceContents.forEach(c => c.classList.remove('active-content'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active-tab');
      serviceContents[index].classList.add('active-content');
    });
  });
});
```

## Converting Images

Upload all images used in the React app to the WordPress media library. You can then use these images in your Elementor sections.

## Contact Form Integration

For the contact form:
1. Use Elementor Pro Forms widget or a plugin like Contact Form 7
2. Style the form to match the design
3. Configure form submissions to send to your email
4. Add validation and success/error messages

## Mobile Responsiveness

Elementor has built-in responsive design features. Make sure to:
1. Check each section on mobile and tablet views
2. Adjust spacing, font sizes, and layouts as needed
3. Use Elementor's responsive controls to hide/show elements on different devices

## Performance Optimization

1. Optimize images using a plugin like Smush or ShortPixel
2. Use a caching plugin like WP Rocket or W3 Total Cache
3. Consider a CDN for better global performance
4. Minimize the use of external scripts and unnecessary plugins
