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
            {/* Cartoon Style Professional Avatar */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_25px_#00abf0] overflow-hidden bg-[#112e42] relative">
              <Image 
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=NimraTech&style=circle&backgroundColor=112e42" 
                alt="Nimra Cartoon Avatar" 
                fill
                sizes="(max-width: 768px) 288px, 384px"
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

      {/* ... Remaining sections (Education, Skills, Services, Contact, Footer) stay identical to your provided code ... */}

    </div>
  );
}
