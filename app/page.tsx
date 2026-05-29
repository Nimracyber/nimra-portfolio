import React from 'react';

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      fontFamily: 'Segoe UI, sans-serif',
      minHeight: '100vh',
      padding: '4rem 2rem'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header/Hero */}
        <header style={{ marginBottom: '4rem', borderBottom: '1px solid #334155', paddingBottom: '2rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#38bdf8', marginBottom: '0.5rem' }}>Nimra Farooqi</h1>
          <p style={{ fontSize: '1.5rem', color: '#94a3b8' }}>Mathematics Graduate & Data Enthusiast</p>
          <p style={{ marginTop: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
            A highly motivated professional with a strong analytical background in mathematics, specialized in Artificial Intelligence, Data Analytics, and Robotics[cite: 18, 20]. Experienced in translating complex data into insights and building technical solutions[cite: 18, 20].
          </p>
        </header>

        {/* Education Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #38bdf8', width: 'fit-content', paddingBottom: '0.25rem', marginBottom: '1.5rem' }}>Education</h2>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>M.Sc. Mathematics</h3>
            <p style={{ color: '#94a3b8' }}>University of Gujrat [cite: 23]</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>B.Sc. (Double Mathematics & Physics)</h3>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>F.Sc. (Pre-Engineering)</h3>
          </div>
        </section>

        {/* Technical Experience & Certifications */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #38bdf8', width: 'fit-content', paddingBottom: '0.25rem', marginBottom: '1.5rem' }}>Technical Expertise & Certifications</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '1.2rem' }}>
            <li>Certification in Artificial Intelligence & Robotics — NAVTTC Centre of Excellence, Islamabad [cite: 30]</li>
            <li>Advanced Certification in Data Analytics — Chief Minister Punjab Skill Development Initiative [cite: 31]</li>
            <li>Certification in Artificial Intelligence & Python — DigiSkills Training Program [cite: 32]</li>
            <li>Certification in SEO (Search Engine Optimization) — DigiSkills Training Program [cite: 33]</li>
            <li>Certified Freelancing Professional & MS Office Suite — PFTP [cite: 34, 35]</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#38bdf8', borderBottom: '2px solid #38bdf8', width: 'fit-content', paddingBottom: '0.25rem', marginBottom: '1.5rem' }}>Professional Experience</h2>
          <div>
            <h3 style={{ fontSize: '1.25rem' }}>Field Researcher / Professional Specialist</h3>
            <p style={{ color: '#38bdf8', fontWeight: '500' }}>International Research Force (IRF), Islamabad [cite: 37]</p>
            <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>Collaborated on data collection, field research, and strategic analysis initiatives[cite: 19]. Applied mathematical frameworks and logical processing to real-world analytical tasks[cite: 18, 20].</p>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ borderTop: '1px solid #334155', paddingTop: '2rem' }}>
          <h2 style={{ color: '#38bdf8', marginBottom: '1rem' }}>Contact Details</h2>
          <p><strong>Mobile:</strong> 03038859060 [cite: 16]</p>
          <p><strong>Location:</strong> Chakwal / Islamabad, Pakistan</p>
        </section>

      </div>
    </div>
  );
}
