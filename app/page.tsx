import React from 'react';

export default function Home() {
  return (
    // Added 'relative' to the container and a fixed background layer
    <div className="relative min-h-screen font-sans antialiased text-[#edd4c2] selection:bg-cyan-500 selection:text-black">
      
      {/* FIXED BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* Dark Overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#081b29]/90"></div>
      </div>

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
            
            <div className="flex gap-4 pt-2 pb-4">
              <div className="w-16 h-16 rounded-full bg-[#00abf0]/20 border border-[#00abf0] flex items-center justify-center text-[#00abf0] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">AI</div>
              <div className="w-16 h-16 rounded-full bg-[#00abf0]/20 border border-[#00abf0] flex items-center justify-center text-[#00abf0] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">MATH</div>
              <div className="w-16 h-16 rounded-full bg-[#00abf0]/20 border border-[#00abf0] flex items-center justify-center text-[#00abf0] font-extrabold text-sm shadow-[0_0_15px_#00abf0]">SEO</div>
            </div>

            <p className="text-[#edd4c2]/80 leading-relaxed text-base">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about turning complex datasets and mathematical concepts into smart, automated systems.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="mailto:nimrafarooqi46@gmail.com" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"><i className="fas fa-envelope text-lg"></i></a>
              <a href="#!" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"><i className="fab fa-linkedin-in text-lg"></i></a>
              <a href="#!" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"><i className="fab fa-github text-lg"></i></a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.png" alt="Profile" className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_25px_#00abf0] object-cover" />
          </div>
        </div>
      </section>

      {/* Rest of your sections go here... */}
      
      <footer className="py-8 bg-[#081b29]/80 backdrop-blur text-center text-xs text-gray-500 border-t border-[#00abf0]/20">
        <p>&copy; 2026 Nimra Farooqi. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
