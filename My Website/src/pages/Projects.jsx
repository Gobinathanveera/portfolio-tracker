import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Dashboard',
      description: 'A modern, responsive personal website serving as a dashboard for blog, portfolio, and career data.',
      tech: ['React', 'Vite', 'CSS', 'Lucide Icons'],
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with cart functionality, user authentication, and payment integration.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop features and real-time updates.',
      tech: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <div className="projects-page animate-fade-in">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid-2">
        {projects.map(project => (
          <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-primary)' }}>{project.title}</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', flex: 1 }}>{project.description}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)' }}>
              {project.tech.map(tech => (
                <span key={tech} style={{ fontSize: '0.8rem', padding: '4px 8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              <a href={project.demo} className="btn" style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', padding: '6px 12px', flex: 1 }}>
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href={project.github} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-text)', padding: '6px 12px', flex: 1 }}>
                <Code size={16} /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
