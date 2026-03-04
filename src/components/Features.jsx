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
    icon: <BarChart3 size={24} />,
    title: "Dashboard Interativo",
    description:
      "Visualize seus dados financeiros com gráficos dinâmicos e atualizações em tempo real.",
    color: "#7c3aed",
  },
  {
    icon: <Wallet size={24} />,
    title: "Múltiplas Carteiras",
    description:
      "Gerencie contas bancárias, poupança e dinheiro físico em um único lugar.",
    color: "#2563eb",
  },
  {
    icon: <PieChart size={24} />,
    title: "Orçamentos Inteligentes",
    description:
      "Defina limites de gastos por categoria e receba alertas para manter o controle.",
    color: "#059669",
  },
  {
    icon: <Smartphone size={24} />,
    title: "PWA & Mobile First",
    description:
      "Instale como um app nativo no seu celular e acesse seus dados de onde estiver.",
    color: "#d97706",
  },
  {
    icon: <Share2 size={24} />,
    title: "Exportação Flexível",
    description:
      "Exporte seus relatórios para PDF, Excel ou CSV com apenas um clique.",
    color: "#db2777",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Importação Segura",
    description:
      "Importe extratos OFX e arquivos bancários com total segurança e privacidade.",
    color: "#0891b2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <section id="features" className="features">
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
          <p className="section-subtitle">
            Ferramentas poderosas para simplificar sua vida financeira
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{ "--feature-color": feature.color }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .features {
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
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-lg);
          transition: background 0.3s ease, border-color 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--feature-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.25);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--feature-color) 12%, transparent);
          border-radius: 12px;
          color: var(--feature-color);
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.65;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
};

export default Features;
