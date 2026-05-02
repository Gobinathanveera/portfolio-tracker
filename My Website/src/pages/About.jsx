import React from 'react';

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <h2 className="section-title">About Me</h2>
      
      <div className="card" style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Professional Summary</h3>
        <p style={{ color: 'var(--color-text-muted)' }}>
          I am a passionate software developer with a strong focus on building modern, responsive, and user-friendly web applications. With a background in computer science and a love for clean code, I strive to create digital experiences that are both beautiful and functional.
        </p>
        <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2)' }}>
          My career goal is to become a full-stack engineer leading innovative projects that solve real-world problems while continually learning new technologies and best practices.
        </p>
      </div>

      <div className="grid-3">
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-primary)' }}>Technical Skills</h3>
          <ul style={{ paddingLeft: 'var(--spacing-4)', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <li>JavaScript (ES6+)</li>
            <li>React & Redux</li>
            <li>Node.js & Express</li>
            <li>HTML5 & CSS3</li>
            <li>TypeScript</li>
          </ul>
        </div>
        
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-secondary)' }}>Tools & Tech</h3>
          <ul style={{ paddingLeft: 'var(--spacing-4)', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Webpack & Vite</li>
            <li>Figma</li>
            <li>Docker</li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', color: 'var(--color-accent)' }}>Soft Skills</h3>
          <ul style={{ paddingLeft: 'var(--spacing-4)', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
