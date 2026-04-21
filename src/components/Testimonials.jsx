import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Engenheiro de Software",
    initials: "JS",
    color: "#9B6DFF",
    rating: 5,
    text: "Finalmente organizei minha vida financeira de verdade. Em 2 meses já economizei R$ 800!",
  },
  {
    name: "Ana Paula Costa",
    role: "Professora",
    initials: "AP",
    color: "#db2777",
    rating: 5,
    text: "Múltiplas carteiras é perfeito para separar Nubank, conta física e poupança. Recomendo demais!",
  },
  {
    name: "Carlos Mendes",
    role: "Empresário",
    initials: "CM",
    color: "#00E87A",
    rating: 5,
    text: "Como empresário, preciso separar finanças pessoais e da empresa. O EazyDash resolve perfeitamente.",
  },
  {
    name: "Larissa Ferreira",
    role: "Designer UX",
    initials: "LF",
    color: "#F59E0B",
    rating: 5,
    text: "Além de funcional, o design é lindo! A experiência é fluida e o mobile funciona perfeitamente.",
  },
  {
    name: "Rafael Gomes",
    role: "Analista Financeiro",
    initials: "RG",
    color: "#38BDF8",
    rating: 5,
    text: "Os orçamentos inteligentes e alertas de limite são features que muitos apps pagos não têm.",
  },
  {
    name: "Mariana Souza",
    role: "Advogada",
    initials: "MS",
    color: "#FB7185",
    rating: 5,
    text: "A exportação para PDF dos relatórios mensais me ajuda muito na hora de fazer a declaração.",
  },
];

const Stars = ({ count }) => (
  <div className="t-stars">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <div className="t-card" style={{ "--tc": t.color }}>
    <div className="t-header">
      <div className="t-avatar" style={{ background: t.color }}>{t.initials}</div>
      <div className="t-meta">
        <span className="t-name">{t.name}</span>
        <span className="t-role">{t.role}</span>
      </div>
      <Stars count={t.rating} />
    </div>
    <p className="t-text">"{t.text}"</p>
  </div>
);

const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const row2 = [...testimonials.slice(2), ...testimonials.slice(2)];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">O que nossos usuários dizem</h2>
          <p className="section-sub">
            Histórias reais de pessoas que transformaram suas finanças
          </p>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div className="marquee-row">
          <div className="marquee-track track-left">
            {row1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        <div className="marquee-row" style={{ marginTop: "1.25rem" }}>
          <div className="marquee-track track-right">
            {row2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 0;
          background: var(--bg-primary);
          border-top: 1px solid var(--border);
          overflow: hidden;
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

        .marquee-wrapper {
          position: relative;
        }

        .marquee-fade-left,
        .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 180px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, var(--bg-primary) 0%, transparent 100%);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(-90deg, var(--bg-primary) 0%, transparent 100%);
        }

        .marquee-row {
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          padding: 0.5rem 0;
        }

        .track-left {
          animation: scrollLeft 40s linear infinite;
        }

        .track-right {
          animation: scrollRight 45s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .t-card {
          width: 320px;
          flex-shrink: 0;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .t-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--tc);
          opacity: 0.35;
        }

        .t-card:hover {
          border-color: color-mix(in srgb, var(--tc) 28%, transparent);
        }

        .t-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .t-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
          font-family: var(--font-body);
        }

        .t-meta {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .t-name {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-body);
        }

        .t-role {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: var(--font-body);
        }

        .t-stars {
          display: flex;
          gap: 2px;
        }

        .t-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          font-family: var(--font-body);
        }

        @media (max-width: 600px) {
          .testimonials-section { padding: 70px 0; }
          .marquee-fade-left, .marquee-fade-right { width: 80px; }
          .t-card { width: 280px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
