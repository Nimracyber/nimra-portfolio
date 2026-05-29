import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0b0f19',
      color: '#f1f5f9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      lineHeight: '1.7',
      padding: '0',
      margin: '0'
    }}>
      {/* Top Glassmorphic Navigation Bar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(11, 15, 25, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e293b',
        zIndex: 100,
        padding: '1rem 2rem'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '1px', color: '#38bdf8' }}>NF<span style={{ color: '#6366f1' }}>.</span></span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem', fontWeight: '500' }}>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', transition: '0.2s' }}>About</a>
            <a href="#expertise" style={{ color: '#94a3b8', textDecoration: 'none' }}>Expertise</a>
            <a href="#education" style={{ color: '#94a3b8', textDecoration: 'none' }}>Education</a>
            <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* HERO SECTION */}
        <section id="about" style={{ padding: '4rem 0 6rem 0', borderBottom: '1px solid #1e293b' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', marginBottom: '1.5rem' }}>
            MATHEMATICS &amp; ARTIFICIAL INTELLIGENCE
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', letterSpacing: '-1px', marginBottom: '1rem', lineHeight: '1.2' }}>
            Hi, I'm <span style={{ background: 'linear-gradient(to right, #38bdf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nimra Farooqi</span>
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#94a3b8', fontWeight: '400', marginBottom: '2rem', maxWidth: '800px' }}>
            Bridging the gap between mathematical theory and intelligent computing.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '700px', marginBottom: '3rem' }}>
            A precision-driven Mathematics graduate armed with robust domain expertise in Data Analytics, Artificial Intelligence, and Robotics. Trained across top-tier national skill frameworks, I build actionable solutions by applying advanced logical models and statistical frameworks to raw data[cite: 18, 20].
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#contact" style={{ backgroundColor: '#38bdf8', color: '#0b0f19', padding: '0.8rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', boxShadow: '0 4px 14px rgba(56, 189, 248, 0.3)' }}>
              Let's Collaborate
            </a>
            <a href="#expertise" style={{ border: '1px solid #334155', color: '#f1f5f9', padding: '0.8rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>
              View Skills
            </a>
          </div>
        </section>

        {/* SKILLS & EXPERTISE GRID */}
        <section id="expertise" style={{ padding: '6rem 0', borderBottom: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
            <span style={{ color: '#38bdf8', marginRight: '0.5rem' }}>//</span> Technical Infrastructure
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Core Domain Card */}
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#38bdf8', marginBottom: '1.5rem' }}>Core Domains</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {['Artificial Intelligence', 'Data Analytics', 'Robotics', 'Search Engine Optimization (SEO)', 'Statistical Modeling'].map((skill) => (
                  <span key={skill} style={{ backgroundColor: '#1f2937', color: '#e2e8f0', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', border: '1px solid #374151' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Languages Card */}
            <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#6366f1', marginBottom: '1.5rem' }}>Technical Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {['Python', 'MS Office Suite', 'Mathematical Analysis', 'Freelancing Frameworks'].map((tool) => (
                  <span key={tool} style={{ backgroundColor: '#1f2937', color: '#e2e8f0', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', border: '1px solid #374151' }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Credentials Subsection */}
          <div style={{ marginTop: '3rem', backgroundColor: 'rgba(30, 41, 59, 0.3)', border: '1px solid #1e293b', borderRadius: '12px', padding: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem', color: '#94a3b8' }}>Specialized Certifications</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ color: '#cbd5e1' }}>• <strong>AI &amp; Robotics</strong> — NAVTTC Centre of Excellence, Islamabad [cite: 30]</div>
              <div style={{ color: '#cbd5e1' }}>• <strong>Advanced Data Analytics</strong> — CM Punjab Skill Development Initiative [cite: 31]</div>
              <div style={{ color: '#cbd5e1' }}>• <strong>AI &amp; Python</strong> — DigiSkills Training Program [cite: 32]</div>
              <div style={{ color: '#cbd5e1' }}>• <strong>SEO Optimization</strong> — DigiSkills Training Program [cite: 33]</div>
              <div style={{ color: '#cbd5e1' }}>• <strong>Certified Freelancing Professional</strong> — PFTP [cite: 34]</div>
            </div>
          </div>
        </section>

        {/* EDUCATION & BACKGROUND */}
        <section id="education" style={{ padding: '6rem 0', borderBottom: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
            <span style={{ color: '#38bdf8', marginRight: '0.5rem' }}>//</span> Academic Foundation
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderLeft: '3px solid #38bdf8', paddingLeft: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0' }}>M.Sc. Mathematics</h3>
                <p style={{ color: '#94a3b8', margin: '0.2rem 0 0 0' }}>University of Gujrat</p>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.8rem', borderRadius: '4px' }}>Postgraduate</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderLeft: '3px solid #475569', paddingLeft: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0', color: '#cbd5e1' }}>B.Sc. (Double Mathematics &amp; Physics)</h3>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Undergraduate</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderLeft: '3px solid #475569', paddingLeft: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0', color: '#cbd5e1' }}>F.Sc. (Pre-Engineering)</h3>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Intermediate</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" style={{ padding: '6rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '3rem', letterSpacing: '-0.5px' }}>
            <span style={{ color: '#6366f1', marginRight: '0.5rem' }}>//</span> Field Engagement
          </h2>
          
          <div style={{ backgroundColor: '#111827', border: '1px solid #1e293b', borderRadius: '12px', padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', color: '#f8fafc', margin: '0' }}>Field Researcher / Data Analyst</h3>
                <p style={{ color: '#6366f1', fontWeight: '500', margin: '0.2rem 0 0 0' }}>International Research Force (IRF), Islamabad [cite: 19, 36]</p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#6366f1', border: '1px solid #6366f1', padding: '0.3rem 0.8rem', borderRadius: '20px' }}>Active Practice</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: '0' }}>
              Executed precision field operations, data recording protocols, and analytics processing. Utilized fundamental analytical methods to filter, process, and optimize complex operational workflows for research documentation.
            </p>
          </div>
        </section>

        {/* FOOTER & CONTACT CONTACT */}
        <section id="contact" style={{ padding: '4rem 0 2rem 0', borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Secure Channels</h3>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', margin: '0' }}><strong>Primary:</strong> 03038859060</p>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', margin: '0' }}><strong>Location:</strong> Islamabad / Chakwal, PK</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.3rem' }}>
            <a href="https://github.com" target="_blank" style={{ color: '#94a3b8', textDecoration: 'none' }}>⚡ GitHub</a>
            <a href="https://linkedin.com" target="_blank" style={{ color: '#38bdf8', textDecoration: 'none' }}>💼 LinkedIn</a>
          </div>
        </section>

      </main>
    </div>
  );
}
