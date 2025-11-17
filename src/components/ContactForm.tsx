"use client";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

const ContactForm = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Form validation
		if (!formData.name || !formData.email || !formData.message) {
			toast({
				title: "Error",
				description: "Please fill out all required fields",
				variant: "destructive",
			});
			return;
		}

		// In a real application, you would send this data to your backend
		console.log("Form submitted:", formData);

		// Success message
		toast({
			title: "Success!",
			description: "Your message has been sent. We'll get back to you soon.",
			variant: "default",
		});

		// Reset form
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	return (
		<section className="py-16 md:py-24" id="contact">
			<div className="bg-surface-dark rounded-xl p-8 md:p-12 border border-gray-800 fade-in-on-scroll">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex flex-col justify-center">
						<h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
							Get in <span className="text-primary">Touch</span>
						</h2>
						<p className="text-gray-400 mt-3">
							Have a project in mind or want to learn more about our services?
							Fill out the form and our team will get back to you shortly.
						</p>
					</div>
					<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1" htmlFor="name">
								Name
							</label>
							<input
								className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
								id="name"
								name="name"
								placeholder="John Doe"
								type="text"
								value={formData.name}
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1" htmlFor="email">
								Email
							</label>
							<input
								className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
								id="email"
								name="email"
								placeholder="you@company.com"
								type="email"
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1" htmlFor="phone">
								Phone
							</label>
							<input
								className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
								id="phone"
								name="phone"
								placeholder="(123) 456-7890"
								type="tel"
								value={formData.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-sm font-medium mb-1" htmlFor="message">
								Message
							</label>
							<textarea
								className="w-full rounded-md border-gray-700 bg-background-dark focus:ring-primary focus:border-primary text-white"
								id="message"
								name="message"
								placeholder="How can we help you?"
								rows={4}
								value={formData.message}
								onChange={handleChange}
							></textarea>
						</div>
						<button
							className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-primary text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors w-full md:w-auto self-end mt-2"
							type="submit"
						>
							<span className="truncate">Submit Inquiry</span>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
