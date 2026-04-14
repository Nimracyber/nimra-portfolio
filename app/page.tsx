export default function Home() {
  return (
    <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 scroll-smooth">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white/90 backdrop-blur-md sticky top-0 shadow-md z-50">
        <h2 className="text-2xl font-bold text-pink-600">Personal Portfolio</h2>
        <ul className="flex gap-5 text-sm md:text-base font-medium">
          <li><a href="#about" className="hover:text-pink-600 transition">About</a></li>
          <li><a href="#skills" className="hover:text-pink-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-600 transition">Projects</a></li>
          <li><a href="#resume" className="hover:text-pink-600 transition">Resume</a></li>
          <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
          Nimra Farooqi 
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Master&apos;s in Mathematics | Data Analyst | Digital Marketer | AI & Robotics Enthusiast
        </p>
        <a
          href="#contact"
          className="mt-6 px-6 py-3 rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-700 shadow-lg hover:scale-105 transition"
        >
          Hire Me
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6 relative">
            About Me
            <span className="block w-14 h-1 bg-pink-500 mx-auto mt-2 rounded"></span>
          </h2>
          <p className="text-bold center max-w-3xl mx-auto">
            Hello! I am Nimra Farooqi, a passionate professional with a Master's in Mathematics
            and certifications in Data Analytics, Digital Marketing, AI, and Robotics. I love
            combining analytical thinking, creativity, and technology to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
            My Skills
            <span className="block w-14 h-1 bg-pink-500 mx-auto mt-2 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Data Analytics",
              "Python & SQL",
              "Digital Marketing",
              "AI & Robotics",
              "Problem Solving",
              "Mathematics & Statistics",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-xl text-center shadow hover:-translate-y-2 hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
            Projects
            <span className="block w-14 h-1 bg-pink-500 mx-auto mt-2 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Analytics Dashboard Project",
              "Marketing Campaign Strategy",
              "AI Learning Project",
            ].map((project, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-xl text-center shadow hover:-translate-y-2 hover:scale-105 transition"
              >
                {project}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-purple-700 mb-10">
            Resume Highlights
            <span className="block w-14 h-1 bg-pink-500 mx-auto mt-2 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Master's in Mathematics",
              "Certified Data Analyst",
              "Digital Marketing Expert",
              "AI & Robotics Certified",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-pink-200 to-purple-200 p-6 rounded-xl text-center shadow hover:-translate-y-2 hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">
            Contact Me
            <span className="block w-14 h-1 bg-pink-500 mx-auto mt-2 rounded"></span>
          </h2>
          <p>Email: nimrafarooqi46@gmail.com</p>

          <div className="mt-6 flex justify-center gap-6 text-2xl text-pink-600">
            <a href="#" className="hover:text-purple-700 transition">📧</a>
            <a href="#" className="hover:text-purple-700 transition">💻</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 bg-pink-500 text-white mt-10">
        <p>© 2026 Nimra Farooqi | Driven by Mathematics, Powered by Data</p>
      </footer>

    </main>
  );
}