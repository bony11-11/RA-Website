import React from "react";

const Clients = () => {
	return (
		<section className="py-16 md:py-24" id="clients">
			<div className="text-center pb-16 fade-in-on-scroll">
				<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
					Our <span className="text-primary">Premium</span> Tent Solutions
				</h2>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 fade-in-on-scroll">
				<img
					className="h-24 opacity-70 invert brightness-150 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
					data-alt="Client Logo 1"
					src="/lovable-uploads/d2-Mejorado_MAX.png"
				/>
				<img
					className="h-24 opacity-70 invert brightness-150 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
					data-alt="Client Logo 2"
					src="/lovable-uploads/d8-Mejorado_MAX.png"
				/>
				<img
					className="h-24 opacity-70 invert brightness-150 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
					data-alt="Client Logo 3"
					src="/lovable-uploads/b10-Mejorado_MAX.png"
				/>
			</div>
		</section>
	);
};

export default Clients;
