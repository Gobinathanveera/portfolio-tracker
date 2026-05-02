import React from 'react';
import { Briefcase, Code, Mail, Activity, CheckSquare, Edit3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      <div className="profile-header card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
        <img 
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Profile" 
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--color-surface)', outline: '2px solid var(--color-primary)', marginBottom: 'var(--spacing-4)' }}
        />
        <h1 style={{ marginBottom: 'var(--spacing-2)' }}>John Doe</h1>
        <h3 style={{ color: 'var(--color-secondary)', fontWeight: 500, marginBottom: 'var(--spacing-4)' }}>Aspiring Developer | Tech Enthusiast</h3>
        <p style={{ maxWidth: 600, color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-6)' }}>
          Building digital products, brands, and experience. Specializing in frontend development and UI/UX design with a passion for clean code and minimal aesthetics.
        </p>
        
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <a href="#" className="btn btn-primary"><Briefcase size={18} /> Connect on LinkedIn</a>
          <a href="#" className="btn btn-outline"><Code size={18} /> GitHub</a>
          <a href="#" className="btn btn-outline"><Mail size={18} /> Email</a>
        </div>
      </div>

      <div className="grid-3" style={{ marginBottom: 'var(--spacing-8)' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', borderRadius: '12px' }}>
            <CheckSquare size={28} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>12+</div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Projects Completed</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'rgba(14, 165, 233, 0.1)', color: 'var(--color-secondary)', borderRadius: '12px' }}>
            <Edit3 size={28} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>24</div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Blog Posts</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-accent)', borderRadius: '12px' }}>
            <Activity size={28} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>15+</div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Tech Skills</div>
          </div>
        </div>
      </div>
      
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <Activity size={20} color="var(--color-primary)" /> Recent Activity
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <li style={{ paddingBottom: 'var(--spacing-3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Today</span>
              <p>Pushed new commits to Personal Dashboard project.</p>
            </li>
            <li style={{ paddingBottom: 'var(--spacing-3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Yesterday</span>
              <p>Published a new blog post on React Hooks.</p>
            </li>
            <li>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>May 1, 2026</span>
              <p>Completed Advanced CSS styling module.</p>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <Edit3 size={20} color="var(--color-secondary)" /> Daily Update
          </h3>
          <textarea 
            placeholder="What's on your mind today?"
            style={{ 
              width: '100%', 
              height: '100px', 
              backgroundColor: 'rgba(0,0,0,0.2)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '8px', 
              padding: 'var(--spacing-3)',
              color: 'var(--color-text)',
              fontFamily: 'inherit',
              resize: 'none',
              marginBottom: 'var(--spacing-3)'
            }}
          />
          <button className="btn btn-primary" style={{ width: '100%' }}>Save Note</button>
        </div>
      </div>
    </div>
  );
}
