
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { href: "solutions", label: "Solutions" },
    { href: "clients", label: "Clients" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-surface-dark border-t border-gray-800 w-full mt-16">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <a className="flex items-center gap-3 text-text-dark" href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Corporate Inc.</h2>
          </a>
          <p className="text-sm text-text-dark/70 mt-4 max-w-sm">
            Empowering the public sector through innovative and secure technology solutions.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.href}>
                <a
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                  href={`#${link.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-2 text-sm text-text-dark/70">
            <li>123 Corporate Ave, Suite 500</li>
            <li>Innovate City, ST 12345</li>
            <li>contact@corporateinc.com</li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="bg-background-dark border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-text-dark/60">
          <p>© {new Date().getFullYear()} Corporate Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
