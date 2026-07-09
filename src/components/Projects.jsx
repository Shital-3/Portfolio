import { ArrowUpRight, Code2 } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    name: 'Campus Connect',
    desc: 'Role-based placement management system for students, admins, and alumni — with an AI-powered resume match score using the Gemini API.',
    stack: ['FastAPI', 'SQLAlchemy', 'MySQL', 'JWT'],
    repo: 'https://github.com/Shital-3/campus-connect',
    demo: null, // add Vercel/hosting link here once deployed
    image: '/images/campus-connect.png',
  },
  {
    name: 'Torii',
    desc: 'A Japanese learning platform — Hiragana, Katakana, Kanji, vocabulary, flashcards, and quizzes with local progress tracking.',
    stack: ['React 18', 'Vite', 'Context API'],
    repo: 'https://github.com/Shital-3/torii-learn',
    demo: 'https://torii-learn.vercel.app/',
    image: '/images/torii.png',
  },
  {
    name: 'Darshan Productions',
    desc: 'Cinematic, fully responsive website built for a real production-house client — freelance frontend work start to finish.',
    stack: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/Shital-3/Darshan_Production',
    demo: null, // add Vercel/hosting link here once deployed
    image: '/images/darshan-production.png',
  },
  {
    name: 'Daily DSA — Java',
    desc: 'Topic-wise DSA practice log — 16+ topics from arrays to recursion, built as structured placement prep.',
    stack: ['Java', 'DSA'],
    repo: 'https://github.com/Shital-3/Daily-Dsa-Java',
    demo: null,
    image: '/images/daily-dsa.svg',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        
        <h2 className="section-title">Projects</h2>

        <div className="project-list">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.name}>
              {p.image ? (
                <div className="project-thumb">
                  <img src={p.image} alt={`${p.name} preview`} loading="lazy" />
                  <div className="project-thumb-overlay" />
                </div>
              ) : (
                <div className="project-thumb project-thumb-code" aria-hidden="true">
                  <div className="code-line"><span className="code-kw">public class</span> <span className="code-fn">DutchFlagAlgorithm</span> {'{'}</div>
                  <div className="code-line code-indent"><span className="code-kw">public static void</span> <span className="code-fn">sort</span>(<span className="code-type">int[]</span> arr) {'{'}</div>
                  <div className="code-line code-indent2"><span className="code-type">int</span> low = 0, mid = 0, high = arr.length - 1;</div>
                  <div className="code-line code-indent2"><span className="code-kw">while</span> (mid {'<='} high) {'{'}</div>
                  <div className="code-line code-indent3"><span className="code-kw">if</span> (arr[mid] == 0) swap(arr, low++, mid++);</div>
                  <div className="code-line code-indent3"><span className="code-kw">else if</span> (arr[mid] == 1) mid++;</div>
                  <div className="code-line code-indent3"><span className="code-kw">else</span> swap(arr, mid, high--);</div>
                  <div className="code-line code-indent2">{'}'}</div>
                  <div className="code-line code-indent">{'}'}</div>
                  <div className="code-line">{'}'}</div>
                  <div className="project-thumb-overlay" />
                </div>
              )}

              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="project-btn">
                    <Code2 size={15} />
                    <span>Code</span>
                  </a>
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-btn project-btn-primary">
                      <ArrowUpRight size={15} />
                      <span>Live demo</span>
                    </a>
                  ) : (
                    <span className="project-btn project-btn-disabled" aria-disabled="true">
                      <ArrowUpRight size={15} />
                      <span>Demo coming soon</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
