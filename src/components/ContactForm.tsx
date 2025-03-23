
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
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

    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Success message
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
    <div className="glass-card p-6 md:p-8 rounded-lg max-w-md mx-auto lg:mx-0">
      <h3 className="text-2xl font-bold text-gold-500 mb-6">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Your Name <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-700/80 border border-gold-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-white"
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email Address <span className="text-gold-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-700/80 border border-gold-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-white"
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-700/80 border border-gold-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-white"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            Message <span className="text-gold-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-dark-700/80 border border-gold-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500/50 text-white resize-none"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full btn-primary flex items-center justify-center"
        >
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </button>
      </form>
      
      <div className="mt-8 pt-6 border-t border-gold-500/20">
        <h4 className="text-lg font-medium text-gold-500 mb-4">Quick Contact</h4>
        <div className="space-y-3">
          <a 
            href="tel:+971501234567" 
            className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors"
          >
            <Phone className="h-5 w-5 text-gold-500" />
            <span>+971 50 123 4567</span>
          </a>
          
          <a 
            href="https://wa.me/971501234567" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors"
          >
            <MessageSquare className="h-5 w-5 text-gold-500" />
            <span>WhatsApp Us</span>
          </a>
          
          <a 
            href="mailto:info@ratents.com" 
            className="flex items-center space-x-3 text-white hover:text-gold-500 transition-colors"
          >
            <Mail className="h-5 w-5 text-gold-500" />
            <span>info@ratents.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
