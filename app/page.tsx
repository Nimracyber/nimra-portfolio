import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#030712',
      color: '#f3f4f6',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      lineHeight: '1.5',
      margin: 0,
      padding: 0
    }}>
      {/* Background Accent Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 0px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Navigation Bar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #1f2937',
        zIndex: 100,
        padding: '1.25rem 2rem'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '0.5px', color: '#38bdf8' }}>
            NIMRA<span style={{ color: '#6366f1' }}>.</span>
          </span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px' }}>
            <a href="#about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: '#9ca3af', textDecoration: 'none' }}>Skills</a>
            <a href="#education" style={{ color: '#9ca3af', textDecoration: 'none' }}>Education</a>
            <a href="#experience" style={{ color: '#9ca3af', textDecoration: 'none' }}>Experience</a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem', position: 'relative', zIndex: 2 }}>
        
        {/* About / Hero Section */}
        <section id="about" style={{ marginBottom: '8rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', color: '#818cf8', padding: '0.4rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '2rem' }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#818cf8', borderRadius: '50%', display: 'inline-block' }}></span>
            Available for Technical Roles
          </div>
          
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Hi, I'm <span style={{ background: 'linear-gradient(to right, #38bdf8, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nimra Farooqi</span>
          </h1>
          
          <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#9ca3af', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Mathematics Graduate &amp; AI Specialist [cite: 18]
          </h2>
          
          <p style={{ fontSize: '1.2rem', color: '#9ca3af', maxWidth: '750px', marginBottom: '3.5rem', lineHeight: '1.8' }}>
            A data-driven specialist leveraging an advanced background in mathematics to design intelligent workflows, structural analytics engines, and robust computing architectures[cite: 18, 20]. Trained through top-tier national technical program initiatives[cite: 18].
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            <a href="#skills" style={{ backgroundColor: '#ffffff', color: '#030712', padding: '0.9rem 2.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem', boxShadow: '0 4px 20px rgba(255,255,255,0.1)' }}>
              Explore Stack
            </a>
          </div>
        </section>

        {/* Skills & Fields Section */}
        <section id="skills" style={{ marginBottom: '8rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Core Capabilities</h2>
            <p style={{ color: '#6b7280', margin: 0 }}>Specialized technical focus areas and domains.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Box 1 */}
            <div style={{ backgroundColor: '#090d16', border: '1px solid #1f2937', borderRadius: '12px', padding: '2.5rem' }}>
              <div style={{ color: '#38bdf8', fontSize: '1.5rem', marginBottom: '1.25rem' }}>📊</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Data &amp; AI Core</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Artificial Intelligence', 'Data Analytics', 'Robotics', 'Python', 'Statistical Models'].map(s => (
                  <span key={s} style={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#d1d5db', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem' }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Box 2 */}
            <div style={{ backgroundColor: '#090d16', border: '1px solid #1f2937', borderRadius: '12px', padding: '2.5rem' }}>
              <div style={{ color: '#6366f1', fontSize: '1.5rem', marginBottom: '1.25rem' }}>🌐</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Digital Ecosystems</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['SEO Optimization', 'MS Office Suite', 'Freelancing Frameworks', 'Research Data'].map(s => (
                  <span key={s} style={{ backgroundColor: '#111827', border: '1px solid #374151', color: '#d1d5db', padding: '0.35rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Bar */}
          <div style={{ backgroundColor: '#090d16', border: '1px solid #1f2937', borderRadius: '12px', padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#9ca3af', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>VERIFIED CERTIFICATIONS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', fontSize: '0.9rem', color: '#d1d5db' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✨ <span>AI &amp; Robotics — NAVTTC CoE</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✨ <span>Advanced Data Analytics — CM Punjab Initiative</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✨ <span>AI &amp; Python — DigiSkills</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✨ <span>SEO Certification — DigiSkills</span></div>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section id="education" style={{ marginBottom: '8rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Academic Roadmap</h2>
            <p style={{ color: '#6b7280', margin: 0 }}>Formal educational qualifications and foundations.</p>
          </div>

          <div style={{ position: 'relative', borderLeft: '1px solid #1f2937', paddingLeft: '2.5rem', marginLeft: '0.5rem' }}>
            {/* M.Sc */}
            <div style={{ marginBottom: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#38bdf8', borderRadius: '50%', left: '-46px', top: '6px', border: '4px solid #030712' }} />
              <div style={{ color: '#38bdf8', fontWeight: '600', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>POSTGRADUATE PROFILE</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.25rem' }}>M.Sc. Mathematics [cite: 23]</h3>
            </div>

            {/* B.Sc */}
            <div style={{ marginBottom: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#4b5563', borderRadius: '50%', left: '-46px', top: '6px', border: '4px solid #030712' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', color: '#e5e7eb' }}>B.Sc. (Double Mathematics &amp; Physics) [cite: 25]</h3>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>Undergraduate Qualification [cite: 24]</p>
            </div>

            {/* F.Sc */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', width: '11px', height: '11px', backgroundColor: '#4b5563', borderRadius: '50%', left: '-46px', top: '6px', border: '4px solid #030712' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', color: '#e5e7eb' }}>F.Sc. (Pre-Engineering) [cite: 27]</h3>
              <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>Intermediate Certification [cite: 26]</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ marginBottom: '6rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Professional Scope</h2>
            <p style={{ color: '#6b7280', margin: 0 }}>Practical industry applications and analytics.</p>
          </div>

          <div style={{ backgroundColor: '#090d16', border: '1px solid #1f2937', borderRadius: '12px', padding: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Field Researcher / Specialist</h3>
                <p style={{ color: '#6366f1', fontWeight: '600', margin: '0.25rem 0 0 0', fontSize: '1.05rem' }}>International Research Force (IRF), Islamabad [cite: 37]</p>
              </div>
              <span style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', padding: '0.35rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                Field Practice
              </span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              Collaborated on field operations, research metrics, and data collection initiatives[cite: 19]. Applied logic-based analytical processing frameworks to translate project requirements into structured organizational value[cite: 20].
            </p>
          </div>
        </section>

        {/* Footer Area */}
        <footer style={{ borderTop: '1px solid #1f2937', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} Nimra Farooqi. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
            <span style={{ color: '#9ca3af' }}>📍 Pakistan [cite: 12]</span>
          </div>
        </footer>

      </main>
    </div>
  );
}
