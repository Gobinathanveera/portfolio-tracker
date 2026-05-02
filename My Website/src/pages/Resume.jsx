import React from 'react';
import { Download, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function Resume() {
  return (
    <div className="resume-page animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-8)' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Resume</h2>
        <button className="btn btn-primary">
          <Download size={18} /> Download CV
        </button>
      </div>

      <div className="grid-2">
        {/* Experience Timeline */}
        <div className="card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-6)', color: 'var(--color-primary)' }}>
            <Briefcase size={24} /> Experience
          </h3>
          
          <div style={{ borderLeft: '2px solid rgba(79, 70, 229, 0.3)', paddingLeft: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Frontend Developer</h4>
              <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Tech Innovators Inc. | 2024 - Present</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Leading the frontend development team in building scalable enterprise web applications using React and TypeScript.</p>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'var(--color-surface)', border: '2px solid var(--color-primary)' }}></div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Junior Web Developer</h4>
              <div style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', marginBottom: '8px', fontWeight: 500 }}>Creative Solutions Agency | 2022 - 2024</div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Developed and maintained responsive websites for various clients. Implemented UI/UX improvements.</p>
            </div>
          </div>
        </div>

        {/* Education & Certs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-6)', color: 'var(--color-secondary)' }}>
              <GraduationCap size={24} /> Education
            </h3>
            <div style={{ borderLeft: '2px solid rgba(14, 165, 233, 0.3)', paddingLeft: 'var(--spacing-4)' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-25px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: 'var(--color-secondary)' }}></div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>B.S. Computer Science</h4>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>University of Technology | 2018 - 2022</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Graduated with Honors. Specialized in Software Engineering.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)', color: 'var(--color-accent)' }}>
              <Award size={24} /> Certifications
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '8px' }}>
                <span>AWS Certified Cloud Practitioner</span>
                <span style={{ color: 'var(--color-text-muted)' }}>2025</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Advanced React Patterns</span>
                <span style={{ color: 'var(--color-text-muted)' }}>2023</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
