
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ElementorContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Success!",
      description: "Your message has been sent. We'll get back to you soon.",
      variant: "default"
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="ra-contact-form">
      <h3 className="ra-form-title">Send Us a Message</h3>
      
      <form id="ra-contact-form" className="ra-form" onSubmit={handleSubmit}>
        <div className="ra-form-group">
          <label htmlFor="name" className="ra-form-label">
            Your Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="ra-form-input"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="ra-form-group">
          <label htmlFor="email" className="ra-form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="ra-form-input"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="ra-form-group">
          <label htmlFor="phone" className="ra-form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="ra-form-input"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="ra-form-group">
          <label htmlFor="message" className="ra-form-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="ra-form-textarea"
            placeholder="How can we help you?"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="ra-submit-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Send Message
        </button>
      </form>
      
      <div className="ra-quick-contact">
        <h4 className="ra-quick-title">Quick Contact</h4>
        <div className="ra-contact-links">
          <a 
            href="tel:+971501234567" 
            className="ra-contact-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+971 50 123 4567</span>
          </a>
          
          <a 
            href="https://wa.me/971501234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ra-contact-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>WhatsApp Us</span>
          </a>
          
          <a 
            href="mailto:info@ratents.com" 
            className="ra-contact-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>info@ratents.com</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Contact Form Styles */
        .ra-contact-form {
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(252, 192, 7, 0.2);
          border-radius: 8px;
          padding: 32px;
          max-width: 500px;
          margin: 0 auto;
        }

        .ra-form-title {
          font-size: 24px;
          font-weight: 700;
          color: #FCC007;
          margin-bottom: 24px;
        }

        .ra-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ra-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ra-form-label {
          font-size: 14px;
          font-weight: 500;
          color: white;
        }

        .ra-form-label .required {
          color: #FCC007;
        }

        .ra-form-input, .ra-form-textarea {
          width: 100%;
          padding: 12px 16px;
          background-color: rgba(10, 10, 10, 0.8);
          border: 1px solid rgba(252, 192, 7, 0.3);
          border-radius: 4px;
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .ra-form-input:focus, .ra-form-textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(252, 192, 7, 0.5);
        }

        .ra-form-textarea {
          resize: none;
          min-height: 120px;
        }

        .ra-submit-button {
          background-color: #FCC007;
          color: #030303;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .ra-submit-button:hover {
          background-color: #D9A206;
        }

        .ra-submit-button .icon {
          width: 20px;
          height: 20px;
        }

        .ra-quick-contact {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(252, 192, 7, 0.2);
        }

        .ra-quick-title {
          font-size: 18px;
          font-weight: 500;
          color: #FCC007;
          margin-bottom: 16px;
        }

        .ra-contact-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ra-contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .ra-contact-link:hover {
          color: #FCC007;
        }

        .ra-contact-link .icon {
          width: 20px;
          height: 20px;
          color: #FCC007;
        }
      `}</style>
    </div>
  );
};

export default ElementorContactForm;
