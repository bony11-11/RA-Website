import React from "react";

const About = () => {
	return (
		<section className="py-16 md:py-24" id="about">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center fade-in-on-scroll">
				<div className="relative">
					<img
						className="rounded-lg w-full h-auto object-cover border-2 border-primary/20"
						data-alt="A professional and diverse team collaborating in a modern office environment."
						src="/lovable-uploads/756ff86f-5dbc-4c7e-8f2a-4b389e0297c4.png"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
						Trusted Since <span className="text-primary">1986</span>
					</h2>
					<p className="text-text-dark/80 text-lg">
						For over three decades, RA Tents has been at the forefront of
						designing and manufacturing premium tent solutions that combine
						aesthetic appeal with unmatched functionality.
					</p>
					<p className="text-text-dark/80">
						We specialize in various gazebo tents, including Ramadan tents and
						parking sheds, all crafted with meticulous attention to detail and
						designed to withstand the test of time.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
