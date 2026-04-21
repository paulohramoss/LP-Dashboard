import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Recursos", href: "#features" },
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Depoimentos", href: "#testimonials" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className={`navbar-inner ${scrolled ? "floating" : "full"}`}>
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="EazyDash" className="logo-img" />
          <span className="logo-text">EazyDash</span>
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
            className="github-btn"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a href="https://moovia.vercel.app/login" className="btn-nav-cta">
            Entrar
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
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
            Começar Agora — Grátis
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1.5rem;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .navbar-inner.full {
          max-width: 1200px;
          height: 72px;
          background: transparent;
          padding: 0;
        }

        .navbar-inner.floating {
          max-width: 860px;
          height: 54px;
          background: rgba(7, 8, 15, 0.88);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0 1.5rem;
          margin-top: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(108, 43, 217, 0.08);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-primary);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }

        .logo-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .nav-link {
          padding: 0.45rem 0.9rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 100px;
          transition: all 0.2s ease;
          font-family: var(--font-body);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.06);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .github-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          border-radius: 50%;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .github-btn:hover {
          background: rgba(255, 255, 255, 0.09);
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.14);
          transform: translateY(-1px);
        }

        .btn-nav-cta {
          padding: 0.45rem 1.25rem;
          background: var(--purple);
          color: white;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          font-family: var(--font-body);
          letter-spacing: -0.01em;
          transition: all 0.25s ease;
          box-shadow: 0 2px 12px rgba(108, 43, 217, 0.4);
        }

        .btn-nav-cta:hover {
          background: #5A22C0;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(108, 43, 217, 0.55);
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
          width: 100%;
          max-width: 1200px;
          padding: 0.75rem 1rem 1.25rem;
          background: rgba(7, 8, 15, 0.97);
          border-top: 1px solid var(--border);
          gap: 0.25rem;
        }

        .mobile-link {
          padding: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
          border-radius: var(--radius-md);
          transition: color 0.2s;
          font-family: var(--font-body);
        }

        .mobile-link:hover { color: var(--text-primary); }

        .mobile-cta {
          margin-top: 0.5rem;
          padding: 0.9rem;
          background: var(--purple);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          text-align: center;
          font-family: var(--font-body);
          box-shadow: 0 4px 20px rgba(108, 43, 217, 0.4);
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-right { display: none; }
          .menu-toggle { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
