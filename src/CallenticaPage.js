import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CallenticaPage() {
	const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="text-gray-800">
	      {/* Navigation Bar */}
		<nav className="bg-white shadow px-6 py-4 sticky top-0 z-50">
		  <div className="flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center gap-2">
			  <img src="/chip.png" alt="Logo" className="h-12 w-12" />
			  <span className="font-extrabold text-lg text-green-800">SaskTech Lab</span>
			</div>

			{/* Mobile Menu Toggle */}
			<div className="md:hidden">
			  <button onClick={() => setMobileOpen(!mobileOpen)} className="focus:outline-none">
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
					d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			  </button>
			</div>

			{/* Desktop Links */}
			<ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
			  <li><Link to="/" className="hover:text-green-700">Home</Link></li>
			  <li><Link to="/about" className="hover:text-green-700">About Us</Link></li>
			  <li className="relative group">
				 <button className="hover:text-green-700">Services</button>
				  <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded py-2 w-64 z-50">
					<li>
					  <Link to="/services" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">
						All Services
					  </Link>
					</li>
					<li>
					  <Link to="/callentica" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800">
						Callentica – AI Voice Assistant
					  </Link>
					</li>
				 </ul>
			  </li>
			  <li><Link to="/ourmodel" className="hover:text-green-700">Our Model</Link></li>
			  <li><Link to="/projects" className="hover:text-green-700">Projects</Link></li>
			  <li><Link to="/careers" className="hover:text-green-700">Careers</Link></li>
			  <li><Link to="/contact" className="hover:text-green-700">Contact</Link></li>
			</ul>

			{/* CTA Button */}
			<div className="hidden md:block">
			  <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 text-sm">
				Work With Us
			  </button>
			</div>
		  </div>

		  {/* Mobile Menu Items */}
		  {mobileOpen && (
			<div className="mt-4 md:hidden flex flex-col gap-4 text-sm font-medium text-gray-800">
			  <Link to="/" className="hover:text-green-700">Home</Link>
			  <Link to="/about" className="hover:text-green-700">About Us</Link>
			  <Link to="/services" className="hover:text-green-700">Services</Link>
			  <Link to="/ourmodel" className="hover:text-green-700">Our Model</Link>
			  <Link to="/projects" className="hover:text-green-700">Projects</Link>
			  <Link to="/careers" className="hover:text-green-700">Careers</Link>
			  <Link to="/contact" className="hover:text-green-700">Contact</Link>
			  <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 text-sm">
				Work With Us
			  </button>
			</div>
		  )}
		</nav>
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Collentica – The AI Voice Assistant That Never Misses a Call
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Meet Collentica — our AI-powered voice assistant designed to handle customer calls 24/7 with natural, human-like conversation. Whether it’s answering questions, checking inventory, or taking orders, Collentica delivers personalized support—anytime, every time.
        </p>
        <p className="text-sm">📞 Try the Demo: +1 (581) 701-0001</p>
        <p className="text-sm mb-4">🌐 Visit Demo Site: <a href="https://reginaautoparts.azurewebsites.net" className="underline">reginaautoparts.azurewebsites.net</a></p>
        <Link to="/contact">
          <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
            Get Started
          </button>
        </Link>
      </section>

      {/* What is Collentica */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-800">What is Collentica?</h2>
        <p className="text-gray-700 mb-6">
          Collentica is SaskTechLab’s intelligent AI Voice Assistant built for businesses in Saskatchewan. It simulates a real phone conversation using advanced large language models (LLMs), offering a 24/7 automated customer service solution.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Answers incoming calls any time</li>
          <li>Provides real-time information from your database</li>
          <li>Books appointments or takes orders</li>
          <li>Reduces missed calls and staff load</li>
          <li>Offers natural, friendly customer interactions</li>
        </ul>
      </section>

      {/* Live Demo Use Case */}
      <section className="bg-white py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Live Demo: Auto Parts Store Use Case</h2>
        <p className="text-gray-700 mb-4">When a user calls the demo number, Collentica:</p>
        <ol className="list-decimal ml-6 space-y-2 text-gray-700">
          <li>Greets the customer naturally</li>
          <li>Asks how it can assist</li>
          <li>Understands queries about auto parts</li>
          <li>Searches the database in real time</li>
          <li>Confirms availability and offers to place order</li>
          <li>Collects the customer’s name and address</li>
          <li>Completes the order and informs a human agent will follow up</li>
        </ol>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Coming Soon: Fast Food Drive-Thru Automation</h2>
        <p className="text-gray-700">Our next demo will showcase how Collentica can handle incoming drive-thru orders for fast food shops. Stay tuned!</p>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <img
          src="/callentica-how-it-works.png"
          alt="Collentica Call Flow Diagram"
          className="mx-auto w-full max-w-4xl shadow-lg rounded"
        />
      </section>

      {/* Tailored for Saskatchewan */}
      <section className="bg-white py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Tailored for Saskatchewan Businesses</h2>
        <p className="text-gray-700">
          From auto parts shops and clinics to ag suppliers and retail businesses, Collentica is designed to reduce missed calls, streamline operations, and enhance customer satisfaction—locally.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Interested in Trying Collentica?</h2>
        <p className="text-sm mb-4">Let us help you capture more customers and offer 24/7 service without added staffing costs.</p>
        <p className="text-sm">📧 Email: contact@sasktechlab.com</p>
        <p className="text-sm">📞 Phone: +1 (581) 701-0001</p>
        <p className="text-sm mb-6">🌐 Website: <a href="https://www.sasktechlab.com" className="underline">www.sasktechlab.com</a></p>
        <Link to="/contact">
          <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
            Book a Demo
          </button>
        </Link>
      </section>
    </div>
  );
}