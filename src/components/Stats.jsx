import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Star, Activity } from "lucide-react";

const stats = [
  {
    icon: <Users size={22} />,
    value: 5000,
    suffix: "+",
    prefix: "",
    label: "Usuários Ativos",
    color: "#7c3aed",
  },
  {
    icon: <TrendingUp size={22} />,
    value: 2,
    suffix: "M+",
    prefix: "R$ ",
    label: "Gerenciados",
    color: "#059669",
  },
  {
    icon: <Star size={22} />,
    value: 98,
    suffix: "%",
    prefix: "",
    label: "de Satisfação",
    color: "#d97706",
  },
  {
    icon: <Activity size={22} />,
    value: 200,
    suffix: "K+",
    prefix: "",
    label: "Transações Registradas",
    color: "#2563eb",
  },
];

const useCountUp = (target, duration = 1800, started) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return count;
};

const StatCard = ({ stat, index, started }) => {
  const count = useCountUp(stat.value, 1600 + index * 100, started);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ "--stat-color": stat.color }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-value">
        {stat.prefix}
        {count.toLocaleString("pt-BR")}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats-bg"></div>
      <div className="container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="stats-eyebrow">Resultados reais</p>
          <h2 className="stats-title">Números que falam por si</h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} started={started} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          background: var(--bg-secondary);
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .stats-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stats-eyebrow {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-secondary);
          margin-bottom: 0.5rem;
        }

        .stats-title {
          font-size: 2rem;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem 1.5rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: var(--radius-lg);
          text-align: center;
          transition: border-color 0.3s ease, background 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 2px;
          background: var(--stat-color);
          border-radius: 2px;
          opacity: 0.7;
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.1);
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--stat-color) 12%, transparent);
          color: var(--stat-color);
          margin: 0 auto 1rem;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
          margin-bottom: 0.5rem;
          font-variant-numeric: tabular-nums;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .stat-value { font-size: 1.7rem; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
