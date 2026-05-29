'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const aboutCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Safely wait until the component mounts in the browser
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // 1. Draw Professional Tech Avatar for Hero Section
    const heroCanvas = heroCanvasRef.current;
    if (heroCanvas) {
      const ctx = heroCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 200, 200);
        // Background Base Card
        ctx.fillStyle = '#112e42';
        ctx.fillRect(0, 0, 200, 200);
        // Glowing Outline Ring
        ctx.strokeStyle = '#00efff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(100, 100, 85, 0, Math.PI * 2);
        ctx.stroke();
        // Professional Attire / Suit
        ctx.fillStyle = '#081b29';
        ctx.beginPath();
        ctx.moveTo(40, 200);
        ctx.lineTo(160, 200);
        ctx.lineTo(140, 150);
        ctx.lineTo(60, 150);
        ctx.closePath();
        ctx.fill();
        // Face Structure
        ctx.fillStyle = '#edd4c2';
        ctx.beginPath();
        ctx.arc(100, 95, 35, 0, Math.PI * 2);
        ctx.fill();
        // Glasses
        ctx.strokeStyle = '#081b29';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(78, 85, 18, 14);
        ctx.strokeRect(104, 85, 18, 14);
        ctx.beginPath();
        ctx.moveTo(96, 92);
        ctx.lineTo(104, 92);
        ctx.stroke();
        // Confident Smile
        ctx.beginPath();
        ctx.arc(100, 105, 12, 0, Math.PI);
        ctx.stroke();
        // Hair Representation
        ctx.fillStyle = '#081b29';
        ctx.beginPath();
        ctx.arc(100, 80, 36, Math.PI, 0);
        ctx.lineTo(138, 120);
        ctx.lineTo(130, 120);
        ctx.lineTo(100, 75);
        ctx.lineTo(70, 120);
        ctx.lineTo(62, 120);
        ctx.closePath();
        ctx.fill();
      }
    }

    // 2. Draw Structured Analytics Representation for About Section
    const aboutCanvas = aboutCanvasRef.current;
    if (aboutCanvas) {
      const ctx = aboutCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 200, 200);
        // Base Panel
        ctx.fillStyle = '#081b29';
        ctx.fillRect(0, 0, 200, 200);
        // Mathematical Coordinate Grid
        ctx.strokeStyle = 'rgba(0, 171, 240, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 20; i < 200; i += 30) {
          ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 200); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(200, i); ctx.stroke();
        }
        // Trend Analysis Line
        ctx.strokeStyle = '#00efff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(30, 150);
        ctx.lineTo(70, 110);
        ctx.lineTo(110, 130);
        ctx.lineTo(170, 50);
        ctx.stroke();
        // Data Points
        ctx.fillStyle = '#ffffff';
        const points = [[30, 150], [70, 110], [110, 130], [170, 50]];
        points.forEach(([x, y]) => {
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
  }, [isMounted]);

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
            <div className="flex space-x-4 pt-4">
              <a href="mailto:nimrafarooqi46@gmail.com" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300 shadow-[0_0_15px_#00abf0]"><i className="fas fa-envelope text-lg"></i></a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"><i className="fab fa-linkedin-in text-lg"></i></a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#00abf0] flex items-center justify-center text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"><i className="fab fa-github text-lg"></i></a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-[#00abf0] shadow-[0_0_25px_#00abf0] overflow-hidden bg-[#112e42] flex items-center justify-center">
              {isMounted ? (
                <canvas ref={heroCanvasRef} width="200" height="200" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#112e42]" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-[#112e42] px-6 border-t border-b border-[#00abf0]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-80 md:w-96 md:h-[420px] rounded-2xl border-2 border-[#00abf0] overflow-hidden shadow-xl bg-[#081b29] flex items-center justify-center">
              {isMounted ? (
                <canvas ref={aboutCanvasRef} width="200" height="200" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#081b29]" />
              )}
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
          {/* Academic Background */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-graduation-cap text-[#00abf0] mr-3"></i>Education</h3>
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

          {/* Professional Experiences & Training */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4"><i className="fas fa-briefcase text-[#00abf0] mr-3"></i>Experience & Certifications</h3>
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
