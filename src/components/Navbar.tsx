import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: "solutions", label: "Solutions" },
    { href: "clients", label: "Clients" },
    { href: "about", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap bg-background-dark/80 backdrop-blur-sm border-b border-gray-800/50" id="header">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
        <a className="flex items-center gap-3 text-text-dark" href="#hero">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">Corporate Inc.</h2>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href={`#${link.href}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
            <span className="truncate">Request a Consultation</span>
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-text-dark gap-2 text-sm font-bold min-w-0 px-2.5">
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-surface-dark border-l border-gray-800/50 w-full max-w-xs p-6">
              <nav className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a key={link.href} className="text-lg font-medium text-gray-300 hover:text-primary transition-colors text-left" href={`#${link.href}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}>
                    {link.label}
                  </a>
                ))}
                 <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors mt-6" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
                    <span className="truncate">Request a Consultation</span>
                 </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
