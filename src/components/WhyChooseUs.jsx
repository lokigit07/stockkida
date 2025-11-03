import React from 'react';
import { Rocket, Shield, Zap, Users, Clock, Award, TrendingUp, Smartphone } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Rocket size={28} />,
      title: "Lightning Fast Execution",
      description: "Trade with ultra-low latency and instant order execution. Never miss a market move.",
      stat: "10ms",
      color: "blue"
    },
    {
      icon: <Shield size={28} />,
      title: "Bank-Grade Security",
      description: "Your funds and data are protected with military-grade encryption and security protocols.",
      stat: "100% Safe",
      color: "green"
    },
    {
      icon: <Zap size={28} />,
      title: "Zero Cost Trading",
      description: "No hidden charges, no brokerage fees. Keep 100% of your trading profits.",
      stat: "0 Fees",
      color: "yellow"
    },
    {
      icon: <Users size={28} />,
      title: "Expert Community",
      description: "Learn from successful traders and get insights from our trading community.",
      stat: "1.5L+ Traders",
      color: "purple"
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Market Access",
      description: "Trade anytime, anywhere with our mobile app. Global markets at your fingertips.",
      stat: "Always On",
      color: "orange"
    },
    {
      icon: <Award size={28} />,
      title: "Award Winning Platform",
      description: "Recognized as India's fastest growing trading platform with multiple awards.",
      stat: "5★ Rated",
      color: "red"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Advanced Charting",
      description: "Professional trading tools with real-time charts and technical indicators.",
      stat: "50+ Tools",
      color: "indigo"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Seamless Mobile Experience",
      description: "Trade on the go with our intuitive mobile app designed for modern traders.",
      stat: "4.8★ App",
      color: "teal"
    }
  ];

  const achievements = [
    { number: "1,50,000+", label: "Active Traders" },
    { number: "₹1,000Cr+", label: "Daily Volume" },
    { number: "99.9%", label: "Platform Uptime" },
    { number: "4.8/5", label: "User Rating" }
  ];

  return (
    <section className="why-choose-us" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <Zap size={18} />
            The StockKida Advantage
          </div>
          <h2 className="section-title">
            Built for <span className="highlight">Modern Traders</span>
          </h2>
          <p className="section-description">
            Experience trading reimagined with cutting-edge technology, zero costs, and unmatched speed.
          </p>
        </div>

        {/* Achievements Bar */}
        <div className="achievements-bar">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-number">{achievement.number}</div>
              <div className="achievement-label">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-showcase">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card feature-${feature.color}`}
            >
              <div className="feature-main">
                <div className="feature-icon-container">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-stat">
                    {feature.stat}
                  </div>
                </div>
                
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>

              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="value-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h3>Ready to Trade Smarter?</h3>
              <p>Join India's most trusted trading platform</p>
            </div>
            <div className="banner-actions">
              <a href="https://app.stockkida.com/register" className="banner-btn primary">
                Start Free Today
              </a>
              <a href="#demo" className="banner-btn secondary">
                See Platform Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;