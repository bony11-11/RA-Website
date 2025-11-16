
const Clients = () => {
  const clientLogos = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCea7DpGDfvk7ifulJrzyyXEwy6CcepbVe9qwSuw3lJc25lk6RJJXUdkrjYz-s53iuzkjoTwojuIIUOk6slQJvKRXFxS5ehkNBP_TB8cpBWy2U4lY7qYHCGIiD2gLhmPHrRQeJW7K6NW7muiUaquNFcIBR7vY4Zre1hjvku-9nEDDHEFEEyKWya-Nzv_wF0zQ8KRaZShwgNTkoVXioJ03kJMXUzDX5VaJiTpKiiuiRPG08SlKsmRrAVTHbjFwVbPtQ00vSCue79O9s", alt: "Client Logo 1" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN-mbX1Xyq7pW2fwuFEZlRjV-TzlpQHMrhCx0RMl9Brw5p17gADA8mK4BvEY5jqkTz9Pwgye9-FepE2LFyWR2nAJaFmsFooxbBovyfJCNWFpTAh00wYGCWQOKrt2qFgNhjLnw_-Q4-kWY50YV-7Ul3hyPq6p61nfomQo525m8LR77DWYVRnJ87hBYhv2zeDtoEKdrBa6lJ3fiUJPVdRAq6_JjRjCD_ioHDoXqModNJsyw5Rwupn5cLswMIGhWVmTRHYp0Ji6irBvY", alt: "Client Logo 2" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpX2ZbpO3-SuY3vhEM8vSQVHGIGxohLfl3XSffSUfoEmeel10L_n97LoqfhIv5XWsYSwCjL8sCr7YBbqy2V7N6aZy40l6SxP4GKK_J9FOW_W3NHBscqSyyYjWRdnDFRmqMPQJHyvVaLNAa0kw68TtSTkbPPyHnrMEeYSiLjsH93STES6vA4IXhlflixaozLJVR2aR5KRvkBybZX1FilXOxCwL-P3r1oFcwm1AjngwGZrnSdloSOdq3b6mN3Hm2egnIWp5Rm4ldPI8", alt: "Client Logo 3" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAi4WxEkioFC1a05liD_RmcIecs9GlNHO-CdzhTSxu1e2R7f_TZm5-map5F_S7oiJtGcLLkXxC4u3V278WKN1UXzgu1W6huwZhvFtUWpCdAUsgLkkABOw718LE_rtfxGMJN6808kdAODbvrEy4heMsSDHzMcyCOmch1AJLws0NCi4tBHVJD4jwI2_fw-Clyo4eb-RFfLONDs3l48xk1g9hFiix2ZGOrV4c-TYHycLRRTSByF-zOEwB0ZzH76sEAVpDWvSYAeBgpO58", alt: "Client Logo 4" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqAZXgx80NAH89DmCWvdDoapA0NJKaxKYtMu3Z0rV7gtz8p02B3tgkIqvbOTtV3ND6NUcB7xyZiA4_0NTcKtdabCriGUFxSlyw6LLv5BAAkEu2oRv5gW3IswCAAdGEJdWi1HF6FlDU_K-bBIUmI_CkNKe6Bxz2p-614Jw0ptgALBynl4JfTcvB5S9Gc7OeUhYCQ6QEK0jIcB6viKTRydSO967a-Wo3DKQ1ya-RUWakB-86BSCuQY-ktAcmYEIA_7DwIkm4CPvrFqs", alt: "Client Logo 5" },
  ];

  return (
    <section className="py-16 md:py-24 fade-in-on-scroll" id="clients">
      <div className="text-center pb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
          Trusted by <span className="text-primary">Leading</span> Organizations
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            className="h-10 opacity-70 invert brightness-150 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
