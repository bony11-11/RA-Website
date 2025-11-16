
const About = () => {
  return (
    <section className="py-16 md:py-24 fade-in-on-scroll" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            className="rounded-lg w-full h-auto object-cover border-2 border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw5WFCBLwb_XMd6aAJtsgP3cIlxpsZ-1LVNhZ8hU00VcgYdI0cx-eMGMyAc7rFFih9hcqlA-o4ZPyvZMpsS5WNGV6ZtIdwoxK5z1CQQJMtmneeaNneVPWXCYysuYu8QxtiGyAX6jw53VnrwJQpAT3NwE-PyQfFTd2MCjQdJD-bjxgWqKL23UrbEiu5JdOTs0Y2oKv8M2FR2PpbJadVzvckpECNCk8AmggEg3w6Gkix2yZiTR1p9GDRpXUWnuh4TO_tapUbrzuTfFg"
            alt="A professional and diverse team collaborating in a modern office environment."
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
            <span className="text-primary">About</span> Corporate Inc.
          </h2>
          <p className="text-text-dark/80 text-lg">
            For over a decade, Corporate Inc. has been a trusted partner to public sector and enterprise clients, delivering transformative technology solutions that address the most complex challenges. Our mission is to empower organizations with the tools and expertise they need to operate more efficiently, securely, and effectively.
          </p>
          <p className="text-text-dark/80">
            We are a team of dedicated strategists, engineers, and support specialists committed to our clients' success. Our culture of innovation and integrity drives everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
