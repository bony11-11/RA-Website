const Hero = () => {
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

  return (
    <section className="py-16 md:py-32 fade-in-on-scroll" id="hero">
      <div className="min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center text-left p-8 md:p-16" style={{backgroundImage: 'linear-gradient(90deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ92KtwYY4Eu2a4djmNHxD6A2xv4vIcqg26PBgswrVl4QDOxzIKjoH3br0t4iOd7uu8PEOaLI7l29jaxHFxVA31-j40JuY7QWdWRhrJMlyGoDyDUvDvhXZJIdkVZLT4CBcf0_DdbqUkbbW6WmszhsA42ESJIFHH6ak_wo_N7kAiVkWJ6lMp2dF0tYLCPok1nsEg0mhxzfFKx8-DOIbfaYbVUSwViNuuycCeJQupaHYWSPMQtrM9CQlFyZX4kOR9uTOagT4pvF_1rE")'}}>
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
            Empowering <span className="text-primary">Public Sector</span> Innovation
          </h1>
          <h2 className="text-gray-300 text-base md:text-lg font-normal leading-normal">
            We provide cutting-edge solutions to drive efficiency and transformation for enterprise and government agencies.
          </h2>
        </div>
        <a
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors mt-6"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          <span className="truncate">Request a Consultation</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
