import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#081b29] text-[#edd4c2] font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full bg-[#081b29]/95 backdrop-blur-sm z-50 border-b border-[#00abf0]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-wider text-white hover:text-[#00abf0] transition-colors">Nimra.</a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-white">
            <a href="#home" className="text-[#00abf0] hover:text-[#00efff] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#00abf0] transition-colors">About</a>
            <a href="#education" className="hover:text-[#00abf0] transition-colors">Education</a>
            <a href="#skills" className="hover:text-[#00abf0] transition-colors">Skills</a>
            <a href="#services" className="hover:text-[#00abf0] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[#00abf0] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center pt-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Hi, {"I'm"}</h3>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">Nimra Farooqi</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-[#00abf0]">AI & Data Professional</h2>
            
            <p className="text-[#edd4c2]/80 leading-relaxed text-base">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about turning complex datasets and mathematical concepts into smart, automated systems and impactful data-driven web solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_25px_#00abf0] overflow-hidden bg-[#112e42] relative">
              <Image 
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=NimraTech&style=circle&backgroundColor=112e42" 
                alt="Nimra Cartoon Avatar" 
                fill 
                className="object-cover p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#112e42] px-6 border-t border-b border-[#00abf0]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-96 md:h-[420px] rounded-2xl border-2 border-[#00abf0] overflow-hidden shadow-xl bg-[#081b29] relative">
              <Image 
                src="https://api.dicebear.com/9.x/bottts/svg?seed=DataAI&backgroundColor=081b29" 
                alt="AI Bot Illustration" 
                fill 
                className="object-contain p-4"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-white tracking-wide">About <span className="text-[#00abf0]">Me</span></h2>
            <p className="text-white leading-relaxed">
              As a dedicated professional with a strong foundation in <strong className="text-[#00abf0]">M.Sc. Mathematics</strong>, I specialize in translating logical frameworks into advanced technology paradigms. My training across elite skill development initiatives equips me with expertise spanning data architecture, pipeline optimization, and AI solution prototyping.
            </p>
            <p className="text-white leading-relaxed">
              Beyond analytical tasks, I bring hands-on experience handling complex operational datasets safely and systematically, drawing from practical field operations with the International Research Force (IRF) in Islamabad.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION & EXPERIENCE TIMELINE SECTION */}
      <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">My <span className="text-[#00abf0]">Journey</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <div className="relative border-l-2 border-[#00abf0] pl-6 ml-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-[#00abf0] w-4 h-4 rounded-full border-4 border-[#081b29]"></div>
                <span className="text-xs text-[#00abf0] font-mono font-bold">Post-Graduation</span>
                <h4 className="text-xl font-bold text-white mt-1">M.Sc. Mathematics</h4>
                <p className="text-gray-400 text-sm mt-1">Advanced analytical reasoning, quantitative modeling, and structural logic application.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-[#00abf0] w-4 h-4 rounded-full border-4 border-[#081b29]"></div>
                <span className="text-xs text-[#00abf0] font-mono font-bold">Bachelors Degree</span>
                <h4 className="text-xl font-bold text-white mt-1">B.Sc (Double Math Physics)</h4>
                <p className="text-gray-400 text-sm mt-1">Foundational principles in computational mathematics and theoretical physical systems.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-[#00abf0] w-4 h-4 rounded-full border-4 border-[#081b29]"></div>
                <span className="text-xs text-[#00abf0] font-mono font-bold">Intermediate</span>
                <h4 className="text-xl font-bold text-white mt-1">F.Sc (Pre-Engineering)</h4>
                <p className="text-gray-400 text-sm mt-1">Core foundations in physical science, complex calculations, and engineering metrics.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Experience & Certifications</h3>
            <div className="relative border-l-2 border-[#00abf0] pl-6 ml-2 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-[#00abf0] w-4 h-4 rounded-full border-4 border-[#081b29]"></div>
                <span className="text-xs text-emerald-400 font-mono font-bold">Field Experience</span>
                <h4 className="text-xl font-bold text-white mt-1">Field Researcher</h4>
                <p className="text-[#00abf0] text-sm font-medium">International Research Force (IRF), Islamabad</p>
                <p className="text-gray-400 text-sm mt-1">Executing rigorous data collection paradigms, managing structural records, and implementing precise field operational protocols.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1 bg-[#00abf0] w-4 h-4 rounded-full border-4 border-[#081b29]"></div>
                <span className="text-xs text-[#00abf0] font-mono font-bold">Elite Training Certifications</span>
                <h4 className="text-xl font-bold text-white mt-1">Advanced Technology Programs</h4>
                <ul className="text-gray-400 text-sm mt-2 space-y-2 list-disc list-inside">
                  <li>Artificial Intelligence & Robotics — <span className="text-white">NAVTTC Centre of Excellence, Islamabad</span></li>
                  <li>Advanced Data Analytics — <span className="text-white">Chief Minister Punjab Skill Development Initiative</span></li>
                  <li>Artificial Intelligence & Python — <span className="text-white">DigiSkills Training Program</span></li>
                  <li>SEO (Search Engine Optimization) — <span className="text-white">DigiSkills Training Program</span></li>
                  <li>Certified Freelancing & MS Office Suite — <span className="text-white">PFTP Training Program</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS GRID */}
      <section id="skills" className="py-24 bg-[#112e42] px-6 border-t border-[#00abf0]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-white mb-16">Technical <span className="text-[#00abf0]">Skills</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Python Core', 'Artificial Intelligence', 'Data Analytics', 'SEO Optimization'].map((skill, index) => (
              <div key={skill} className="bg-[#081b29] p-6 rounded-xl border border-gray-800 text-center hover:border-[#00efff] hover:shadow-[0_0_15px_#00abf0] transition-all duration-300">
                <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4 relative" style={{ background: 'conic-gradient(#00abf0 320deg, #112e42 0deg)' }}>
                  <div className="w-20 h-20 bg-[#081b29] rounded-full flex items-center justify-center">
                    <span className="font-bold text-lg text-[#00abf0]">90%</span>
                  </div>
                </div>
                <h4 className="font-bold text-white">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">Our <span className="text-[#00abf0]">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#112e42] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 hover:border-[#00efff] hover:shadow-[0_0_15px_#00abf0]">
            <h3 className="text-2xl font-bold mb-3 text-white">AI & Python Solutions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Building intelligent computer vision solutions and custom automated models engineered with robust python backend frameworks.</p>
          </div>
          <div className="bg-[#112e42] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 hover:border-[#00efff] hover:shadow-[0_0_15px_#00abf0]">
            <h3 className="text-2xl font-bold mb-3 text-white">Data Analytics</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Extracting core statistical insights and engineering data-driven platforms natively grounded in complex mathematical logical theories.</p>
          </div>
          <div className="bg-[#112e42] p-8 rounded-2xl border border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300 hover:border-[#00efff] hover:shadow-[0_0_15px_#00abf0]">
            <h3 className="text-2xl font-bold mb-3 text-white">Technical SEO</h3>
            <p className="text-gray-300 text-sm leading-relaxed">Optimizing structural configurations footprint, code minification setups, and handling organic ranking algorithms seamlessly.</p>
          </div>
        </div>
      </section>

      {/* CONTACT BANNER SECTION */}
      <section id="contact" className="py-24 bg-[#112e42] border-t border-[#00abf0]/20 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-extrabold text-white">Contact <span className="text-[#00abf0]">Me!</span></h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-[#081b29] text-center text-xs text-gray-500 border-t border-gray-900">
        <p>&copy; 2026 Nimra Farooqi. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
