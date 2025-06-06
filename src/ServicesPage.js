import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
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

      {/* Services Page Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-gray-600">Comprehensive engineering solutions delivered by our talented teams under expert guidance</p>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Engineering Excellence with a Purpose</h2>
        <p className="text-gray-700 mb-6">
          At SaskTech Lab, we provide comprehensive engineering services across software, hardware, and IT domains. What makes us unique is our delivery model: our services are provided by teams of talented recent graduates working under the guidance of experienced industry mentors.
        </p>
        <p className="text-gray-700">
          This approach ensures you receive high-quality solutions while supporting the development of the next generation of engineering talent. Our mentorship model combines fresh perspectives with proven expertise, resulting in innovative solutions that meet your specific needs.
        </p>
      </section>

      {/* Software Engineering */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Software Engineering</h2>
        <p className="text-gray-700 mb-4">
          Our software engineering team develops custom applications tailored to your specific business requirements. From web and mobile applications to desktop software and system integrations, we deliver solutions that drive efficiency and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Web App Development</h4>
            <p>Modern web applications built with frameworks like React, Angular, Vue.js, Node.js, Django, and Laravel.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Desktop Software Development</h4>
            <p>Powerful cross-platform apps using C#, Java, Python, Electron, Qt, and more.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Mobile App Development</h4>
            <p>iOS/Android apps using React Native, Flutter, Swift, and Kotlin.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">LLM Integration</h4>
            <p>Use OpenAI, Hugging Face, and custom LLMs for chatbots, content generation, and intelligent workflows.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 text-center mt-8">
          {['Requirements Analysis', 'Design & Architecture', 'Development & Testing', 'Deployment & Support'].map((step, i) => (
            <div key={i} className="bg-green-50 border border-green-200 rounded p-4">
              <h5 className="font-bold text-lg text-green-800">{i + 1}</h5>
              <p>{step}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">
            Discuss Your Software Project
          </button>
        </div>
      </section>

      {/* Hardware Engineering */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Hardware Engineering</h2>
        <p className="text-gray-700 mb-4">
          From concept to prototype to production, we bring your hardware ideas to life with a focus on functionality, manufacturability, and reliability.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Industrial Design</h4>
            <p>Using SolidWorks, Fusion 360, and AutoCAD to design for usability and aesthetics.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Mechanical Design</h4>
            <p>Stress-tested and cost-effective components built using simulation and optimization techniques.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">IoT and Automation</h4>
            <p>Solutions with Arduino, Raspberry Pi, RS232, and PLC integration for smart control systems.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">PCB Design</h4>
            <p>Altium Designer, KiCad, and Eagle used for schematic-to-board fabrication.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">
            Discuss Your Hardware Project
          </button>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">IT Solutions</h2>
        <p className="text-gray-700 mb-4">
          Comprehensive IT services including infrastructure planning, cloud solutions, cybersecurity, and ongoing IT management.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">IT Consulting</h4>
            <p>Strategic IT planning, technology adoption roadmaps, and digital transformation support.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">IT Management</h4>
            <p>Infrastructure support, monitoring, and proactive maintenance to ensure uptime and scalability.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Security</h4>
            <p>Security audits, vulnerability scanning, and best practices to safeguard data and systems.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-semibold">Cloud Solutions</h4>
            <p>Migration, scalability, and implementation using modern cloud technologies.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">
            Discuss Your IT Needs
          </button>
        </div>
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