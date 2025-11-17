import React from "react";

const Differentiators = () => {
	return (
		<section className="py-16 md:py-24" id="differentiators">
			<div className="text-center pb-16 fade-in-on-scroll">
				<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
					<span className="text-primary">Customizable</span> Designs
				</h2>
				<p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
					Whether you're hosting a business event, a grand wedding, a product
					launch, or a community gathering, we have the perfect temporary
					structure to accommodate your guests in style and comfort.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-on-scroll">
				<div className="flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 text-center items-center">
					<span className="material-symbols-outlined text-primary text-4xl">
						design_services
					</span>
					<div className="flex flex-col gap-1">
						<h3 className="text-lg font-bold leading-tight text-white">
							Elegant Design
						</h3>
						<p className="text-text-dark/70 text-sm font-normal leading-normal">
							Our tents feature sophisticated aesthetics that elevate any event.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 text-center items-center">
					<span className="material-symbols-outlined text-primary text-4xl">
						settings
					</span>
					<div className="flex flex-col gap-1">
						<h3 className="text-lg font-bold leading-tight text-white">
							Customizable Features
						</h3>
						<p className="text-text-dark/70 text-sm font-normal leading-normal">
							Tailor your tent to your specific needs with various customization
							options.
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 rounded-lg bg-surface-dark border border-gray-800 p-6 text-center items-center">
					<span className="material-symbols-outlined text-primary text-4xl">
						shield
					</span>
					<div className="flex flex-col gap-1">
						<h3 className="text-lg font-bold leading-tight text-white">
							Weather Resistant
						</h3>
						<p className="text-text-dark/70 text-sm font-normal leading-normal">
							Our structures are engineered to withstand various weather
							conditions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Differentiators;
