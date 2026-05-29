import React from 'react';

export default function Home() {
  // Production-safe high-quality vector illustration strings
  const professionalHeroAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23112e42'/><circle cx='50' cy='40' r='18' fill='%2300abf0'/><path d='M25 80c0-15 10-22 25-22s25 7 25 22z' fill='%2300abf0'/><circle cx='50' cy='40' r='14' fill='%23edd4c2'/><path d='M38 40q12 5 24 0' fill='none' stroke='%23081b29' stroke-width='1.5'/><path d='M35 34h8m14 0h8' fill='none' stroke='%23081b29' stroke-width='1.5'/><path d='M30 38c3-15 37-15 40 0z' fill='%23081b29'/><path d='M42 58v10l8 4 8-4V58z' fill='%23081b29'/><path d='M32 68l10-4 8 10 8-10 10 4v12H32z' fill='%23081b29'/></svg>";
  
  const professionalAboutAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23081b29'/><path d='M20 30h60v50H20z' fill='none' stroke='%2300abf0' stroke-width='2'/><path d='M30 45h40M30 55h30M30 65h20' stroke='%2300abf0' stroke-width='2' stroke-linecap='round'/><circle cx='70' cy='65' r='8' fill='%2300efff'/></svg>";

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
            <p className="text-[#edd4c2]/80 leading-relaxed text-base">
              A Mathematics graduate with strong technical skills in Artificial Intelligence, Data Analytics, and SEO. Passionate about turning complex datasets and mathematical concepts into smart, automated systems and impactful data-driven web solutions.
            </p>
