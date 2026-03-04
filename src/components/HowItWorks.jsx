import React from "react";
import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, Target } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UserPlus size={28} />,
    title: "Crie sua conta",
    description:
      "Cadastro gratuito em menos de 1 minuto. Sem cartão de crédito, sem burocracia. Comece a usar imediatamente.",
    color: "#7c3aed",
  },
  {
    number: "02",
    icon: <LayoutDashboard size={28} />,
    title: "Organize suas finanças",
    description:
      "Adicione suas carteiras, registre receitas e despesas por categoria. Importe extratos bancários com um clique.",
    color: "#2563eb",
  },
  {
    number: "03",
    icon: <Target size={28} />,
    title: "Alcance seus objetivos",
    description:
      "Visualize relatórios detalhados, defina metas de economia e tome decisões financeiras com mais confiança.",
    color: "#059669",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Como funciona</span>
          <h2 className="section-title">Simples do início ao fim</h2>
          <p className="section-subtitle">
            Em três passos você já tem controle total das suas finanças
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                style={{ "--step-color": step.color }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon-wrap">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-connector"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />
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
          <a href="https://moovia.vercel.app/login" className="btn-how-cta">
            Começar agora — é gratuito
          </a>
          <p className="how-cta-note">Sem cartão de crédito • Cancele quando quiser</p>
        </motion.div>
      </div>

      <style>{`
        .how-section {
          padding: 100px 0;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .how-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-label {
          display: inline-block;
          padding: 0.3rem 1rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 100px;
          color: var(--accent-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .steps-container {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          position: relative;
        }

        .step-card {
          flex: 1;
          max-width: 300px;
          padding: 2rem 1.75rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          text-align: center;
          position: relative;
          transition: background 0.3s, border-color 0.3s;
        }

        .step-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(124,58,237,0.2);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: var(--step-color);
          opacity: 0.12;
          line-height: 1;
          margin-bottom: 1.25rem;
          font-variant-numeric: tabular-nums;
        }

        .step-icon-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .step-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--step-color) 12%, transparent);
          color: var(--step-color);
          border: 1px solid color-mix(in srgb, var(--step-color) 20%, transparent);
        }

        .step-title {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .step-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .step-connector {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, rgba(124,58,237,0.3), rgba(37,99,235,0.3));
          margin-top: 100px;
          transform-origin: left;
          flex-shrink: 0;
        }

        .how-cta {
          text-align: center;
          margin-top: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-how-cta {
          display: inline-block;
          padding: 0.9rem 2.5rem;
          background: var(--accent-primary);
          color: white;
          border-radius: var(--radius-lg);
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(124,58,237,0.35);
        }

        .btn-how-cta:hover {
          background: #6d28d9;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(124,58,237,0.5);
        }

        .how-cta-note {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .steps-container {
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .step-connector {
            width: 2px;
            height: 32px;
            margin-top: 0;
            background: linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(37,99,235,0.3));
            transform-origin: top;
          }
          .step-card { max-width: 100%; width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
