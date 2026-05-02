const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

content = content.replace(/<input(.*?)className="(.*?)"/g, '<input$1className="$2 bg-slate-800/50 text-white placeholder-slate-400"');
content = content.replace(/<select(.*?)className="(.*?)"/g, '<select$1className="$2 bg-slate-800/50 text-white"');

fs.writeFileSync('src/App.jsx', content);
console.log("Input fields updated.");
