import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src={logo} alt="FinanceDash" className="logo-img" />
          <span className="logo-text">FinanceDash</span>
        </Link>
        <a
          href="https://github.com/paulohramoss/Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          background: rgba(10, 10, 22, 0.8);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
          font-size: 1.25rem;
        }

        .logo-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
        }

        .github-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .github-link:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
          border-color: var(--accent-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
