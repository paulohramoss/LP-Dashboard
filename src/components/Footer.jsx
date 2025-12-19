import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, LayoutDashboard, Heart } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="FinanceDash" className="logo-img" />
              <span className="logo-text">FinanceDash</span>
            </div>
            <p className="brand-description">
              Seu controle financeiro pessoal, simplificado e inteligente. Tome
              melhores decisões com dados precisos.
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links-group">
            <h4>Projeto</h4>
            <a
              href="https://github.com/paulohramoss/Dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={16} />
              Repositório GitHub
            </a>
            <Link to="/termos-de-uso" className="footer-link">
              Termos de Uso
            </Link>
            <Link to="/politica-de-privacidade" className="footer-link">
              Política de Privacidade
            </Link>
          </div>

          {/* Developers Section */}
          <div className="footer-links-group">
            <h4>Desenvolvido por</h4>
            <div className="developers-list">
              <a
                href="https://www.linkedin.com/in/paulo-ramos-83402818a/"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-card"
              >
                <div className="dev-avatar">PR</div>
                <div className="dev-info">
                  <span className="dev-name">Paulo Ramos</span>
                  <span className="dev-role">Full Stack Developer</span>
                </div>
                <Linkedin size={16} className="dev-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/gabriel-schmitz-donada-760678233"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-card"
              >
                <div className="dev-avatar">GD</div>
                <div className="dev-info">
                  <span className="dev-name">Gabriel Donada</span>
                  <span className="dev-role">Frontend Developer</span>
                </div>
                <Linkedin size={16} className="dev-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FinanceDash.</p>
          <div className="made-with">
            <span>Feito com</span>
            <Heart size={14} className="heart-icon" />
            <span>e React</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 80px 0 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        /* Brand Styles */
        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .logo-img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .brand-description {
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 320px;
        }

        /* Links Styles */
        .footer-links-group h4 {
          color: var(--text-primary);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          transition: all 0.2s;
          text-decoration: none;
        }

        .footer-link:hover {
          color: var(--accent-primary);
          transform: translateX(4px);
        }

        /* Developers Styles */
        .developers-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .dev-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .dev-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
        }

        .dev-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--accent-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
        }

        .dev-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .dev-name {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .dev-role {
          color: var(--text-secondary);
          font-size: 0.75rem;
        }

        .dev-icon {
          color: var(--text-secondary);
          opacity: 0.5;
          transition: opacity 0.2s;
        }

        .dev-card:hover .dev-icon {
          opacity: 1;
          color: #0077b5; /* LinkedIn Color */
        }

        /* Bottom Styles */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: var(--danger);
          fill: var(--danger);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .brand-description {
            max-width: 100%;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
