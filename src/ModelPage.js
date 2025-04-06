import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ModelPage() {
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

      {/* Page Title */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Our Unique Model</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bridging the gap between education and industry through mentorship and real-world projects
        </p>
      </section>

      {/* The Experience Gap Challenge */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">The Experience Gap Challenge</h2>
        <h3 className="font-semibold text-lg mb-2">The Problem We're Solving</h3>
        <p className="text-gray-700 mb-6">
          Many talented graduates face a common paradox when entering the job market: they need experience to get a job, but need a job to gain experience. This "experience gap" creates challenges for both graduates and employers:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-1">For Graduates</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Difficulty finding meaningful first jobs</li>
              <li>Limited opportunities to apply theoretical knowledge</li>
              <li>Lack of industry-specific skills and practices</li>
              <li>Few chances to work with experienced professionals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">For Employers</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Risk in hiring inexperienced talent</li>
              <li>Resources required for training</li>
              <li>Productivity concerns during learning curve</li>
              <li>Difficulty assessing potential without track record</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dual-Purpose Model */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Our Solution: A Dual-Purpose Business Model</h2>
        <p className="text-gray-700 mb-6">
          SaskTech Lab addresses this challenge through a unique business model that balances commercial engineering services with structured talent development:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold">Commercial Services</h4>
            <p>We provide high-quality engineering solutions across software, hardware, and IT domains to clients, generating revenue while creating real-world project opportunities.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold">Talent Development</h4>
            <p>We hire recent graduates and provide them with structured opportunities to work on real projects under expert guidance, building their skills and experience.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold">Mentorship Network</h4>
            <p>Experienced industry professionals work with us as mentors and advisors, guiding junior team members and ensuring quality deliverables.</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold">Project Allocation</h4>
            <p>We maintain a mix of commercial and volunteer projects, allocating them based on team skills, interests, and development needs.</p>
          </div>
        </div>
      </section>

      {/* How Our Model Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">How Our Model Works</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-green-800 font-bold text-lg mb-1">1 Project Acquisition</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Commercial projects from businesses and organizations</li>
              <li>Volunteer initiatives with non-profits and community groups</li>
              <li>Research collaborations with educational institutions</li>
              <li>Internal product development projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-800 font-bold text-lg mb-1">2 Team Assembly</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Assessment of project requirements and complexity</li>
              <li>Matching of team member skills and development goals</li>
              <li>Assignment of appropriate mentor with relevant expertise</li>
              <li>Creation of balanced teams with complementary skills</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-800 font-bold text-lg mb-1">3 Mentored Execution</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Regular check-ins and reviews with mentors</li>
              <li>Structured knowledge transfer and skill development</li>
              <li>Progressive responsibility as competence develops</li>
              <li>Quality assurance through mentor oversight</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-800 font-bold text-lg mb-1">4 Skill Development Tracking</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Individual development plans for each team member</li>
              <li>Regular skill assessments and feedback</li>
              <li>Documentation of project contributions and achievements</li>
              <li>Portfolio development for career advancement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-800 font-bold text-lg mb-1">5 Career Progression</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Internal advancement opportunities for high performers</li>
              <li>Support for those seeking positions elsewhere</li>
              <li>Ongoing relationship through alumni network</li>
              <li>Potential transition to mentor roles as careers develop</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-4 text-center">Benefits for All Stakeholders</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold mb-2">For Clients</h4>
            <ul className="list-disc list-inside">
              <li>Fresh perspectives and innovative approaches</li>
              <li>Cost-effective solutions with quality assurance</li>
              <li>Supporting workforce development</li>
              <li>Access to diverse skill sets</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Graduates</h4>
            <ul className="list-disc list-inside">
              <li>Real-world project experience</li>
              <li>Mentorship from industry experts</li>
              <li>Portfolio development</li>
              <li>Professional network building</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Mentors</h4>
            <ul className="list-disc list-inside">
              <li>Opportunity to give back to the industry</li>
              <li>Leadership and teaching experience</li>
              <li>Exposure to new technologies and approaches</li>
              <li>Professional network expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="bg-green-50 py-10 text-center">
        <h2 className="text-xl font-bold mb-2">Join Our Mission</h2>
        <p className="text-gray-600 mb-4">Be part of our journey to transform engineering education and practice</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 text-sm">Work With Us</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">Join Our Team</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">Become a Mentor</button>
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
              <li><Link to="/model">Our Model</Link></li>
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