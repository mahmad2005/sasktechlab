import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
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
		<Link to="/contact">
		  <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 text-sm">
			Work With Us
		  </button>
		</Link>
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

      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Engineering Solutions & Talent Development
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          SaskTech Lab delivers innovative engineering solutions while developing the next generation of tech talent through mentorship and real-world projects.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
			<Link to="/contact">
			  <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
				Submit a Project
			  </button>
			</Link>
			<Link to="/contact">
			  <button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700">
				Join Our Team
			  </button>
			</Link>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl font-bold mb-6">Our Unique Approach</h2>
        <p className="text-lg leading-relaxed">
          At SaskTech Lab, we’re not just another engineering company. We’re building a platform where recent graduates gain valuable industry experience while delivering high-quality solutions to our clients.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          Our dual mission combines professional engineering services with workforce development, creating a win-win for both clients and emerging talent.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          Through our mentorship model, experienced industry professionals guide our teams, ensuring quality deliverables while transferring valuable knowledge to the next generation.
        </p>
      </section>

      {/* Our Services */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Software Engineering",
              desc: "Custom software solutions designed to meet your specific business needs.",
              bullets: ["Web App Development", "Desktop Software Development", "Mobile App Development", "LLM Integration", "IoT Integration"],
            },
            {
              title: "Hardware Engineering",
              desc: "From concept to prototype to production, we bring your hardware ideas to life.",
              bullets: ["Industrial Design", "Mechanical Design", "IoT and Automation", "PCB Design", "Prototyping"],
            },
            {
              title: "IT Solutions",
              desc: "Comprehensive IT services to support your technology infrastructure.",
              bullets: ["IT Consulting", "IT Management", "Security", "Cloud Solutions"],
            },
          ].map((service, i) => (
            <div key={i} className="border rounded p-6 shadow-md bg-white text-left">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
              <ul className="list-disc text-sm ml-5 space-y-1">
                {service.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <button className="mt-6 px-5 py-2 rounded text-white font-semibold bg-green-700 hover:bg-green-800 text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">How We Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Project Intake", description: "We assess your needs and match them with the right team and mentors." },
            { title: "Team Assembly", description: "We pair junior talent with experienced mentors based on project requirements." },
            { title: "Guided Execution", description: "Our mentorship model ensures quality while developing new talent." },
            { title: "Delivery & Growth", description: "You receive quality solutions while contributing to workforce development." },
          ].map((step, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow">
              <div className="text-3xl font-bold text-green-700 mb-2">{i + 1}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Smart Agriculture Monitoring System",
              description: "IoT-based solution for real-time crop monitoring and automated irrigation",
            },
            {
              title: "Manufacturing Process Optimization",
              description: "Custom software solution that increased production efficiency by 35%",
            },
            {
              title: "Healthcare Data Analytics Platform",
              description: "Secure platform for healthcare providers to analyze patient outcomes",
            },
            {
              title: "Renewable Energy Monitoring System",
              description: "Hardware and software solution for solar farm performance tracking",
            },
          ].map((project, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <a className="text-sm text-green-600 hover:underline" href="/Contact">View Case Study →</a>
            </div>
          ))}
        </div>
        <button className="mt-6 px-5 py-2 rounded text-white font-semibold bg-green-700 hover:bg-green-800 text-sm">View All Projects</button>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">What People Say</h2>
        <div className="bg-gray-100 max-w-3xl mx-auto p-6 rounded shadow">
          <p className="italic text-gray-700">
            "Working with SaskTech Lab has been a game-changer for our business. Their team delivered a custom solution that perfectly addressed our needs, and we were impressed by their mentorship model that combines fresh perspectives with experienced oversight."
          </p>
          <p className="mt-4 font-semibold text-sm">Sarah Johnson</p>
          <p className="text-sm text-gray-500">CTO, AgriTech Solutions</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-xl font-semibold mb-6">Ready to Work With Us?</h2>
        <p className="mb-6 text-sm">Whether you need engineering solutions or want to join our talent development program</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/contact"><button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">Submit a Project</button></Link>
          <Link to="/contact"><button className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700">Join Our Team</button></Link>
          <Link to="/contact"><button className="bg-purple-600 px-6 py-3 rounded hover:bg-purple-700">Become a Mentor</button></Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold mb-2">SaskTech Lab</h4>
            <p>Engineering solutions and talent development for modern industries.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
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
