'use client';
import React, { useEffect, useRef } from 'react';

export default function Home() {
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const aboutCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Draw Professional Tech Avatar for Hero Section
    const heroCanvas = heroCanvasRef.current;
    if (heroCanvas) {
      const ctx = heroCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 200, 200);
        // Background
        ctx.fillStyle = '#112e42';
        ctx.fillRect(0, 0, 200, 200);
        // Outer Glow Circle
        ctx.strokeStyle = '#00efff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(100, 100, 85, 0, Math.PI * 2);
        ctx.stroke();
        // Shoulders/Suit
        ctx.fillStyle = '#081b29';
        ctx.beginPath();
        ctx.moveTo(40, 200);
        ctx.lineTo(160, 200);
        ctx.lineTo(140, 150);
        ctx.lineTo(60, 150);
        ctx.closePath();
        ctx.fill();
        // Head / Face
        ctx.fillStyle = '#edd4c2';
        ctx.beginPath();
        ctx.arc(100, 95, 35, 0, Math.PI * 2);
        ctx.fill();
        // Professional Glasses
        ctx.strokeStyle = '#081b29';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(78, 85, 18, 14);
        ctx.strokeRect(104, 85, 18, 14);
        ctx.beginPath();
        ctx.moveTo(96, 92);
        ctx.lineTo(104, 92);
        ctx.stroke();
        // Smile
        ctx.beginPath();
        ctx.arc(100, 105, 12, 0, Math.PI);
        ctx.stroke();
        // Hair Style
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

    // 2. Draw Vector Data Analytics Art for About Section
    const aboutCanvas = aboutCanvasRef.current;
    if (aboutCanvas) {
      const ctx = aboutCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, 200, 200);
        // Dark Base Panel
        ctx.fillStyle = '#081b29';
        ctx.fillRect(0, 0, 200, 200);
        // Cyber Grid Lines
        ctx.strokeStyle = 'rgba(0, 171, 240, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 20; i < 200; i += 30) {
          ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 200); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(200, i); ctx.stroke();
        }
        // Glowing Growth Chart Line
        ctx.strokeStyle = '#00efff';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(30, 150);
        ctx.lineTo(70, 110);
        ctx.lineTo(110, 130);
        ctx.lineTo(170, 50);
        ctx.stroke();
        // Chart Nodes
        ctx.fillStyle = '#white';
        const points = [[30, 150], [70, 110], [110, 130], [170, 50]];
        points.forEach(([x, y]) => {
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
  }, []);

  return (
    <div className="bg-[#081b29] text-[#edd4c2] font-sans antialiased min-h-screen selection:bg-cyan-500 selection:text-black">
      
      {/* HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 w-full bg-[#081b29]/95 backdrop-blur-sm z-50 border-b border-[#00abf0]/20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wider text-white hover:text-[#00abf0] transition-colors">Nimra.</a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-white">
            <a href="#
