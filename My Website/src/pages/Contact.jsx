import React from 'react';
import { Mail, MapPin, Briefcase, Code, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in">
      <h2 className="section-title">Get in Touch</h2>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Name</label>
              <input 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  color: 'white',
                  fontFamily: 'inherit',
                  outline: 'none'
                }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Email</label>
              <input 
                type="email" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  color: 'white',
                  fontFamily: 'inherit',
                  outline: 'none'
                }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Message</label>
              <textarea 
                rows="5"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  color: 'white',
                  fontFamily: 'inherit',
                  outline: 'none',
                  resize: 'vertical'
                }} 
              />
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '8px' }}>Send Message</button>
          </form>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', borderRadius: '8px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email</div>
                  <div>hello@example.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgba(14, 165, 233, 0.1)', color: 'var(--color-secondary)', borderRadius: '8px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Location</div>
                  <div>San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Social Profiles</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
              <a href="#" style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <Briefcase size={24} />
              </a>
              <a href="#" style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <Code size={24} />
              </a>
              <a href="#" style={{ padding: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--color-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
