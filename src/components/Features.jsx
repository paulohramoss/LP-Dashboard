import React from "react";
import {
  BarChart3,
  Wallet,
  PieChart,
  Smartphone,
  Share2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BarChart3 size={26} />,
    title: "Dashboard Interativo",
    description:
      "Visualize receitas, despesas e saldo com gráficos dinâmicos e atualizações em tempo real. Decisões financeiras mais inteligentes começam aqui.",
    color: "#9B6DFF",
    span: 8,
    horizontal: true,
  },
  {
    icon: <Wallet size={22} />,
    title: "Múltiplas Carteiras",
    description:
      "Gerencie contas bancárias, poupança e dinheiro físico em um único painel.",
    color: "#38BDF8",
    span: 4,
  },
  {
    icon: <PieChart size={22} />,
    title: "Orçamentos Inteligentes",
    description:
      "Defina limites por categoria e receba alertas antes de estourar.",
    color: "#00E87A",
    span: 4,
  },
  {
    icon: <Smartphone size={22} />,
    title: "PWA & Mobile First",
    description:
      "Instale como app nativo no celular. Seus dados, onde você estiver.",
    color: "#F59E0B",
    span: 4,
  },
  {
    icon: <Share2 size={22} />,
    title: "Exportação Flexível",
    description:
      "Relatórios em PDF, Excel ou CSV. Um clique, dados na mão.",
    color: "#FB7185",
    span: 4,
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Importação Segura",
    description:
      "Importe extratos OFX e arquivos bancários com total segurança e privacidade. Seus dados nunca saem do seu dispositivo.",
    color: "#6EE7B7",
    span: 12,
    horizontal: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Funcionalidades</span>
          <h2 className="section-title">Tudo o que você precisa</h2>
          <p className="section-sub">
            Ferramentas poderosas para simplificar sua vida financeira
          </p>
        </motion.div>

        <div className="bento-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`bento-card ${f.horizontal ? "card-h" : ""}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{ "--fc": f.color, "--span": f.span }}
            >
              <div className={`card-icon ${f.horizontal ? "icon-lg" : ""}`}>
                {f.icon}
              </div>
              <div className="card-body">
                <h3 className="card-title">{f.title}</h3>
                <p className="card-desc">{f.description}</p>
              </div>
              <div className="card-shine" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          max-width: 480px;
          line-height: 1.6;
          font-family: var(--font-body);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.25rem;
        }

        .bento-card {
          grid-column: span var(--span);
          position: relative;
          padding: 1.75rem;
          background: rgba(255, 255, 255, 0.022);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s ease, background 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bento-card.card-h {
          flex-direction: row;
          align-items: center;
          padding: 2rem 2.25rem;
          gap: 1.75rem;
        }

        .bento-card:hover {
          border-color: color-mix(in srgb, var(--fc) 28%, transparent);
          background: rgba(255, 255, 255, 0.038);
        }

        .bento-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--fc), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .bento-card:hover::before { opacity: 1; }

        .card-shine {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 20%,
            color-mix(in srgb, var(--fc) 5%, transparent) 0%,
            transparent 55%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .bento-card:hover .card-shine { opacity: 1; }

        .card-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--fc) 11%, transparent);
          color: var(--fc);
          border: 1px solid color-mix(in srgb, var(--fc) 18%, transparent);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .card-icon.icon-lg {
          width: 56px;
          height: 56px;
          border-radius: 16px;
        }

        .bento-card:hover .card-icon { transform: scale(1.08); }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .card-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .card-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(6, 1fr); }
          .bento-card { grid-column: span 3 !important; }
          .bento-card.card-h { flex-direction: column; grid-column: span 6 !important; }
        }

        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr; gap: 1rem; }
          .bento-card { grid-column: span 1 !important; flex-direction: column !important; }
          .features-section { padding: 70px 0; }
        }
      `}</style>
    </section>
  );
};

export default Features;
