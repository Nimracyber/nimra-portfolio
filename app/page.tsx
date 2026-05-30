import React from 'react';

export default function Home() {
  return (
    <div 
      className="text-[#edd4c2] font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black"
      style={{
        backgroundImage: "linear-gradient(rgba(8, 27, 41, 0.85), rgba(8, 27, 41, 0.90)), url('/ales-nesetril-Im7lZjxeLhg-unsplash.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full bg-[#081b29]/80 backdrop-blur-md z-50 border-b border-[#00abf0]/20 px-6 py-4">
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
            
            {/* Filled Status Circles */}
            <div className="flex gap-4 pt-2 pb-4">
              <div className="w-16 h-16 rounded-full bg-[#00abf0] flex items-center justify-center text-[#081b29] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">AI</div>
              <div className="w-16 h-16 rounded-full bg-[#00abf0] flex items-center justify-center text-[#081b29] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">DATA</div>
              <div className="w-16 h-16 rounded-full bg-[#00abf0] flex items-center justify-center text-[#081b29] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">MATH</div>
            </div>

            <p className="text-[#edd4c2]/90 leading-relaxed text-base font-medium drop-shadow-md">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about turning complex datasets and mathematical concepts into smart, automated systems and impactful data-driven web solutions.
            </p>
            
            {/* SOCIAL LINKS */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="mailto:nimrafarooqi46@gmail.com" 
                className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300 shadow-[0_0_15px_#00abf0] bg-[#081b29]/50 backdrop-blur-sm"
                title="Email Me"
              >
                <i className="fas fa-envelope text-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/nimra-farooqi-3676ba26b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300 bg-[#081b29]/50 backdrop-blur-sm"
                title="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a 
                href="https://github.com/Nimracyber" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300 bg-[#081b29]/50 backdrop-blur-sm"
                title="GitHub Profile"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Cartoon Style Professional Avatar */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_35px_#00abf0] overflow-hidden bg-[#112e42]/80 backdrop-blur-md flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=NimraTech&style=circle&backgroundColor=transparent" alt="Nimra Cartoon Avatar" className="w-[90%] h-[90%] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#112e42]/60 backdrop-blur-sm px-6 border-t border-b border-[#00abf0]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Tech/AI Themed Cartoon Bot Image for the About Section */}
            <div className="w-72 h-80 md:w-96 md:h-[420px] rounded-2xl border-2 border-[#00abf0] overflow-hidden shadow-[0_0_20px_rgba(0,171,240,0.3)] bg-[#081b29]/80 backdrop-blur-sm flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
