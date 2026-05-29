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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-xl font-medium tracking-wide">Hello, I'm</h3>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">Nimra Farooqi</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              And I'm An <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">AI & Data Professional</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base max-w-lg">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about leveraging quantitative analytics and machine learning tools to build high-performance data pipelines and computational systems.
            </p>
            
            {/* Displaying Email Explicitly in Hero Section */}
            <div className="flex items-center space-x-3 text-cyan-400 font-mono text-sm pt-2">
              <i className="fas fa-envelope text-base"></i>
              <span>nimrafarooqi46@gmail.com</span>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="mailto:nimrafarooqi46@gmail.com" className="w-11 h-11 rounded-full border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-[#09011a] transition-all duration-300"><i className="fas fa-envelope"></i></a>
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
              As a dedicated professional with a strong foundation in <strong className="text-cyan-400">M.Sc. Mathematics</strong>, I specialize in translating logical frameworks into advanced technology paradigms. My training across professional development initiatives equips me with skills spanning automated systems, technical optimization, and predictive analytics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond algorithmic tasks, I bring hands-on experience handling complex operational tasks safely and systematically through field research engagements with the International Research Force (IRF) in Islamabad.
            </p>
            <div className="flex space-x-12 pt-4">
              <div>
                <span className="text-4xl font-extrabold text-cyan-40
