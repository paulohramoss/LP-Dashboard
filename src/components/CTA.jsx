import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-glow cta-glow-1"></div>
      <div className="cta-glow cta-glow-2"></div>

      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <div className="cta-badge">
            <Zap size={14} fill="currentColor" />
            <span>Comece hoje mesmo</span>
          </div>

          <h2 className="cta-title">
            Pronto para dominar<br />suas finanças?
          </h2>

          <p className="cta-subtitle">
            Junte-se a mais de 5.000 usuários que já transformaram sua relação
            com o dinheiro. Gratuito, sem cartão de crédito.
          </p>

          <div className="cta-actions">
            <a href="https://moovia.vercel.app/login" className="btn-cta-primary">
              Criar conta gratuitamente
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="cta-checks">
            {[
              "Gratuito para sempre",
              "Sem cartão de crédito",
              "Dados 100% seguros",
              "Cancele quando quiser",
            ].map((item) => (
              <div key={item} className="cta-check">
                <span className="check-dot">✓</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-section {
          padding: 80px 0 100px;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .cta-glow-1 {
          width: 500px;
          height: 500px;
          background: rgba(124, 58, 237, 0.12);
          top: -100px;
          left: -100px;
        }

        .cta-glow-2 {
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.08);
          bottom: -80px;
          right: -80px;
        }

        .cta-box {
          position: relative;
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 100px;
          color: var(--accent-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .cta-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, #fff 30%, var(--accent-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .cta-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 520px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
          position: relative;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .btn-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 1rem 2.5rem;
          background: var(--accent-primary);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(124, 58, 237, 0.45),
                      0 0 60px rgba(124, 58, 237, 0.15);
        }

        .btn-cta-primary:hover {
          background: #6d28d9;
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(124, 58, 237, 0.6),
                      0 0 80px rgba(124, 58, 237, 0.2);
        }

        .cta-checks {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem 2rem;
          position: relative;
        }

        .cta-check {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .check-dot {
          color: #10b981;
          font-weight: 700;
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          .cta-box { padding: 2.5rem 1.25rem; }
          .cta-checks { gap: 0.75rem 1.25rem; }
        }
      `}</style>
    </section>
  );
};

export default CTA;
