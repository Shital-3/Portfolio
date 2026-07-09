import { Link2, Mail, Code2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
      
        <h2 className="section-title">Let's talk</h2>
        <p className="contact-sub">
          Open to frontend and full-stack internships, and full-time roles after
          graduation. Reach out — I usually reply within a day.
        </p>

        <div className="contact-links">
          <a href="mailto:YOUR-EMAIL@example.com" className="contact-link">
            <Mail size={18} />
            <span>YOUR-EMAIL@example.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Link2 size={18} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Shital-3"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Code2 size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
