import React from "react";
import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UserPlus size={28} />,
    title: "Crie sua conta",
    description:
      "Cadastro gratuito em menos de 1 minuto. Sem cartão de crédito, sem burocracia.",
    color: "#9B6DFF",
  },
  {
    number: "02",
    icon: <LayoutDashboard size={28} />,
    title: "Organize suas finanças",
    description:
      "Adicione carteiras, registre receitas e despesas por categoria. Importe extratos bancários.",
    color: "#00E87A",
  },
  {
    number: "03",
    icon: <Target size={28} />,
    title: "Alcance seus objetivos",
    description:
      "Visualize relatórios, defina metas e tome decisões financeiras com confiança.",
    color: "#38BDF8",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-section">
      <div className="how-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Como Funciona</span>
          <h2 className="section-title">Simples do início ao fim</h2>
          <p className="section-sub">
            Em três passos você já tem controle total das suas finanças
          </p>
        </motion.div>

        <div className="steps-row">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="step-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{ "--sc": step.color }}
              >
                <div className="step-num">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                <div className="step-accent" />
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.35 }}
                >
                  <div className="arrow-line" />
                  <div className="arrow-head" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div
          className="how-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="https://moovia.vercel.app/login" className="btn-how">
            Começar agora — é gratuito
          </a>
          <p className="how-note">Sem cartão de crédito · Cancele quando quiser</p>
        </motion.div>
      </div>

      <style>{`
        .how-section {
          padding: 100px 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .how-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(108, 43, 217, 0.08) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          filter: blur(40px);
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .section-label {
          display: inline-block;
          padding: 0.3rem 1rem;
          background: rgba(108, 43, 217, 0.1);
          border: 1px solid rgba(108, 43, 217, 0.22);
          border-radius: 100px;
          color: var(--purple-bright);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-family: var(--font-body);
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          background: linear-gradient(160deg, var(--text-primary) 40%, rgba(238,240,255,0.5) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-sub {
          color: var(--text-secondary);
          font-size: 1.05rem;
          max-width: 460px;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .steps-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          position: relative;
          z-index: 1;
          margin-bottom: 4rem;
        }

        .step-card {
          flex: 1;
          max-width: 300px;
          padding: 2.25rem 2rem;
          background: rgba(255, 255, 255, 0.022);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          text-align: center;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s, background 0.3s;
        }

        .step-card:hover {
          border-color: color-mix(in srgb, var(--sc) 30%, transparent);
          background: rgba(255, 255, 255, 0.04);
        }

        .step-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--sc);
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .step-card:hover .step-accent { opacity: 0.9; }

        .step-num {
          font-family: var(--font-mono);
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--sc);
          opacity: 0.1;
          line-height: 1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.05em;
        }

        .step-icon {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--sc) 10%, transparent);
          color: var(--sc);
          border: 1px solid color-mix(in srgb, var(--sc) 18%, transparent);
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .step-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .step-arrow {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          transform-origin: left center;
          flex-shrink: 0;
        }

        .arrow-line {
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, rgba(108,43,217,0.4), rgba(0,232,122,0.3));
        }

        .arrow-head {
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 7px solid rgba(0, 232, 122, 0.4);
          margin-left: -1px;
        }

        .how-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }

        .btn-how {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2.5rem;
          background: var(--purple);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-size: 1rem;
          font-family: var(--font-body);
          letter-spacing: -0.01em;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(108, 43, 217, 0.4);
        }

        .btn-how:hover {
          background: #5A22C0;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(108, 43, 217, 0.55);
        }

        .how-note {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        @media (max-width: 800px) {
          .steps-row {
            flex-direction: column;
            align-items: center;
            gap: 1.25rem;
          }
          .step-arrow {
            transform: rotate(90deg);
            padding: 0;
          }
          .arrow-line { width: 30px; }
          .step-card { max-width: 100%; width: 100%; }
          .how-section { padding: 70px 0; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
