import React from "react";

const Footer = () => {
	return (
		<footer className="bg-surface-dark border-t border-gray-800 w-full mt-16 fade-in-on-scroll">
			<div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
				<div className="col-span-1 md:col-span-2">
					<a className="flex items-center gap-3 text-text-dark" href="#hero">
						<div className="size-6 text-primary">
							<img src="/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png" />
						</div>
						<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
							RA Tents
						</h2>
					</a>
					<p className="text-sm text-text-dark/70 mt-4 max-w-sm">
						Specialized in premium tent solutions for over 36 years. Crafting
						exceptional structures that combine aesthetics with functionality.
					</p>
				</div>
				<div>
					<h3 className="font-bold mb-4 text-white">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<a
								className="text-sm text-gray-400 hover:text-primary transition-colors"
								href="#solutions"
							>
								Solutions
							</a>
						</li>
						<li>
							<a
								className="text-sm text-gray-400 hover:text-primary transition-colors"
								href="#clients"
							>
								Clients
							</a>
						</li>
						<li>
							<a
								className="text-sm text-gray-400 hover:text-primary transition-colors"
								href="#about"
							>
								About
							</a>
						</li>
						<li>
							<a
								className="text-sm text-gray-400 hover:text-primary transition-colors"
								href="#contact"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold mb-4 text-white">Contact Us</h3>
					<ul className="space-y-2 text-sm text-text-dark/70">
						<li>Office #123, Building Name, Street Name, City, Country</li>
						<li>sales@ratents.com</li>
						<li>(971) 50-697-9698</li>
					</ul>
				</div>
			</div>
			<div className="bg-background-dark border-t border-gray-800">
				<div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-text-dark/60">
					<p>© 2024 RA Tents. All rights reserved.</p>
					<div className="flex gap-4 mt-2 sm:mt-0">
						<a className="hover:text-primary transition-colors" href="#">
							Privacy Policy
						</a>
						<a className="hover:text-primary transition-colors" href="#">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
