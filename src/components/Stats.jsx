import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, CreditCard, Activity } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <TrendingUp size={24} />,
      value: "₹1M+",
      label: "Brokerage Saved",
      color: "green"
    },
    {
      icon: <Users size={24} />,
      value: "150K+",
      label: "Happy Traders",
      color: "blue"
    },
    {
      icon: <CreditCard size={24} />,
      value: "₹5.3Cr+",
      label: "Withdrawals",
      color: "purple"
    },
    {
      icon: <Activity size={24} />,
      value: "930K+",
      label: "Active Trades",
      color: "orange"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card stat-${stat.color} ${animated ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;