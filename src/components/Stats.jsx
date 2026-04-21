import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Star, Activity } from "lucide-react";

const stats = [
  { icon: <Users size={18} />, value: 5000, suffix: "+", prefix: "", label: "Usuários Ativos", color: "#9B6DFF" },
  { icon: <TrendingUp size={18} />, value: 2, suffix: "M+", prefix: "R$ ", label: "Gerenciados", color: "#00E87A" },
  { icon: <Star size={18} />, value: 98, suffix: "%", prefix: "", label: "Satisfação", color: "#F59E0B" },
  { icon: <Activity size={18} />, value: 200, suffix: "K+", prefix: "", label: "Transações", color: "#38BDF8" },
];

const useCountUp = (target, duration = 1600, started) => {
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

const StatItem = ({ stat, index, started }) => {
  const count = useCountUp(stat.value, 1500 + index * 120, started);
  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ "--sc": stat.color }}
    >
      <div className="stat-icon-wrap">{stat.icon}</div>
      <div className="stat-number">
        {stat.prefix}{count.toLocaleString("pt-BR")}{stat.suffix}
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
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <StatItem stat={stat} index={i} started={started} />
              {i < stats.length - 1 && <div className="stats-sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stats-grid {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          padding: 3.5rem 0;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          text-align: center;
        }

        .stat-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in srgb, var(--sc) 10%, transparent);
          color: var(--sc);
          margin-bottom: 0.25rem;
        }

        .stat-number {
          font-family: var(--font-mono);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .stat-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .stats-sep {
          width: 1px;
          background: var(--border);
          align-self: stretch;
          margin: 0.75rem 0;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 2rem 0;
          }
          .stats-sep { display: none; }
          .stat-item {
            padding: 1.5rem 1rem;
            border-right: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
          }
          .stat-item:nth-child(2n) { border-right: none; }
          .stat-item:nth-last-child(-n+2) { border-bottom: none; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
