
const Differentiators = () => {
  const differentiators = [
    {
      icon: "query_stats",
      title: "Data-Driven Insights",
      description: "Leverage advanced analytics to make informed, strategic decisions that drive progress.",
    },
    {
      icon: "security",
      title: "Unmatched Security",
      description: "Our platforms are built with robust, enterprise-grade security to protect your most sensitive data.",
    },
    {
      icon: "support_agent",
      title: "Dedicated Support",
      description: "Receive unparalleled support from our team of experts dedicated to your success.",
    },
  ];

  return (
    <section className="py-16 md:py-24 fade-in-on-scroll" id="differentiators">
      <div className="text-center pb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
          <span className="text-primary">Our Key</span> Differentiators
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
          Discover the core strengths that set us apart and deliver exceptional value to our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {differentiators.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 text-center items-center">
            <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight text-white">{item.title}</h3>
              <p className="text-text-dark/70 text-sm font-normal leading-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differentiators;
