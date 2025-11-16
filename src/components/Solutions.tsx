import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Solutions = () => {
  const solutions = [
    {
      icon: "groups",
      title: "Strategic Consulting",
      description: "Expert guidance to help you navigate complex challenges and achieve your strategic objectives.",
    },
    {
      icon: "model_training",
      title: "Digital Transformation",
      description: "Modernize your operations and services with our comprehensive digital solutions.",
    },
    {
      icon: "cloud_done",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure to power your mission-critical applications.",
    },
  ];

  return (
    <section className="py-16 md:py-24 fade-in-on-scroll" id="solutions">
      <div className="text-center pb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
          <span className="text-primary">Solutions</span> &amp; Services
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
          Comprehensive offerings designed to meet the unique challenges of the public and enterprise sectors.
        </p>
      </div>

      {/* Desktop View: Cards */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <div key={index} className="group flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary">
            <span className="material-symbols-outlined text-primary-accent text-4xl">{item.icon}</span>
            <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
            <p className="text-text-dark/70 text-sm font-normal leading-normal">{item.description}</p>
            <a className="text-primary font-bold text-sm mt-auto self-start group-hover:underline" href="#">
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Mobile View: Accordion */}
      <div className="sm:hidden flex flex-col gap-4">
        <Accordion type="single" collapsible className="w-full">
          {solutions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="group rounded-lg border border-gray-800 overflow-hidden bg-gray-900/50 mb-4">
              <AccordionTrigger className="flex cursor-pointer items-center justify-between p-4 list-none">
                  <h3 className="text-lg font-bold">{item.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="p-4 border-t border-gray-800">
                <p className="text-text-muted-dark mb-4">{item.description}</p>
                <a className="font-bold text-[var(--brand-gold)]" href="#">
                  Learn More
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Solutions;
