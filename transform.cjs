const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Main background
content = content.replace(/linear-gradient\(rgba\(248, 250, 252, 0.88\), rgba\(248, 250, 252, 0.92\)\)/g, 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))');

// Main text
content = content.replace(/text-slate-800/g, 'text-slate-100');
content = content.replace(/text-blue-900/g, 'text-blue-100');
content = content.replace(/text-slate-700/g, 'text-slate-200');
content = content.replace(/text-slate-600/g, 'text-slate-300');
content = content.replace(/text-slate-500/g, 'text-slate-400');
content = content.replace(/text-slate-400/g, 'text-slate-400');

// Backgrounds for cards
content = content.replace(/bg-white/g, 'bg-slate-900/40 backdrop-blur-md');
content = content.replace(/bg-slate-50/g, 'bg-slate-800/30 backdrop-blur-sm');
content = content.replace(/bg-slate-100/g, 'bg-slate-700/50');
content = content.replace(/bg-blue-50/g, 'bg-blue-900/30');
content = content.replace(/bg-teal-50/g, 'bg-teal-900/30');
content = content.replace(/bg-emerald-50/g, 'bg-emerald-900/30');
content = content.replace(/bg-rose-50/g, 'bg-rose-900/30');

// Borders
content = content.replace(/border-slate-100/g, 'border-slate-700/50');
content = content.replace(/border-slate-200/g, 'border-slate-700/50');

// Hover states
content = content.replace(/hover:bg-slate-50/g, 'hover:bg-slate-800/50');
content = content.replace(/hover:bg-blue-50\/40/g, 'hover:bg-blue-900/40');
content = content.replace(/hover:bg-slate-100/g, 'hover:bg-slate-700/50');

fs.writeFileSync('src/App.jsx', content);
console.log("Transformation complete.");
