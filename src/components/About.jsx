import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        
        <h2 className="section-title">About</h2>
        <div className="about-body">
          <p>
            I'm a final-year B.Tech Computer Engineering student, currently focused on
            landing a frontend or full-stack role through campus placements. Most of my
            work sits at the intersection of React on the frontend and FastAPI on the
            backend — I like understanding how systems fit together, not just shipping
            features.
          </p>
          <p>
            Outside of coursework, I practice DSA in Java daily, build side projects end
            to end (including one freelance client site), and I'm currently designing
            <strong> Dilemmo</strong> — a platform for structured alumni experience-sharing,
            currently in active development.
          </p>
          <p>
            When I'm not writing code, I'm usually deep in Japanese language learning —
            which is also what led to building Torii in the first place.
          </p>
        </div>
      </div>
    </section>
  );
}
