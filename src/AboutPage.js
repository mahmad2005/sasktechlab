import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
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
		  <li><Link to="/services" className="hover:text-green-700">Services</Link></li>
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

      {/* Hero */}
      <section className="py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">About SaskTech Lab</h1>
        <p className="text-gray-600 text-base md:text-lg">
          Bridging the gap between education and industry through innovative engineering solutions
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            SaskTech Lab was founded with a vision to address two critical challenges: providing high-quality engineering
            solutions to businesses while tackling the "experience gap" that many recent graduates face when entering the job market.
          </p>
          <p>
            Our founders, experienced engineers themselves, recognized that many talented graduates struggle to find
            meaningful employment due to lack of practical experience, while companies often hesitate to hire inexperienced
            talent despite their potential. This creates a paradoxical situation where graduates need experience to get hired,
            but need jobs to gain experience.
          </p>
          <p>
            SaskTech Lab was created as a solution to this problem. By establishing a company that combines commercial
            engineering services with a structured talent development program, we’ve created an environment where recent
            graduates can gain valuable industry experience while delivering real value to clients under the guidance of
            experienced professionals.
          </p>
          <p>
            Based in Regina, Saskatchewan, we’ve built a model that benefits all stakeholders: clients receive quality engineering
            solutions, graduates gain practical experience, and experienced professionals have the opportunity to share their
            knowledge while working on interesting projects.
          </p>
          <p>
            Today, SaskTech Lab continues to grow its impact, expanding both our service offerings and our talent development
            initiatives to create a sustainable pipeline of skilled engineers for the technology industry.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Our Approach</h2>
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-10">Dual-Purpose Business Model</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Client Projects",
              text: "We take on commercial engineering projects across software, hardware, and IT domains, generating revenue while providing real-world experience for our team.",
            },
            {
              title: "Mentorship Structure",
              text: "Experienced industry professionals work with us as mentors and advisors, guiding junior team members and ensuring quality deliverables.",
            },
            {
              title: "Talent Development",
              text: "Recent graduates work on real projects under guidance, building practical skills and professional experience.",
            },
            {
              title: "Project Allocation",
              text: "We maintain a mix of commercial and volunteer projects, allocating them based on team skills and development needs.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded shadow p-6">
              <h4 className="font-semibold text-lg mb-2 text-green-800">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Team</h2>
        <p className="text-gray-600 mb-12">Meet the people behind SaskTech Lab</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Maruf Ahmad",
              title: "Operation Lead",
              bio: "MASc in Electronic Systems Engineering, University of Regina",
              desc: "Maruf leads our operations and hardware engineering initiatives, bringing extensive experience in electronic systems design and project management.",
            },
            {
              name: "Mahibul Hasan",
              title: "DevOps Lead",
              bio: "MASc in Computer Science & Engineering, University of Regina",
              desc: "Mahibul oversees our DevOps practices and cloud infrastructure, ensuring seamless deployment and operation of our software solutions.",
            },
            {
              name: "Sajid Khan Shaon",
              title: "Software Development Lead",
              bio: "MASc in Software Systems Engineering, University of Regina",
              desc: "Sajid leads our software development initiatives, specializing in web applications, mobile development, and AI integration.",
            },
			{
              name: "S M Rizwan Islam Rhythm",
              title: "Front-End Developer | Business Analyst",
              bio: "MASc in Software Systems Engineering, University of Regina",
              desc: "Rizwan blends front-end skills with business insight to build intuitive and goal-driven user interfaces.",
            },
          ].map((person, i) => (
            <div key={i} className="bg-gray-50 shadow rounded p-6 text-left">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{person.name}</h4>
              <p className="text-green-700 font-medium text-sm mb-1">{person.title}</p>
              <p className="text-sm text-gray-600 mb-2">{person.bio}</p>
              <p className="text-sm text-gray-700">{person.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-xl font-bold mb-10">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-green-800 font-bold text-lg">
          <div><p className="text-3xl">25+</p><p className="text-sm text-gray-700 font-normal">Projects Completed</p></div>
          <div><p className="text-3xl">15+</p><p className="text-sm text-gray-700 font-normal">Graduates Supported</p></div>
          <div><p className="text-3xl">10+</p><p className="text-sm text-gray-700 font-normal">Industry Mentors</p></div>
          <div><p className="text-3xl">90%</p><p className="text-sm text-gray-700 font-normal">Client Satisfaction</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <h2 className="text-xl font-semibold mb-4">Join Our Mission</h2>
        <p className="text-sm text-gray-600 mb-6">Be part of our journey to transform engineering education and practice</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">Work With Us</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Join Our Team</button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">Become a Mentor</button>
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
            <p>2125 Victoria Avenue<br />Regina, SK S4P 0S4<br />Canada</p>
            <p>Email: info@sasktechlab.com<br />Phone: (306) 555-1234</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400">
          &copy; 2025 SaskTech Lab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}