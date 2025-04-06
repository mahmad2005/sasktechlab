import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CareersPage() {
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

      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Join Our Team</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Build your career through real-world projects and expert mentorship
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">Why Work With Us</h2>
        <p className="text-gray-700 mb-6">
          At SaskTech Lab, we’re not just offering jobs – we’re providing a unique career development opportunity. Our model is designed to bridge the gap between education and industry by giving recent graduates and early-career professionals the chance to work on real projects under the guidance of experienced mentors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            { title: "Real-World Projects", desc: "Work on actual client projects that solve real business problems, not simulations or training exercises." },
            { title: "Expert Mentorship", desc: "Learn directly from experienced professionals who provide guidance, feedback, and industry insights." },
            { title: "Diverse Experience", desc: "Gain exposure to different industries, technologies, and project types to build a well-rounded skill set." },
            { title: "Career Growth", desc: "Build a portfolio of real projects and develop the skills needed to advance your career." }
          ].map((item, i) => (
            <div key={i} className="border p-4 rounded">
              <h3 className="font-semibold text-green-700 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Program */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Our Development Program</h2>
        {[
          {
            stage: "Junior Associate (0–12 months)",
            points: [
              "Building technical fundamentals",
              "Learning industry best practices",
              "Developing professional communication",
              "Contributing to team projects"
            ]
          },
          {
            stage: "Associate (1–2 years)",
            points: [
              "Leading specific project components",
              "Developing specialized skills",
              "Contributing to project planning",
              "Mentoring newer team members"
            ]
          },
          {
            stage: "Senior Associate (2+ years)",
            points: [
              "Leading project teams",
              "Client communication and management",
              "Technical decision-making",
              "Mentoring junior team members"
            ]
          },
          {
            stage: "Career Advancement",
            points: [
              "Leadership roles within SaskTech Lab",
              "Transition to mentor/advisor roles",
              "Advanced positions at other companies",
              "Ongoing connection through our alumni network"
            ]
          }
        ].map((stage, idx) => (
          <div key={idx} className="bg-white shadow p-6 mb-6 rounded">
            <h3 className="font-bold text-green-700 mb-2">{idx + 1}. {stage.stage}</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {stage.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </section>

      {/* Current Opportunities */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6">Current Opportunities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Junior Software Developer */}
          <div className="border-t-4 border-green-600 shadow p-4 rounded">
            <h3 className="font-semibold text-lg">Junior Software Developer</h3>
            <p className="text-sm text-gray-600">Regina, SK (Hybrid) | Full-time</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Recent graduate in Computer Science or Software Engineering</li>
              <li>Basic knowledge of HTML, CSS, JavaScript</li>
              <li>Familiarity with Python, Java, or C#</li>
              <li>Eagerness to learn and grow</li>
              <li>Good communication and teamwork</li>
            </ul>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 text-sm rounded hover:bg-green-800">Apply Now</button>
          </div>

          {/* Junior Hardware Engineer */}
          <div className="border-t-4 border-green-600 shadow p-4 rounded">
            <h3 className="font-semibold text-lg">Junior Hardware Engineer</h3>
            <p className="text-sm text-gray-600">Regina, SK (On-site) | Full-time</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Recent graduate in Electrical Engineering or related field</li>
              <li>Knowledge of circuits and components</li>
              <li>PCB design familiarity</li>
              <li>IoT and embedded systems interest</li>
              <li>Hands-on problem solving</li>
            </ul>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 text-sm rounded hover:bg-green-800">Apply Now</button>
          </div>

          {/* IT Support Volunteer */}
          <div className="border-t-4 border-blue-600 shadow p-4 rounded">
            <h3 className="font-semibold text-lg">IT Support Volunteer</h3>
            <p className="text-sm text-gray-600">Regina, SK (Hybrid) | Part-time (5–10 hrs/week)</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>Basic computer/networking knowledge</li>
              <li>Interest in IT support</li>
              <li>3-month availability</li>
              <li>Good communication</li>
              <li>Commitment to service</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">Apply Now</button>
          </div>

          {/* Software Development Mentor */}
          <div className="border-t-4 border-purple-600 shadow p-4 rounded">
            <h3 className="font-semibold text-lg">Software Development Mentor</h3>
            <p className="text-sm text-gray-600">Remote (Occasional) | Part-time (5–10 hrs/week)</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li>5+ years software development experience</li>
              <li>Modern web tech stack familiarity</li>
              <li>Experience mentoring/leading</li>
              <li>Strong technical and teaching skills</li>
              <li>Passion for helping others grow</li>
            </ul>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 text-sm rounded hover:bg-purple-700">Apply Now</button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Don’t See a Perfect Fit?</p>
          <p className="text-sm text-gray-600 mb-4">We’re always looking for talented individuals. Send your resume and let us know how you’d like to contribute.</p>
          <button className="bg-green-700 text-white px-4 py-2 text-sm rounded hover:bg-green-800">Contact Us</button>
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
              <li><Link to="/careers">Careers</Link></li>
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