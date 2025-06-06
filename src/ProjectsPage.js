import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
	const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="text-gray-800">
      {/* Navigation Bar */}
	<nav className="bg-white shadow px-6 py-4 sticky top-0 z-50">
	  <div className="flex items-center justify-between">
		{/* Logo */}
		<Link to="/">
		  <div className="flex items-center gap-2">
		    <img src="/chip.png" alt="Logo" className="h-12 w-12" />
			<span className="font-extrabold text-lg text-green-800">SaskTech Lab</span>
		   </div>
		</Link>

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
		  <Link to="/ourmodel" className="hover:text-green-700">Our Model</Link>
		  <Link to="/projects" className="hover:text-green-700">Projects</Link>
		  <Link to="/careers" className="hover:text-green-700">Careers</Link>
		  <Link to="/contact" className="hover:text-green-700">Contact</Link>
		  <Link to="/contact">
		  <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 text-sm">
			Work With Us
		  </button>
		  </Link>
		</div>
	  )}
	</nav>

      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Our Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Innovative solutions delivered by our talented teams under expert guidance
        </p>
      </section>

      {/* Our Work */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">Our Work</h2>
        <p className="text-gray-700 mb-4">
          At SaskTech Lab, we take pride in the diverse range of projects we’ve successfully delivered across software, hardware, and IT domains. Each project represents not only a solution for our clients but also a learning opportunity for our team members.
        </p>
        <p className="text-gray-700 mb-6">
          Our portfolio includes both commercial projects for businesses and organizations as well as volunteer initiatives that support community needs. This mix allows us to provide varied experiences for our team while making a positive impact.
        </p>
        <p className="text-gray-700 mb-6">
          What makes our projects unique is our delivery model: each project is executed by a team of talented recent graduates working under the guidance of experienced industry mentors. This approach ensures quality deliverables while developing the next generation of engineering talent.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['All Projects', 'Software', 'Hardware', 'IT Solutions', 'Volunteer'].map(filter => (
            <button key={filter} className="bg-green-100 text-green-800 px-4 py-1 rounded text-sm hover:bg-green-200">
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Smart Agriculture Monitoring System",
              type: "Hardware & IT",
              category: "View Details"
            },
            {
              title: "Manufacturing Process Optimization",
              type: "Software",
              category: "View Details"
            },
            {
              title: "Healthcare Data Analytics Platform",
              type: "Software & Data",
              category: "View Details"
            },
            {
              title: "Renewable Energy Monitoring System",
              type: "Hardware & Software",
              category: "View Details"
            },
            {
              title: "Enterprise Cloud Migration",
              type: "IT Solutions",
              category: "View Details"
            },
            {
              title: "Community Resource Mapping App",
              type: "Software (Volunteer)",
              category: "View Details"
            }
          ].map((project, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm">
              <p className="text-xs text-gray-500 mb-1">{project.type}</p>
              <h4 className="font-bold text-lg mb-2">{project.title}</h4>
              <button className="text-green-600 text-sm hover:underline">{project.category}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project - Smart Agriculture Monitoring System */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-4">Smart Agriculture Monitoring System</h2>
        <p className="text-sm text-gray-500 mb-1">Hardware & IoT | 2024 | Client: AgriTech Solutions</p>

        <h3 className="font-semibold text-lg mt-6 mb-2">The Challenge</h3>
        <p className="text-gray-700 mb-4">
          AgriTech Solutions needed a comprehensive monitoring system for large-scale agricultural operations that could track soil moisture, temperature, humidity, and other critical parameters in real-time. The system needed to be energy-efficient, durable in outdoor conditions, and provide actionable insights to farmers.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-2">Our Approach</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Custom-designed sensor nodes powered by solar energy</li>
          <li>Low-power wireless communication network</li>
          <li>Central gateway for data collection and processing</li>
          <li>Cloud-based analytics platform</li>
          <li>Mobile application for monitoring and control</li>
        </ul>

        <h3 className="font-semibold text-lg mt-6 mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          {['Arduino', 'ESP32', 'LoRaWAN', 'MQTT', 'Node.js', 'React Native', 'AWS IoT'].map(tech => (
            <span key={tech} className="bg-gray-200 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>

        <h3 className="font-semibold text-lg mt-6 mb-2">Results</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>30% reduction in water usage through optimized irrigation</li>
          <li>Early detection of potential crop issues</li>
          <li>Comprehensive data collection for long-term agricultural planning</li>
          <li>User-friendly mobile interface for remote monitoring</li>
          <li>Scalable architecture that can accommodate farm expansion</li>
        </ul>

        <blockquote className="bg-green-50 border-l-4 border-green-600 text-green-800 italic p-4 mt-6">
          "The SaskTech Lab team delivered an impressive solution that exceeded our expectations. Their innovative approach combined with the mentorship model resulted in a system that has transformed our agricultural operations. We were particularly impressed by how they balanced technical excellence with practical usability."<br />
          <span className="not-italic font-semibold block mt-2">— Sarah Johnson, CTO, AgriTech Solutions</span>
        </blockquote>

        <h3 className="font-semibold text-lg mt-6 mb-2">Team Spotlight</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Michael Chen</p>
            <p>Recent graduate in Electronic Engineering<br />Led hardware design and sensor integration</p>
          </div>
          <div>
            <p className="font-semibold">Priya Sharma</p>
            <p>Recent graduate in Computer Engineering<br />Developed firmware and communication protocols</p>
          </div>
          <div>
            <p className="font-semibold">David Wilson</p>
            <p>Recent graduate in Software Engineering<br />Created cloud platform and mobile application</p>
          </div>
          <div>
            <p className="font-semibold">James Wilson</p>
            <p>Mentor: Hardware Engineering Advisor<br />Provided guidance on system architecture and implementation</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 py-10 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to Work With Us?</h2>
        <p className="text-gray-600 mb-4">Let's discuss how our team can help bring your project to life</p>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">Submit Your Project</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 text-sm mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">SaskTech Lab</h4>
            <p>Engineering solutions and talent development for modern industries.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ourmodel">Our Model</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>Software Engineering</li>
              <li>Hardware Engineering</li>
              <li>IT Solutions</li>
              <li>IoT Integration</li>
              <li>Prototyping</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>I-4212 Castle Rd<br />Regina, SK S4S 4W1<br />Canada</p>
            <p>Email: info@sasktechlab.ca<br />Phone: +1(581) 701-0001</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; 2025 SaskTech Lab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
