const fs = require('fs');

// Tokyo Night Theme Colors
const colors = {
  bg: '#1a1b26',
  bgDark: '#16161e',
  headerBg: '#24283b',
  headerBgDark: '#1f2335',
  border: '#292e42',
  text: '#a9b1d6',
  textMuted: '#565f89',
  prompt: '#9ece6a',
  command: '#7aa2f7',
  highlight: '#bb9af7',
  info: '#7dcfff',
  cursor: '#c0caf5',
  red: '#f7768e',
  yellow: '#e0af68',
  green: '#9ece6a',
};

const terminalContent = `
<span class="prompt">❯</span> <span class="command">whoami</span>
<span class="text">LeekJay</span> <span class="muted">// Full-Stack Developer &amp; AI Enthusiast</span>

<span class="prompt">❯</span> <span class="command">cat about.json</span>
<span class="text">{</span>
  <span class="info">"location"</span>: <span class="highlight">"China 🇨🇳"</span>,
  <span class="info">"role"</span>: <span class="highlight">"Full-Stack &amp; Automation Engineer"</span>,
  <span class="info">"focus"</span>: [<span class="highlight">"AI Integration"</span>, <span class="highlight">"Efficiency Tools"</span>],
  <span class="info">"philosophy"</span>: <span class="highlight">"让重复的工作消失"</span>
<span class="text">}</span>

<span class="prompt">❯</span> <span class="command">ls skills/</span>
<span class="info">TypeScript  Python  Vue.js  React  Node.js  FastAPI  Docker  OpenAI  Claude</span>

<span class="prompt">❯</span> <span class="command">echo $CONTACT</span>
<span class="text">📧 leekjay@foxmail.com   🐙 github.com/LeekJay</span>

<span class="prompt">❯</span> <span class="cursor">█</span>
`.trim();

const svg = `<svg width="800" height="380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.bg}"/>
      <stop offset="100%" style="stop-color:${colors.bgDark}"/>
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.headerBg}"/>
      <stop offset="100%" style="stop-color:${colors.headerBgDark}"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
    </filter>
    <style>
      .terminal-text { font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace; font-size: 13px; }
      .prompt { fill: ${colors.prompt}; }
      .command { fill: ${colors.command}; }
      .text { fill: ${colors.text}; }
      .muted { fill: ${colors.textMuted}; }
      .highlight { fill: ${colors.highlight}; }
      .info { fill: ${colors.info}; }
      .cursor { fill: ${colors.cursor}; }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      .cursor { animation: blink 1s infinite; }
    </style>
  </defs>
  
  <!-- Window Shadow -->
  <rect x="10" y="10" width="780" height="360" rx="10" fill="${colors.bg}" filter="url(#shadow)"/>
  
  <!-- Window Background -->
  <rect x="10" y="10" width="780" height="360" rx="10" fill="url(#bgGrad)"/>
  
  <!-- Header -->
  <rect x="10" y="10" width="780" height="40" rx="10" fill="url(#headerGrad)"/>
  <rect x="10" y="40" width="780" height="10" fill="url(#headerGrad)"/>
  
  <!-- Header Border -->
  <line x1="10" y1="50" x2="790" y2="50" stroke="${colors.border}" stroke-width="1"/>
  
  <!-- Traffic Lights -->
  <circle cx="35" cy="30" r="6" fill="${colors.red}"/>
  <circle cx="55" cy="30" r="6" fill="${colors.yellow}"/>
  <circle cx="75" cy="30" r="6" fill="${colors.green}"/>
  
  <!-- Title -->
  <text x="400" y="34" text-anchor="middle" class="terminal-text" fill="${colors.textMuted}">leekjay@dev — zsh</text>
  
  <!-- Terminal Content -->
  <g transform="translate(30, 75)">
    <!-- Line 1: whoami -->
    <text y="0" class="terminal-text">
      <tspan class="prompt">❯</tspan>
      <tspan class="command"> whoami</tspan>
    </text>
    <text y="20" class="terminal-text">
      <tspan class="text">LeekJay</tspan>
      <tspan class="muted"> // Full-Stack Developer &amp; AI Enthusiast</tspan>
    </text>
    
    <!-- Line 2: cat about.json -->
    <text y="50" class="terminal-text">
      <tspan class="prompt">❯</tspan>
      <tspan class="command"> cat about.json</tspan>
    </text>
    <text y="70" class="terminal-text text">{</text>
    <text y="90" class="terminal-text">
      <tspan class="text">  </tspan>
      <tspan class="info">"location"</tspan>
      <tspan class="text">: </tspan>
      <tspan class="highlight">"China 🇨🇳"</tspan>
      <tspan class="text">,</tspan>
    </text>
    <text y="110" class="terminal-text">
      <tspan class="text">  </tspan>
      <tspan class="info">"role"</tspan>
      <tspan class="text">: </tspan>
      <tspan class="highlight">"Full-Stack &amp; Automation Engineer"</tspan>
      <tspan class="text">,</tspan>
    </text>
    <text y="130" class="terminal-text">
      <tspan class="text">  </tspan>
      <tspan class="info">"focus"</tspan>
      <tspan class="text">: [</tspan>
      <tspan class="highlight">"AI Integration"</tspan>
      <tspan class="text">, </tspan>
      <tspan class="highlight">"Efficiency Tools"</tspan>
      <tspan class="text">],</tspan>
    </text>
    <text y="150" class="terminal-text">
      <tspan class="text">  </tspan>
      <tspan class="info">"philosophy"</tspan>
      <tspan class="text">: </tspan>
      <tspan class="highlight">"让重复的工作消失"</tspan>
    </text>
    <text y="170" class="terminal-text text">}</text>
    
    <!-- Line 3: ls skills -->
    <text y="200" class="terminal-text">
      <tspan class="prompt">❯</tspan>
      <tspan class="command"> ls skills/</tspan>
    </text>
    <text y="220" class="terminal-text info">TypeScript  Python  Vue.js  React  Node.js  FastAPI  Docker  OpenAI  Claude</text>
    
    <!-- Line 4: contact -->
    <text y="250" class="terminal-text">
      <tspan class="prompt">❯</tspan>
      <tspan class="command"> echo $CONTACT</tspan>
    </text>
    <text y="270" class="terminal-text text">📧 leekjay@foxmail.com   🐙 github.com/LeekJay</text>
    
    <!-- Cursor -->
    <text y="300" class="terminal-text">
      <tspan class="prompt">❯</tspan>
      <tspan class="cursor"> █</tspan>
    </text>
  </g>
</svg>`;

// Write to file
fs.writeFileSync('terminal.svg', svg);
console.log('Generated terminal.svg');
