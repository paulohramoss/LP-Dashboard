import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Heart } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="EazyDash" className="footer-logo-img" />
              <span className="footer-logo-text">EazyDash</span>
            </div>
            <p className="footer-desc">
              Seu controle financeiro pessoal, simplificado e inteligente.
              Tome melhores decisões com dados precisos.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Projeto</h4>
            <a
              href="https://github.com/paulohramoss/Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={15} />
              Repositório GitHub
            </a>
            <Link to="/termos-de-uso" className="footer-link">
              Termos de Uso
            </Link>
            <Link to="/politica-de-privacidade" className="footer-link">
              Política de Privacidade
            </Link>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Desenvolvedores</h4>
            <div className="devs">
              <a
                href="https://www.linkedin.com/in/paulo-ramos-83402818a/"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-card"
              >
                <div className="dev-avatar" style={{ background: "#6C2BD9" }}>PR</div>
                <div className="dev-info">
                  <span className="dev-name">Paulo Ramos</span>
                  <span className="dev-role">Full Stack Developer</span>
                </div>
                <Linkedin size={14} className="dev-li" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-schmitz-donada-760678233"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-card"
              >
                <div className="dev-avatar" style={{ background: "#2563eb" }}>GD</div>
                <div className="dev-info">
                  <span className="dev-name">Gabriel Donada</span>
                  <span className="dev-role">Frontend Developer</span>
                </div>
                <Linkedin size={14} className="dev-li" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EazyDash. Todos os direitos reservados.</p>
          <div className="made-with">
            Feito com <Heart size={13} className="heart" /> e React
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 80px 0 28px;
          border-top: 1px solid var(--border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .footer-logo-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .footer-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.65;
          max-width: 280px;
          font-family: var(--font-body);
        }

        .footer-col-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-family: var(--font-body);
          margin-bottom: 0.875rem;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          color: var(--purple-bright);
          transform: translateX(3px);
        }

        .devs {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .dev-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0.875rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: all 0.25s ease;
        }

        .dev-card:hover {
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(108, 43, 217, 0.28);
          transform: translateY(-2px);
        }

        .dev-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
          font-family: var(--font-body);
        }

        .dev-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dev-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          font-family: var(--font-body);
        }

        .dev-role {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        .dev-li {
          color: var(--text-secondary);
          opacity: 0.4;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .dev-card:hover .dev-li {
          opacity: 1;
          color: #0077b5;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.75rem;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-family: var(--font-body);
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .heart {
          color: #FF4455;
          fill: #FF4455;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-desc { max-width: 100%; }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
