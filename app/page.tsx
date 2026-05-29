import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#060814',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      {/* Top Header Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(6, 8, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1e293b',
        zIndex: 100,
        padding: '1.25rem 2rem'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '1px', color: '#00bcd4', fontFamily: 'cursive' }}>Nimra</span>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.5px' }}>
            <a href="#home" style={{ color: '#00bcd4', textDecoration: 'none' }}>HOME</a>
            <a href="#about" style={{ color: '#ffffff', textDecoration: 'none' }}>ABOUT</a>
            <a href="#skills" style={{ color: '#ffffff', textDecoration: 'none' }}>SKILLS</a>
            <a href="#qualifications" style={{ color: '#ffffff', textDecoration: 'none' }}>QUALIFICATIONS</a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* HERO SECTION */}
        <section id="home" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', padding: '4rem 0 6rem 0' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h4 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '600', margin: '0 0 0.5rem 0' }}>Hello, I'm</h4>
            <h1 style={{ fontSize: '4.5rem', fontWeight: '800', margin: '0 0 1rem 0', lineHeight: '1.1' }}>Nimra Farooqi</h1>
            <h3 style={{ fontSize: '1.8rem', color: '#00bcd4', fontWeight: '700', margin: '0 0 2rem 0' }}>
              Mathematics Graduate &amp; AI Specialist
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Leveraging an advanced mathematical foundation to build intelligent computational architectures, structural data models, and automated logic workflows. 
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#skills" style={{ backgroundColor: '#00bcd4', color: '#060814', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem' }}>View Expertise</a>
              <a href="#qualifications" style={{ border: '2px solid #ffffff', color: '#ffffff', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem' }}>Qualifications</a>
            </div>
          </div>
          
          {/* Decorative AI Circle Graphic */}
          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', minWidth: '300px' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              border: '8px solid #00bcd4',
              boxShadow: '0 0 40px rgba(0, 188, 212, 0.4)',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem'
            }}>
              🧠
            </div>
          </div>
        </section>

        {/* ABOUT PROFILE STATEMENT */}
        <section id="about" style={{ padding: '5rem 0', borderTop: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
            About <span style={{ color: '#00bcd4' }}>Me</span>
          </h2>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.8', margin: 0 }}>
              Armed with an M.Sc. in Mathematics, I bridge the critical gap between abstract statistical algorithms and functional technology solutions. Trained across premium national frameworks, my focus lies in expanding data integrity, configuring machine intelligence pipelines, and executing precision data analytics.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION WITH PERCENTAGES */}
        <section id="skills" style={{ padding: '5rem 0', borderTop: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '4rem', textAlign: 'center' }}>
            My <span style={{ color: '#00bcd4' }}>Skills</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Data Analytics</h3>
              <span style={{ color: '#00bcd4', fontWeight: '700', fontSize: '1.4rem' }}>95%</span>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Artificial Intelligence</h3>
              <span style={{ color: '#00bcd4', fontWeight: '700', fontSize: '90%' }}>90%</span>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🐍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>Python Programming</h3>
              <span style={{ color: '#00bcd4', fontWeight: '700', fontSize: '88%' }}>88%</span>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>SEO Optimization</h3>
              <span style={{ color: '#00bcd4', fontWeight: '700', fontSize: '85%' }}>85%</span>
            </div>
          </div>
        </section>

        {/* REVISED EDUCATION & CERTIFICATIONS INFRASTRUCTURE */}
        <section id="qualifications" style={{ padding: '5rem 0', borderTop: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '4rem', textAlign: 'center' }}>
            Education &amp; <span style={{ color: '#00bcd4' }}>Credentials</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Degree Column - Only Masters Included */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00bcd4', marginBottom: '0.5rem' }}>Academic Degree</h3>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #00bcd4', borderRadius: '8px', padding: '2rem' }}>
                <span style={{ backgroundColor: 'rgba(0, 188, 212, 0.1)', color: '#00bcd4', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '700' }}>GRADUATION</span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', marginTop: '1rem', marginBottom: '0.25rem' }}>M.Sc. Mathematics</h4>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>University of Gujrat</p>
              </div>
            </div>

            {/* Certifications Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#00bcd4', marginBottom: '0.5rem' }}>Specialized Courses</h3>
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem', color: '#ffffff' }}>AI &amp; Robotics Certification</h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>NAVTTC Centre of Excellence, Islamabad</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem', color: '#ffffff' }}>Advanced Data Analytics</h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Chief Minister Punjab Skill Development Initiative</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem', color: '#ffffff' }}>AI, Python &amp; SEO Frameworks</h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>DigiSkills Training Program</p>
                </div>
                <div>
                  <h5 style={{ margin: '0 0 0.25rem 0', fontSize: '1.05rem', color: '#ffffff' }}>Certified Freelancing Professional &amp; MS Office</h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>PFTP Programs</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" style={{ padding: '5rem 0', borderTop: '1px solid #1e293b' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '3rem', textAlign: 'center' }}>
            Professional <span style={{ color: '#00bcd4' }}>History</span>
          </h2>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '700', margin: 0 }}>Field Researcher / Analytics Practice</h3>
              <span style={{ color: '#00bcd4', fontWeight: '600', fontSize: '0.9rem' }}>International Research Force (IRF)</span>
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
              Executed structured field research protocols and data logging metrics. Handled numerical record alignment and dataset sorting during data validation operations in Islamabad.
            </p>
          </div>
        </section>

        {/* SECURE CLEAN FOOTER */}
        <footer style={{ borderTop: '1px solid #1e293b', paddingTop: '2.5rem', marginTop: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Nimra Farooqi. All rights reserved.</p>
          <p style={{ margin: 0 }}>📍 Islamabad / Chakwal, PK</p>
        </footer>

      </main>
    </div>
  );
}
