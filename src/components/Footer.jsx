import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>shital.dev — built with React + Vite</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
