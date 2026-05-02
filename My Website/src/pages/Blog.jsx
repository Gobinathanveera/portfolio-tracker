import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Understanding React Server Components', desc: 'A deep dive into how React Server Components change the way we build applications.', date: 'May 01, 2026', category: 'React' },
    { id: 2, title: 'Mastering Modern CSS Layouts', desc: 'Learn how to use CSS Grid and Flexbox to build complex, responsive layouts with ease.', date: 'Apr 28, 2026', category: 'CSS' },
    { id: 3, title: 'The Future of Web Development', desc: 'Exploring upcoming trends in web development including AI coding assistants and new frameworks.', date: 'Apr 15, 2026', category: 'Opinion' },
  ];

  return (
    <div className="blog-page animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-8)' }}>
        <h2 className="section-title" style={{ margin: 0 }}>Blog</h2>
        
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input 
            type="text" 
            placeholder="Search articles..." 
            style={{ 
              width: '100%', 
              padding: '10px 10px 10px 38px', 
              borderRadius: '8px', 
              border: '1px solid rgba(255,255,255,0.1)', 
              backgroundColor: 'rgba(0,0,0,0.2)',
              color: 'white',
              outline: 'none'
            }} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-6)' }}>
        <button className="btn" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>All</button>
        <button className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-text)' }}>React</button>
        <button className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-text)' }}>CSS</button>
        <button className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'var(--color-text)' }}>Opinion</button>
      </div>

      <div className="grid-2">
        {posts.map(post => (
          <div key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-3)' }}>
              <span style={{ fontSize: '0.8rem', padding: '4px 8px', backgroundColor: 'rgba(79, 70, 229, 0.2)', color: 'var(--color-primary)', borderRadius: '4px', fontWeight: 600 }}>{post.category}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{post.date}</span>
            </div>
            <h3 style={{ marginBottom: 'var(--spacing-2)' }}>{post.title}</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)', flex: 1 }}>{post.desc}</p>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-secondary)', fontWeight: 600 }}>
              Read More <ChevronRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
