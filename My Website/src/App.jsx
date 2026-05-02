import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  FolderOpen, 
  Briefcase, 
  Mail,
  Menu,
  X,
  Code
} from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { path: '/', icon: <LayoutDashboard size={20} />, label: 'Home' },
    { path: '/about', icon: <User size={20} />, label: 'About Me' },
    { path: '/blog', icon: <FileText size={20} />, label: 'Blog' },
    { path: '/projects', icon: <FolderOpen size={20} />, label: 'Projects' },
    { path: '/resume', icon: <Briefcase size={20} />, label: 'Resume' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <div className="app-container">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleSidebar}
        style={{ display: 'none' /* Handled by CSS media query in real implementation */ }}
      >
        {sidebarOpen ? <X size={24} color="#E2E8F0" /> : <Menu size={24} color="#E2E8F0" />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div style={{width: 32, height: 32, backgroundColor: 'var(--color-primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 18}}>D</div>
          Dashboard
        </div>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
          
          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-item">
              <Briefcase size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
