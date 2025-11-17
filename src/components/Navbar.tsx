import React from "react";

const Navbar = () => {
	return (
		<header
			className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap bg-background-dark/80 backdrop-blur-sm border-b border-gray-800/50"
			id="header"
		>
			<div className="flex items-center justify-between w-full max-w-6xl px-4 py-3">
				<a className="flex items-center gap-3 text-text-dark" href="#hero">
					<div className="size-6 text-primary">
						<img src="/lovable-uploads/77ebbfe7-c793-402b-bf43-de2b56f01dc1.png" />
					</div>
					<h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
						RA Tents
					</h2>
				</a>
				<div className="flex flex-1 justify-end items-center gap-8">
					<nav className="hidden md:flex items-center gap-8">
						<a
							className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
							href="#solutions"
						>
							Solutions
						</a>
						<a
							className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
							href="#clients"
						>
							Clients
						</a>
						<a
							className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
							href="#about"
						>
							About
						</a>
						<a
							className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
							href="#contact"
						>
							Contact
						</a>
					</nav>
					<a
						className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-black text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
						href="#contact"
					>
						<span className="truncate">Request a Consultation</span>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
