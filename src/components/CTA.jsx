import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const checks = [
  "Gratuito para sempre",
  "Sem cartão de crédito",
  "Dados 100% seguros",
  "Cancele quando quiser",
];

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-orb cta-orb-1" />
      <div className="cta-orb cta-orb-2" />
      <div className="cta-orb cta-orb-3" />

      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-inner">
            <div className="cta-badge">
              <span className="cta-badge-dot" />
              Comece hoje — é gratuito
            </div>

            <h2 className="cta-title">
              Pronto para dominar<br />suas finanças?
            </h2>

            <p className="cta-sub">
              Junte-se a mais de 5.000 usuários que já transformaram sua relação
              com o dinheiro.
            </p>

            <a href="https://moovia.vercel.app/login" className="cta-btn">
              Criar conta gratuitamente
              <ArrowRight size={18} />
            </a>

            <div className="cta-checks">
              {checks.map((item) => (
                <div key={item} className="cta-check">
                  <span className="check-icon"><Check size={12} strokeWidth={3} /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-section {
          padding: 80px 0 100px;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .cta-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-orb-1 {
          width: 600px;
          height: 600px;
          background: rgba(108, 43, 217, 0.14);
          filter: blur(100px);
          top: -150px;
          left: -100px;
        }

        .cta-orb-2 {
          width: 500px;
          height: 500px;
          background: rgba(0, 232, 122, 0.06);
          filter: blur(100px);
          bottom: -100px;
          right: -80px;
        }

        .cta-orb-3 {
          width: 300px;
          height: 300px;
          background: rgba(108, 43, 217, 0.1);
          filter: blur(80px);
          top: 50%;
          right: 20%;
          transform: translateY(-50%);
        }

        .cta-box {
          position: relative;
          border-radius: 28px;
          background: rgba(108, 43, 217, 0.06);
          border: 1px solid rgba(108, 43, 217, 0.2);
          overflow: hidden;
          z-index: 1;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(108, 43, 217, 0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .cta-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(155, 109, 255, 0.6), transparent);
        }

        .cta-inner {
          position: relative;
          text-align: center;
          padding: 4.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .cta-badge {
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
          margin-bottom: 1.75rem;
          font-family: var(--font-body);
        }

        .cta-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: cdpulse 2s ease-in-out infinite;
          flex-shrink: 0;
          display: inline-block;
        }

        @keyframes cdpulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--purple-bright) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-sub {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 480px;
          line-height: 1.65;
          margin-bottom: 2.5rem;
          font-family: var(--font-body);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2.5rem;
          background: var(--purple);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-size: 1rem;
          font-family: var(--font-body);
          letter-spacing: -0.01em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(108, 43, 217, 0.5), 0 0 60px rgba(108, 43, 217, 0.15);
          margin-bottom: 2rem;
        }

        .cta-btn:hover {
          background: #5A22C0;
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(108, 43, 217, 0.65), 0 0 80px rgba(108, 43, 217, 0.2);
        }

        .cta-checks {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem 2rem;
        }

        .cta-check {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        .check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(0, 232, 122, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--green);
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .cta-inner { padding: 3rem 1.5rem; }
          .cta-checks { gap: 0.6rem 1.25rem; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
