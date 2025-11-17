import React from "react";

const Hero = () => {
	return (
		<section className="py-16 md:py-32" id="hero">
			<div
				className="min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center text-left p-8 md:p-16"
				data-alt="Abstract image of a modern office building with geometric lines, representing corporate innovation"
				style={{
					backgroundImage: `linear-gradient(90deg, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.1) 100%), url("/lovable-uploads/d9-Mejorado-Edit_MAX_optimized.png")`,
				}}
			>
				<div className="flex flex-col gap-4 max-w-2xl">
					<h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
						Quality <span className="text-primary">Tents</span> for Every{" "}
						<span className="text-primary">Event</span>
					</h1>
					<h2 className="text-gray-300 text-base md:text-lg font-normal leading-normal">
						From corporate events to wedding celebrations, we provide exceptional
						temporary structures tailored to your specific needs with superior
						craftsmanship.
					</h2>
				</div>
				<a
					className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors mt-6"
					href="#contact"
				>
					<span className="truncate">Get a Quote</span>
				</a>
			</div>
		</section>
	);
};

export default Hero;
