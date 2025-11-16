import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
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
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your message. We'll be in touch shortly.",
      variant: "default"
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-16 md:py-24 fade-in-on-scroll" id="contact">
      <div className="bg-surface-dark rounded-xl p-8 md:p-12 border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-400 mt-3">
              Have a project in mind or want to learn more about our services? Fill out the form and our team will get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Label className="text-sm font-medium mb-1" htmlFor="name">Name</Label>
              <Input
                className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
                id="name"
                name="name"
                placeholder="John Doe"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <Label className="text-sm font-medium mb-1" htmlFor="company">Company</Label>
              <Input
                className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
                id="company"
                name="company"
                placeholder="Your Company Name"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <Label className="text-sm font-medium mb-1" htmlFor="email">Email</Label>
              <Input
                className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
                id="email"
                name="email"
                placeholder="you@company.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <Label className="text-sm font-medium mb-1" htmlFor="message">Message</Label>
              <Textarea
                className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors w-full md:w-auto self-end mt-2"
              type="submit"
            >
              <span className="truncate">Submit Inquiry</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
