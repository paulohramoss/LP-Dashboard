import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Recursos", href: "#features" },
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Depoimentos", href: "#testimonials" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-content">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="FinanceDash" className="logo-img" />
          <span className="logo-text">FinanceDash</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a
            href="https://github.com/paulohramoss/Dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://moovia.vercel.app/login"
            className="btn-nav-cta"
          >
            Entrar
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://moovia.vercel.app/login"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Começar Agora
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(10, 10, 22, 0.6);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .navbar-scrolled {
          background: rgba(10, 10, 22, 0.92);
          border-bottom-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .logo-img {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-link {
          padding: 0.5rem 0.85rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .github-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          color: var(--text-secondary);
        }

        .github-link:hover {
          background: rgba(255, 255, 255, 0.09);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.18);
          transform: translateY(-1px);
        }

        .btn-nav-cta {
          padding: 0.5rem 1.2rem;
          background: var(--accent-primary);
          color: white;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 2px 12px rgba(124, 58, 237, 0.35);
        }

        .btn-nav-cta:hover {
          background: #6d28d9;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(124, 58, 237, 0.5);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 0.75rem 1.5rem 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(10, 10, 22, 0.97);
          gap: 0.25rem;
        }

        .mobile-link {
          padding: 0.75rem 0.5rem;
          color: var(--text-secondary);
          font-weight: 500;
          border-radius: var(--radius-md);
          transition: color 0.2s;
        }

        .mobile-link:hover {
          color: var(--text-primary);
        }

        .mobile-cta {
          margin-top: 0.5rem;
          padding: 0.85rem;
          background: var(--accent-primary);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 600;
          text-align: center;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-right { display: none; }
          .menu-toggle { display: flex; }
          .mobile-menu { display: flex; }
          .navbar { height: auto; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
