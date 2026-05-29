import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#09011a] text-white font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black">
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full bg-[#09011a]/90 backdrop-blur-md z-50 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-serif italic tracking-wide text-white hover:text-cyan-400 transition-colors">Nimra</a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-widest uppercase">
            <a href="#home" className="text-cyan-400 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skill</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Service</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6 max-w-6xl mx-auto smooth-scroll">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 md:order-1 space-y-6">
            <h3 class="text-xl font-medium tracking-wide">Hello, I'm</h3>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Nimra Farooqi</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              And I'm An <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">AI & Data Professional</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base max-w-lg">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO[cite: 18]. Passionate about leveraging quantitative analytics and machine learning tools to build high-performance data pipelines and computational systems.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="tel:03038859060" className="w-11 h-11 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-[#09011a] transition-all duration-300"><i className="fas fa-phone"></i></a>
              <a href="#" className="w-11 h-11 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-[#09011a] transition-all duration-300"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-11 h-11 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-[#09011a] transition-all duration-300"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,229,255,0.3)] overflow-hidden bg-gradient-to-b from-[#0f052b] to-[#09011a] flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" alt="Nimra Portrait" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#09011a] to-[#0f052b] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-96 md:h-[450px] rounded-2xl border-2 border-cyan-400/50 overflow-hidden shadow-2xl shadow-cyan-400/10">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold border-b-2 border-cyan-400 inline-block pb-2 tracking-wide">ABOUT ME</h2>
            <p className="text-gray-300 leading-relaxed">
              As a dedicated professional with a strong foundation in <strong className="text-cyan-400">M.Sc. Mathematics</strong>, I specialize in translating logical frameworks into advanced technology paradigms[cite: 18, 23]. My training across professional development initiatives equips me with skills spanning automated systems, technical optimization, and predictive analytics[cite: 18, 20].
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond algorithmic tasks, I bring hands-on experience handling complex operational tasks safely and systematically through field research engagements with the International Research Force (IRF) in Islamabad[cite: 19, 37]. 
            </p>
            <div className="flex space-x-12 pt-4">
              <div>
                <span className="text-4xl font-extrabold text-cyan-400">6+</span>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Certifications</p>
              </div>
              <div>
                <span className="text-4xl font-extrabold text-cyan-400">15+</span>
                <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">Core Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TIMELINE */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold inline-block border-b-2 border-cyan-400 pb-2 tracking-wide">Education & Trainings</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Education</h3>
            <div className="relative border-l-2 border-cyan-400/30 pl-6 ml-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-cyan-400 w-4 h-4 rounded-full border-4 border-[#09011a]"></div>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full font-mono">Masters</span>
                <h4 className="text-xl font-semibold mt-2">M.Sc. Mathematics</h4>
                <p className="text-gray-400 text-sm">Advanced Analytical & Quantitative Modeling[cite: 23].</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-cyan-400 w-4 h-4 rounded-full border-4 border-[#09011a]"></div>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full font-mono">Bachelors</span>
                <h4 className="text-xl font-semibold mt-2">B.Sc (Double Math Physics)</h4>
                <p className="text-gray-400 text-sm">Logic & Computational Physics Foundations[cite: 25].</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Trainings & Experience</h3>
            <div className="relative border-l-2 border-cyan-400/30 pl-6 ml-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-cyan-400 w-4 h-4 rounded-full border-4 border-[#09011a]"></div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-mono">Field Experience</span>
                <h4 className="text-xl font-semibold mt-2">Field Researcher</h4>
                <p className="text-cyan-400 text-sm font-medium">International Research Force (IRF), Islamabad [cite: 19, 37]</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-cyan-400 w-4 h-4 rounded-full border-4 border-[#09011a]"></div>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full font-mono">NAVTTC</span>
                <h4 className="text-xl font-semibold mt-2">AI & Robotics Certification</h4>
                <p className="text-gray-400 text-sm">Centre of Excellence, Islamabad[cite: 30]. Specialization in automation models.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-cyan-400 w-4 h-4 rounded-full border-4 border-[#09011a]"></div>
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full font-mono">CM Punjab</span>
                <h4 className="text-xl font-semibold mt-2">Advanced Data Analytics</h4>
                <p className="text-gray-400 text-sm">Chief Minister Punjab Skill Development Initiative[cite: 31]. End-to-end processing pipelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section id="services" className="py-24 bg-gradient-to-b from-[#0f052b] to-[#09011a] px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 class="text-4xl font-bold inline-block border-b-2 border-cyan-400 pb-2 tracking-wide mb-16">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#09011a] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">AI & Python Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building intelligent computer vision solutions and custom automated models engineered with python architectures[cite: 18, 32].
              </p>
            </div>
            <div className="bg-[#09011a] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">Data Science Pipelines</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Extracting core statistical insights and engineering data-driven platforms native to mathematical theories[cite: 18, 20].
              </p>
            </div>
            <div className="bg-[#09011a] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">Technical SEO & Audits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Optimizing discoverability footprint structures and handling organic page optimization algorithms effectively[cite: 18, 33].
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section id="contact" className="py-20 border-t border-gray-800 text-center px-6">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Turn Your Vision Into Reality</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-sm mb-6">
          Leverage specialized data frameworks and computational expertise to accelerate your organizational growth objectives[cite: 20].
        </p>
        <a href="mailto:nimra.farooqi@example.com" className="bg-cyan-400 text-[#09011a] px-8 py-3 rounded-full font-bold shadow-lg shadow-cyan-400/20 hover:bg-white hover:scale-105 transition-all inline-block">
          Contact Me
        </a>
      </section>
    </div>
  );
}
