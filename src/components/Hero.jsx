import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import dashboardPreview from "../assets/dashboard-preview.png";

const typingWords = ["Inteligência", "Praticidade", "Controle", "Liberdade"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText((prev) =>
            isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
          );
        },
        isDeleting ? 55 : 95
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="hero">
      <div className="bg-gradient"></div>
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.div
            className="badge"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="badge-dot"></span>
            <span>Novo: Módulo de Investimentos</span>
            <ChevronRight size={14} />
          </motion.div>

          <h1 className="hero-title">
            Domine suas finanças com{" "}
            <span className="gradient-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            O FinanceDash transforma a maneira como você gerencia seu dinheiro.
            Dashboard interativo, controle de gastos e planejamento futuro em
            uma única plataforma.
          </p>

          <div className="hero-actions">
            <a
              href="https://moovia.vercel.app/login"
              className="btn btn-primary"
            >
              Começar Agora — É Gratuito
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn btn-secondary">
              Conhecer Recursos
            </a>
          </div>

          <div className="social-proof">
            <div className="avatars">
              {["P", "G", "M", "L", "A"].map((letter, i) => (
                <div
                  key={i}
                  className="avatar"
                  style={{
                    zIndex: 5 - i,
                    background: [
                      "#7c3aed",
                      "#2563eb",
                      "#059669",
                      "#d97706",
                      "#db2777",
                    ][i],
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="social-text">
              <strong>+5.000 usuários</strong> já controlam suas finanças
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="hero-image-wrapper"
        >
          <motion.div
            className="float-card float-card-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="float-icon-wrap success">
              <TrendingUp size={14} />
            </div>
            <div>
              <p className="float-label">Receitas</p>
              <p className="float-value success-text">R$ 5.031,40</p>
            </div>
          </motion.div>

          <motion.div
            className="float-card float-card-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <div className="float-icon-wrap danger">
              <TrendingDown size={14} />
            </div>
            <div>
              <p className="float-label">Despesas</p>
              <p className="float-value danger-text">R$ 3.936,60</p>
            </div>
          </motion.div>

          <motion.div
            className="float-card float-card-3"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="float-icon-wrap purple">
              <Wallet size={14} />
            </div>
            <div>
              <p className="float-label">Saldo Total</p>
              <p className="float-value purple-text">R$ 1.094,80</p>
            </div>
          </motion.div>

          <div className="hero-image-container">
            <img
              src={dashboardPreview}
              alt="FinanceDash Dashboard Preview"
              className="dashboard-preview"
            />
          </div>
          <div className="glow-effect"></div>
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding-top: 140px;
          padding-bottom: 80px;
          overflow: hidden;
          min-height: 100vh;
        }

        .bg-gradient {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 60%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(10, 10, 22, 0) 70%);
          z-index: 0;
          filter: blur(80px);
          pointer-events: none;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .bg-orb-1 {
          width: 500px;
          height: 500px;
          background: rgba(124, 58, 237, 0.08);
          top: 10%;
          left: -10%;
          animation: orbFloat1 10s ease-in-out infinite;
        }

        .bg-orb-2 {
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.06);
          bottom: 0;
          right: -5%;
          animation: orbFloat2 12s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.25);
          border-radius: 100px;
          color: var(--accent-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-secondary);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          min-width: 2ch;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
          background: linear-gradient(135deg, #fff 0%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-subtitle {
          font-size: clamp(1.125rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border-radius: var(--radius-lg);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.55);
          background: #6d28d9;
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Social Proof */
        .social-proof {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .avatars {
          display: flex;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          border: 2px solid var(--bg-primary);
          margin-left: -8px;
        }

        .avatars .avatar:first-child {
          margin-left: 0;
        }

        .social-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .social-text strong {
          color: var(--text-primary);
        }

        /* Hero Image */
        .hero-image-wrapper {
          width: 100%;
          max-width: 1000px;
          position: relative;
        }

        .hero-image-container {
          background: rgba(19, 19, 43, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 60px -10px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          line-height: 0;
        }

        .dashboard-preview {
          width: 100%;
          height: auto;
          display: block;
        }

        .glow-effect {
          position: absolute;
          inset: -20px;
          background: linear-gradient(180deg, rgba(124, 58, 237, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
          z-index: -1;
          filter: blur(40px);
          border-radius: var(--radius-lg);
        }

        /* Floating Cards */
        .float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1rem;
          background: rgba(13, 13, 30, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          z-index: 10;
          white-space: nowrap;
        }

        .float-card-1 {
          top: -16px;
          left: -20px;
        }

        .float-card-2 {
          bottom: 60px;
          right: -20px;
        }

        .float-card-3 {
          top: 40%;
          left: -24px;
        }

        .float-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .float-icon-wrap.success {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .float-icon-wrap.danger {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }

        .float-icon-wrap.purple {
          background: rgba(124, 58, 237, 0.15);
          color: var(--accent-secondary);
        }

        .float-label {
          font-size: 0.7rem;
          color: var(--text-secondary);
          line-height: 1;
          margin-bottom: 2px;
        }

        .float-value {
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1;
        }

        .success-text { color: #10b981; }
        .danger-text { color: #ef4444; }
        .purple-text { color: var(--accent-secondary); }

        @media (max-width: 768px) {
          .float-card-1 { top: -12px; left: 8px; }
          .float-card-2 { bottom: 40px; right: 8px; }
          .float-card-3 { display: none; }
          .hero-title { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
