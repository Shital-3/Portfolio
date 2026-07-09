import { useEffect, useState } from 'react';
import './Hero.css';

const LINES = [
  { prompt: '$ whoami', output: 'Shital Nirmal' },
  { prompt: '$ cat role.txt', output: 'Full-Stack Developer — React, FastAPI, MySQL' },
  { prompt: '$ status --current', output: 'Final-year B.Tech CE • open to internships & full-time roles' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState('');

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const full = LINES[visibleLines].output;
    let i = 0;
    setTypedOutput('');
    const interval = setInterval(() => {
      i += 1;
      setTypedOutput(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(interval);
        setTimeout(() => setVisibleLines((v) => v + 1), 350);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [visibleLines]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
           
            <h1>
              I build interfaces
              <br />
              that <span className="accent">ship</span>.
            </h1>
            <p className="hero-sub">
              React frontends, FastAPI backends, and the placement-grind DSA practice
              in between. Based in Pune, India.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View projects</a>
              <a href="#contact" className="btn btn-ghost">Get in touch</a>
            </div>
          </div>

          <div className="terminal" role="img" aria-label="Terminal introduction: Shital Nirmal, Full-Stack Developer, final-year student open to internships and full-time roles">
            <div className="terminal-bar">
              <span className="dot dot-red" />
              <span className="dot dot-amber" />
              <span className="dot dot-green" />
              <span className="terminal-title">shital@portfolio ~ </span>
            </div>
            <div className="terminal-body">
              {LINES.slice(0, visibleLines).map((line, idx) => (
                <div key={idx} className="terminal-line">
                  <div className="terminal-prompt">{line.prompt}</div>
                  <div className="terminal-output">{line.output}</div>
                </div>
              ))}
              {visibleLines < LINES.length && (
                <div className="terminal-line">
                  <div className="terminal-prompt">{LINES[visibleLines].prompt}</div>
                  <div className="terminal-output">
                    {typedOutput}
                    <span className="cursor" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
