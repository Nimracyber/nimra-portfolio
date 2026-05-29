import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#081b29] text-[#edd4c2] font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full bg-[#081b29]/95 backdrop-blur-sm z-50 border-b border-[#00abf0]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wider text-white hover:text-[#00abf0] transition-colors">Nimra.</a>
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
            
            {/* Added Three Status Circles */}
            <div className="flex gap-4 pt-2 pb-4">
              <div className="w-14 h-14 rounded-full border-2 border-[#00abf0] flex items-center justify-center text-[#00abf0] font-bold text-xs bg-[#112e42]/50">AI</div>
              <div className="w-14 h-14 rounded-full border-2 border-[#00abf0] flex items-center justify-center text-[#00abf0] font-bold text-xs bg-[#112e42]/50">DATA</div>
              <div className="w-14 h-14 rounded-full border-2 border-[#00abf0] flex items-center justify-center text-[#00abf0] font-bold text-xs bg-[#112e42]/50">MATH</div>
            </div>

            <p className="text-[#edd4c2]/80 leading-relaxed text-base">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about turning complex datasets and mathematical concepts into smart, automated systems.
            </p>
          </div>

          {/* ABSTRACT TECH ILLUSTRATION - NO HUMAN FACE */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_25px_#00abf0] flex items-center justify-center bg-[#112e42]">
               <svg viewBox="0 0 100 100" className="w-48 h-48 text-[#00abf0]">
                  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4"/>
               </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#112e42] px-6 border-t border-b border-[#00abf0]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-96 md:h-[420px] rounded-2xl border-2 border-[#00abf0] flex items-center justify-center bg-[#081b29]">
               {/* ABSTRACT GRID ILLUSTRATION */}
               <svg viewBox="0 0 100 100" className="w-64 h-64 text-[#00abf0]">
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2"/>
                  <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="currentColor"/>
               </svg>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-white tracking-wide">About <span className="text-[#00abf0]">Me</span></h2>
            <p className="text-white leading-relaxed">
              As a dedicated professional with a strong foundation in <strong className="text-[#00abf0]">M.Sc. Mathematics</strong>, I specialize in translating logical frameworks into advanced technology paradigms.
            </p>
          </div>
        </div>
      </section>

      {/* ... (Keep the rest of your education, skills, services, and footer code here) ... */}
    </div>
  );
}
