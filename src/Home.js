export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SaskTech Lab</h1>
        <p className="text-xl md:text-2xl mb-8">
          Innovative Hardware and Software Solutions for Modern Industries
        </p>
        <button className="bg-white text-green-900 px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          Saskatchewan technology Lab (SaskTech Lab) is a Regina-based engineering company providing end-to-end
          solutions in software development, hardware engineering, and IT services.
          We are dedicated to driving innovation through technology tailored for
          industrial success. 
        </p>
      </section>
	  
	  {/* Team Section */}
	  <section className="bg-white py-16">
		  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Team</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
			  
			  {/* Maruf Ahmad */}
			  <div className="bg-gray-50 shadow-lg rounded-2xl p-6 text-center">
				<h3 className="text-xl font-semibold text-gray-800">Maruf Ahmad</h3>
				<p className="text-green-700 font-medium mt-1">Operation Lead</p>
				<p className="text-sm text-gray-600 mt-2">MASc in Electronic Systems Engineering,<br />University of Regina</p>
			  </div>

			  {/* Mahibul Hasan */}
			  <div className="bg-gray-50 shadow-lg rounded-2xl p-6 text-center">
				<h3 className="text-xl font-semibold text-gray-800">Mahibul Hasan</h3>
				<p className="text-green-700 font-medium mt-1">Dev-ops Lead</p>
				<p className="text-sm text-gray-600 mt-2">MASc in Computer Science & Engineering,<br />University of Regina</p>
			  </div>

			  {/* SK Kafi Ahmed */}
			  <div className="bg-gray-50 shadow-lg rounded-2xl p-6 text-center">
				<h3 className="text-xl font-semibold text-gray-800">SK Kafi Ahmed</h3>
				<p className="text-green-700 font-medium mt-1">Advisor</p>
				<p className="text-sm text-gray-600 mt-2">
				  FEA - Design Engineer at Brandt<br />
				  MASc in Industrial Systems Engineering,<br />University of Regina<br />
				  Aeronautical Engineer
				</p>
			  </div>

			</div>
		  </div>
		</section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Software Engineering",
              items: [
                "Web App Development",
                "Desktop Software Development",
                "Mobile App Development",
                "LLM Integration",
                "IoT Integration",
              ],
            },
            {
              title: "Hardware Engineering",
              items: [
                "Industrial Design",
                "Mechanical Design",
                "IoT and Automation",
                "Electrical & Firmware",
                "PCB Design",
                "Prototyping",
                "Research and Development",
              ],
            },
            {
              title: "IT Solutions",
              items: [
                "IT Consulting",
                "IT Management",
                "Security",
                "Cloud Solutions",
              ],
            },
          ].map((section, i) => (
            <div key={i} className="p-6 shadow-md rounded bg-white">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="list-disc ml-5 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center mb-4">Let's bring your ideas to life. Reach out today.</p>
        <form className="grid gap-4">
          <input
            className="border p-3 rounded"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border p-3 rounded"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="border p-3 rounded"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-900 text-white px-6 py-3 font-semibold rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} SaskTechLab. All rights reserved.
      </footer>
    </div>
  );
}
