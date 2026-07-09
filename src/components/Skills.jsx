import './Skills.css';

const GROUPS = [
  { label: 'frontend', items: ['React 18', 'Vite', 'JavaScript (ES6+)', 'CSS Modules'] },
  { label: 'backend', items: ['FastAPI', 'SQLAlchemy', 'JWT Auth', 'REST APIs'] },
  { label: 'database', items: ['MySQL'] },
  { label: 'languages', items: ['Java', 'Python', 'JavaScript'] },
  { label: 'tools', items: ['Git', 'GitHub', 'Vercel', 'Postman'] },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
       
        <h2 className="section-title">Stack</h2>

        <div className="skills-manifest">
          <div className="manifest-line">{'{'}</div>
          {GROUPS.map((g, idx) => (
            <div className="manifest-group" key={g.label}>
              <span className="manifest-key">"{g.label}"</span>
              <span className="manifest-colon">: [</span>
              <div className="manifest-items">
                {g.items.map((item) => (
                  <span className="manifest-item" key={item}>"{item}"</span>
                ))}
              </div>
              <span className="manifest-colon">]{idx < GROUPS.length - 1 ? ',' : ''}</span>
            </div>
          ))}
          <div className="manifest-line">{'}'}</div>
        </div>
      </div>
    </section>
  );
}
