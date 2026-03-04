import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Engenheiro de Software",
    initials: "JS",
    color: "#7c3aed",
    rating: 5,
    text: "Finalmente organizei minha vida financeira de verdade. O dashboard é intuitivo e os gráficos ajudam a enxergar onde estou gastando mais. Em 2 meses já economizei R$ 800!",
  },
  {
    name: "Ana Paula Costa",
    role: "Professora",
    initials: "AP",
    color: "#db2777",
    rating: 5,
    text: "Melhor ferramenta que já usei para controle financeiro. A funcionalidade de múltiplas carteiras é perfeita para separar conta física, Nubank e poupança. Recomendo demais!",
  },
  {
    name: "Carlos Mendes",
    role: "Empresário",
    initials: "CM",
    color: "#059669",
    rating: 5,
    text: "Como empresário, preciso separar bem as finanças pessoais e da empresa. O FinanceDash me ajuda a manter esse controle sem complicar. Os relatórios de exportação são excelentes.",
  },
  {
    name: "Larissa Ferreira",
    role: "Designer UX",
    initials: "LF",
    color: "#d97706",
    rating: 5,
    text: "Além de funcional, o design é lindo! A experiência é fluida e o modo mobile funciona perfeitamente. Uso todos os dias para registrar meus gastos. Virou hábito.",
  },
  {
    name: "Rafael Gomes",
    role: "Analista Financeiro",
    initials: "RG",
    color: "#2563eb",
    rating: 5,
    text: "Trabalho com finanças e fiquei impressionado com a qualidade do FinanceDash. Os orçamentos inteligentes e alertas de limite são features que muitos apps pagos não têm.",
  },
];

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

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
          <p className="section-subtitle">
            Histórias reais de pessoas que transformaram suas finanças
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {visible.map((t, i) => (
            <motion.div
              key={`${current}-${i}`}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ "--t-color": t.color }}
            >
              <Quote size={22} className="quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="t-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div className="t-info">
                  <span className="t-name">{t.name}</span>
                  <span className="t-role">{t.role}</span>
                </div>
                <Stars count={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="testimonials-controls">
          <button className="ctrl-btn" onClick={prev} aria-label="Anterior">
            <ChevronLeft size={20} />
          </button>
          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "dot-active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button className="ctrl-btn" onClick={next} aria-label="Próximo">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 100px 0;
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
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

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .testimonial-card {
          padding: 1.75rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          transition: border-color 0.3s, background 0.3s;
        }

        .testimonial-card:hover {
          border-color: rgba(124,58,237,0.2);
          background: rgba(255,255,255,0.04);
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--t-color);
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
          opacity: 0.5;
        }

        .quote-icon {
          color: var(--accent-secondary);
          opacity: 0.4;
          flex-shrink: 0;
        }

        .testimonial-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.7;
          flex: 1;
        }

        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .t-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .t-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .t-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .t-role {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .stars {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }

        .testimonials-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .ctrl-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ctrl-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text-primary);
          border-color: var(--accent-primary);
        }

        .dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }

        .dot-active {
          background: var(--accent-primary);
          width: 22px;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid .testimonial-card:not(:first-child) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
