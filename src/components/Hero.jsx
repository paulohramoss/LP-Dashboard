import React, { useState, useEffect } from "react";
import { ArrowRight, TrendingUp, TrendingDown, Wallet } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import dashboardPreview from "../assets/dashboard-preview.png";

const typingWords = ["Inteligência", "Facilidade", "Controle", "Liberdade"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    let timeout;
    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }, 0);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        );
      }, isDeleting ? 48 : 88);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      <div className="container hero-layout">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-badge">
            <span className="badge-pulse" />
            Dashboard Financeiro Pessoal
          </div>

          <h1 className="hero-title">
            Domine suas<br />
            finanças com{" "}
            <span className="hero-accent">
              {displayText}
              <span className="cursor" />
            </span>
          </h1>

          <p className="hero-sub">
            Transforme dados em decisões. Dashboard interativo, múltiplas
            carteiras, orçamentos inteligentes e relatórios — tudo gratuito,
            tudo num só lugar.
          </p>

          <div className="hero-actions">
            <a href="https://moovia.vercel.app/login" className="btn-cta">
              Começar Gratuitamente
              <ArrowRight size={17} />
            </a>
            <a href="#features" className="btn-outline">
              Ver Recursos
            </a>
          </div>

          <div className="social-proof">
            <div className="avatars">
              {[
                { l: "P", c: "#6C2BD9" },
                { l: "G", c: "#2563eb" },
                { l: "M", c: "#00c96a" },
                { l: "L", c: "#d97706" },
                { l: "A", c: "#db2777" },
              ].map((a, i) => (
                <div key={i} className="avatar" style={{ zIndex: 5 - i, background: a.c }}>
                  {a.l}
                </div>
              ))}
            </div>
            <p className="proof-text">
              <strong>+5.000 usuários</strong> no controle das suas finanças
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="float-card fc-top"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="fc-icon i-green"><TrendingUp size={13} /></div>
            <div>
              <p className="fc-label">Receitas</p>
              <p className="fc-val v-green">R$ 5.031,40</p>
            </div>
          </motion.div>

          <motion.div
            className="float-card fc-right"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          >
            <div className="fc-icon i-red"><TrendingDown size={13} /></div>
            <div>
              <p className="fc-label">Despesas</p>
              <p className="fc-val v-red">R$ 3.936,60</p>
            </div>
          </motion.div>

          <motion.div
            className="float-card fc-left"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="fc-icon i-purple"><Wallet size={13} /></div>
            <div>
              <p className="fc-label">Saldo Total</p>
              <p className="fc-val v-purple">R$ 1.094,80</p>
            </div>
          </motion.div>

          <div className="dashboard-frame">
            <img src={dashboardPreview} alt="EazyDash preview" className="dashboard-img" />
          </div>
          <div className="frame-glow" />
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          padding-top: 120px;
          padding-bottom: 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 65% 40%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 70% at 65% 40%, black 20%, transparent 80%);
          pointer-events: none;
        }

        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .orb-1 {
          width: 700px;
          height: 700px;
          background: rgba(108, 43, 217, 0.16);
          filter: blur(100px);
          top: -15%;
          right: -8%;
          animation: orbDrift 14s ease-in-out infinite;
        }

        .orb-2 {
          width: 450px;
          height: 450px;
          background: rgba(0, 232, 122, 0.07);
          filter: blur(90px);
          bottom: -5%;
          left: 2%;
          animation: orbDrift 18s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(108, 43, 217, 0.1);
          filter: blur(120px);
          top: 50%;
          left: 35%;
          transform: translateY(-50%);
          animation: orbDrift 10s ease-in-out infinite;
        }

        @keyframes orbDrift {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(20px, -25px); }
          66% { transform: translate(-15px, 15px); }
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          background: rgba(0, 232, 122, 0.08);
          border: 1px solid rgba(0, 232, 122, 0.22);
          border-radius: 100px;
          color: var(--green);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-bottom: 2rem;
          font-family: var(--font-body);
        }

        .badge-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: bpulse 2s ease-in-out infinite;
          flex-shrink: 0;
          display: inline-block;
        }

        @keyframes bpulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.75rem, 4.2vw, 4.25rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .hero-accent {
          display: block;
          color: var(--green);
          min-height: 1.12em;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.82em;
          background: var(--green);
          margin-left: 3px;
          vertical-align: text-bottom;
          border-radius: 2px;
          animation: cblink 1s step-end infinite;
        }

        @keyframes cblink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-sub {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          max-width: 460px;
          font-family: var(--font-body);
        }

        .hero-actions {
          display: flex;
          gap: 0.875rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          background: var(--purple);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-size: 0.95rem;
          font-family: var(--font-body);
          letter-spacing: -0.01em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(108, 43, 217, 0.45);
        }

        .btn-cta:hover {
          background: #5A22C0;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(108, 43, 217, 0.6);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.75rem;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          font-weight: 600;
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: all 0.25s ease;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
        }

        .social-proof {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatars { display: flex; }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.68rem;
          font-weight: 700;
          color: white;
          border: 2px solid var(--bg-primary);
          margin-left: -8px;
          font-family: var(--font-body);
        }

        .avatars .avatar:first-child { margin-left: 0; }

        .proof-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        .proof-text strong { color: var(--text-primary); }

        .hero-visual { position: relative; }

        .dashboard-frame {
          background: rgba(13, 15, 30, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          overflow: hidden;
          box-shadow:
            0 40px 80px -10px rgba(0, 0, 0, 0.7),
            0 0 0 1px rgba(108, 43, 217, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          line-height: 0;
          position: relative;
          z-index: 1;
        }

        .dashboard-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .frame-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(ellipse at 50% 30%, rgba(108, 43, 217, 0.28) 0%, transparent 65%);
          z-index: 0;
          filter: blur(20px);
          pointer-events: none;
        }

        .float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.55rem 0.9rem;
          background: rgba(7, 8, 15, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 11px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.55);
          z-index: 10;
          white-space: nowrap;
        }

        .fc-top   { top: -14px; left: -18px; }
        .fc-right { bottom: 55px; right: -18px; }
        .fc-left  { top: 42%; left: -22px; }

        .fc-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .i-green  { background: rgba(0, 232, 122, 0.12); color: var(--green); }
        .i-red    { background: rgba(255, 68, 85, 0.12);  color: #FF4455; }
        .i-purple { background: rgba(108, 43, 217, 0.15); color: var(--purple-bright); }

        .fc-label {
          font-size: 0.64rem;
          color: var(--text-secondary);
          line-height: 1;
          margin-bottom: 2px;
          font-family: var(--font-body);
        }

        .fc-val {
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1;
          font-family: var(--font-mono);
        }

        .v-green  { color: var(--green); }
        .v-red    { color: #FF4455; }
        .v-purple { color: var(--purple-bright); }

        @media (max-width: 1024px) {
          .hero-layout {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .hero-text {
            align-items: center;
            text-align: center;
          }
          .hero-title { text-align: center; }
          .hero-sub {
            text-align: center;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions { justify-content: center; }
          .social-proof { justify-content: center; }
          .hero-visual { max-width: 640px; margin: 0 auto; width: 100%; }
          .fc-left { display: none; }
          .fc-top  { top: -10px; left: 8px; }
          .fc-right { bottom: 40px; right: 8px; }
        }

        @media (max-width: 600px) {
          .hero { padding-top: 100px; padding-bottom: 60px; }
          .hero-title { font-size: 2.4rem; }
          .fc-top, .fc-right { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
