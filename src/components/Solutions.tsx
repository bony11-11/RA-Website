import React from "react";

const Solutions = () => {
	return (
		<section className="py-16 md:py-24" id="solutions">
			<div className="text-center pb-16 fade-in-on-scroll">
				<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
					<span className="text-primary">Our</span> Specialized Services
				</h2>
				<p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
					Crafting exceptional structures that combine aesthetics with
					functionality
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-on-scroll">
				<div className="group flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary">
					<span className="material-symbols-outlined text-primary-accent text-4xl">
						villa
					</span>
					<h3 className="text-lg font-bold leading-tight text-white">
						Tent Solutions
					</h3>
					<p className="text-text-dark/70 text-sm font-normal leading-normal">
						Tailored tent designs for every occasion, from intimate gatherings
						to grand celebrations.
					</p>
					<a
						className="text-primary font-bold text-sm mt-auto self-start group-hover:underline"
						href="#"
					>
						Learn More
					</a>
				</div>
				<div className="group flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary">
					<span className="material-symbols-outlined text-primary-accent text-4xl">
						deck
					</span>
					<h3 className="text-lg font-bold leading-tight text-white">
						Internal Finishing
					</h3>
					<p className="text-text-dark/70 text-sm font-normal leading-normal">
						Elegance and durability perfect for every occasion.
					</p>
					<a
						className="text-primary font-bold text-sm mt-auto self-start group-hover:underline"
						href="#"
					>
						Learn More
					</a>
				</div>
				<div className="group flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary">
					<span className="material-symbols-outlined text-primary-accent text-4xl">
						garage
					</span>
					<h3 className="text-lg font-bold leading-tight text-white">
						Parking Sheds
					</h3>
					<p className="text-text-dark/70 text-sm font-normal leading-normal">
						Protect vehicles with our reliable parking shed designs, built for
						longevity.
					</p>
					<a
						className="text-primary font-bold text-sm mt-auto self-start group-hover:underline"
						href="#"
					>
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
