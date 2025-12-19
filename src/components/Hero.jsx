import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dashboardPreview from "../assets/dashboard-preview.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-gradient"></div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <div className="badge">
            <span>Novo: Módulo de Investimentos</span>
            <ChevronRight size={14} />
          </div>

          <h1 className="hero-title">
            Domine suas finanças com{" "}
            <span className="gradient-text">Inteligência</span>
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
              Começar Agora
              <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn btn-secondary">
              Conhecer Recursos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-wrapper"
        >
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
          z-index: -1;
          filter: blur(80px);
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4rem;
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
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 100px;
          color: var(--accent-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
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
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 2rem;
          border-radius: var(--radius-lg);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

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
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
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

        @media (max-width: 768px) {
          
        }
      `}</style>
    </section>
  );
};

export default Hero;
