import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#05050a',
      color: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      lineHeight: '1.6',
      margin: 0,
      padding: 0
    }}>
      {/* Premium subtle background glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.03), transparent 40%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Navigation Bar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(5, 5, 10, 0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1e293b',
        zIndex: 100,
        padding: '1.25rem 2rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '0.5px', color: '#38bdf8' }}>
            NF<span style={{ color: '#6366f1' }}>.</span>
          </span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px' }}>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            <a href="#qualifications" style={{ color: '#94a3b8', textDecoration: 'none' }}>Expertise</a>
            <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
          </div>
        </div>
      </nav>

      {/* Main Framework Layout */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '5rem 2rem', position: 'relative', zIndex: 2 }}>
        
        {/* HERO INTRO */}
        <section id="about" style={{ paddingBottom: '5rem', borderBottom: '1px solid #1e293b' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.35rem 0.9rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '1.75rem', letterSpacing: '0.5px' }}>
            PORTFOLIO
          </div>
          
          <h1 style={{ fontSize: '4rem', fontWeight: '800', letterSpacing: '-0.04em', marginBottom: '1rem', lineHeight: '1.1' }}>
            <span style={{ background: 'linear-gradient(to right, #f8fafc, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nimra Farooqi</span>
          </h1>
          
          <h2 style={{ fontSize: '1.6rem', fontWeight: '500', color: '#38bdf8', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Masters in Mathematics &amp; AI Specialist
          </h2>
          
          <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '720px', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            A rigorous technical professional bridging advanced mathematical theory with digital application. Specialized in Artificial Intelligence computational architecture, practical Data Analytics workflow optimization, and search mechanics[cite: 18].
          </p>
        </section>

        {/* ACADEMIC & COURSES INFRASTRUCTURE */}
        <section id="qualifications" style={{ padding: '5rem 0', borderBottom: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '3rem', letterSpacing: '-0.02em', color: '#f1f5f9' }}>
            Core Qualifications &amp; Frameworks
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Academic Block */}
            <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: '700', letterSpacing: '1px', marginBottom: '0.5rem' }}>EDUCATION</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#f8fafc', marginBottom: '0.25rem' }}>M.Sc. Mathematics</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>University of Gujrat</p>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '1rem', lineHeight: '1.6' }}>
                Advanced training in mathematical modeling, computational logic, and systematic statistical processing frameworks.
              </p>
            </div>

            {/* Specializations Block */}
            <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '8px', padding: '2rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '700', letterSpacing: '1px', marginBottom: '1rem' }}>TECHNICAL CERTIFICATIONS</div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                <li style={{ borderLeft: '2px solid #334155', paddingLeft: '0.75rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>AI &amp; Robotics</strong> <br /> NAVTTC Centre of Excellence, Islamabad [cite: 30]
                </li>
                <li style={{ borderLeft: '2px solid #334155', paddingLeft: '0.75rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>Advanced Data Analytics</strong> <br /> Chief Minister Punjab Skill Development Initiative [cite: 31]
                </li>
                <li style={{ borderLeft: '2px solid #334155', paddingLeft: '0.75rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>Artificial Intelligence &amp; Python</strong> <br /> DigiSkills Training Program [cite: 32]
                </li>
                <li style={{ borderLeft: '2px solid #334155', paddingLeft: '0.75rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>Search Engine Optimization (SEO)</strong> <br /> DigiSkills Training Program [cite: 33]
                </li>
                <li style={{ borderLeft: '2px solid #334155', paddingLeft: '0.75rem' }}>
                  <strong style={{ color: '#cbd5e1' }}>Freelancing Professional &amp; MS Office</strong> <br /> PFTP Programs [cite: 34, 35]
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* EXPERIENCE BLOCK */}
        <section id="experience" style={{ padding: '5rem 0' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2.5rem', letterSpacing: '-0.02em', color: '#f1f5f9' }}>
            Professional Practice
          </h2>

          <div style={{ backgroundColor: '#090d16', border: '1px solid #1e293b', borderRadius: '8px', padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#f8fafc', margin: 0 }}>Field Researcher &amp; Analytics Specialist</h3>
              <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: '500' }}>International Research Force (IRF) [cite: 19, 37]</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              Applied logic models to clean, categorize, and process strategic analytics metrics. Maintained high operational records accuracy during collaborative research deployments managed throughout Islamabad[cite: 19, 37].
            </p>
          </div>
        </section>

        {/* MINIMALIST FOOTER */}
        <footer style={{ borderTop: '1px solid #1e293b', paddingTop: '2.5rem', marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#64748b' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Nimra Farooqi. Professional Portfolio.</p>
          <p style={{ margin: 0 }}>📍 Islamabad / Chakwal, PK</p>
        </footer>

      </main>
    </div>
  );
}
