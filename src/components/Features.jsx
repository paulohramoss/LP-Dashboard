import React from "react";
import {
  BarChart3,
  Wallet,
  PieChart,
  Smartphone,
  Share2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={24} />,
    title: "Dashboard Interativo",
    description:
      "Visualize seus dados financeiros com gráficos dinâmicos e atualizações em tempo real.",
  },
  {
    icon: <Wallet size={24} />,
    title: "Múltiplas Carteiras",
    description:
      "Gerencie contas bancárias, poupança e dinheiro físico em um único lugar.",
  },
  {
    icon: <PieChart size={24} />,
    title: "Orçamentos Inteligentes",
    description:
      "Defina limites de gastos por categoria e receba alertas para manter o controle.",
  },
  {
    icon: <Smartphone size={24} />,
    title: "PWA & Mobile First",
    description:
      "Instale como um app nativo no seu celular e acesse seus dados de onde estiver.",
  },
  {
    icon: <Share2 size={24} />,
    title: "Exportação Flexível",
    description:
      "Exporte seus relatórios para PDF, Excel ou CSV com apenas um clique.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Importação Segura",
    description:
      "Importe extratos OFX e arquivos bancários com total segurança e privacidade.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tudo o que você precisa</h2>
          <p className="section-subtitle">
            Ferramentas poderosas para simplificar sua vida financeira
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
          padding: 100px 0;
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 12px;
          color: var(--accent-primary);
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Features;
