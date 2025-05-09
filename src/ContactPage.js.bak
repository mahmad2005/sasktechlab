import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
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

      {/* Contact Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Let’s discuss how we can work together to bring your ideas to life
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-4">
            Whether you're looking to discuss a potential project, explore career opportunities, or learn more about our mentorship program, we'd love to hear from you. Fill out the form, and our team will get back to you within 1–2 business days.
          </p>
          <ul className="text-sm text-gray-800 space-y-3">
            <li><strong>Visit Us</strong><br />I-4212 Castle Rd<br />Regina, SK S4S 4W1<br />Canada</li>
            <li><strong>Email Us</strong><br />info@sasktechlab.com</li>
            <li><strong>Call Us</strong><br />(306) 529-0274</li>
            <li><strong>Office Hours</strong><br />Mon–Fri: 9:00 AM – 5:00 PM CST<br />Weekends: Closed</li>
          </ul>
        </div>

        <div className="border p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded" />
            <input type="text" placeholder="Phone Number (Optional)" className="w-full border px-4 py-2 rounded" />
            <select className="w-full border px-4 py-2 rounded">
              <option>Select a subject</option>
              <option>Project Inquiry</option>
              <option>Career Opportunities</option>
              <option>Mentorship</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Tell us about your project, question, or request..." className="w-full border px-4 py-2 rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">Send Message</button>
          </form>
        </div>
      </section>

      {/* Help Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl font-bold mb-6 text-center">How Can We Help You?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Submit a Project",
              desc: "Have a project idea or technical challenge? Let’s discuss how our team can help bring your vision to life.",
              link: "Learn More →"
            },
            {
              title: "Join Our Team",
              desc: "Looking to start or advance your engineering career? Explore opportunities for recent graduates and professionals.",
              link: "View Opportunities →"
            },
            {
              title: "Become a Mentor",
              desc: "Experienced professional? Share your knowledge and help develop the next generation of engineering talent.",
              link: "Get Involved →"
            }
          ].map((item, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <h3 className="text-green-700 font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
              <p className="text-sm text-green-600 font-medium">{item.link}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-green-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-sm text-gray-700">
            <div>
              <strong>How does your project process work?</strong>
              <p>
                Our process begins with an initial consultation to understand your needs. We then assemble a team of junior talent and experienced mentors matched to your project requirements. After developing a detailed proposal and timeline, we execute the project with regular check-ins and updates. Our mentorship model ensures quality while developing our team members’ skills.
              </p>
            </div>
            <div>
              <strong>What types of projects do you take on?</strong>
              <p>
                We work on a wide range of projects across software development, hardware engineering, and IT solutions. This includes web and mobile applications, IT systems, electronic prototypes, cloud migrations, and more.
              </p>
            </div>
            <div>
              <strong>How do you ensure quality with junior team members?</strong>
              <p>
                Quality is ensured through our mentorship model, where experienced professionals guide and review the work of junior team members. We implement thorough quality assurance processes, regular code reviews, and testing protocols.
              </p>
            </div>
            <div>
              <strong>Can I hire your graduates for my company?</strong>
              <p>
                Yes! We’re open to our team members transitioning to opportunities with client companies after they’ve developed their skills with us. We’re happy to discuss potential talent pipeline arrangements with companies looking to hire skilled engineers.
              </p>
            </div>
          </div>
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
