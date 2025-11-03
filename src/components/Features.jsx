import React from 'react';
import { Zap, Shield, Clock, TrendingUp, Gift, Users, Star } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Zero Brokerage",
      description: "Trade across all markets without any commission charges",
      gradient: "gradient-1"
    },
    {
      icon: <TrendingUp size={28} />,
      title: "500X Margin",
      description: "Leverage your trades with industry-leading margins",
      gradient: "gradient-2"
    },
    {
      icon: <Shield size={28} />,
      title: "Regulated Platform",
      description: "SEBI-regulated platform ensuring complete security",
      gradient: "gradient-3"
    },
    {
      icon: <Clock size={28} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance from expert support team",
      gradient: "gradient-4"
    },
    {
      icon: <Gift size={28} />,
      title: "Referral Rewards",
      description: "Earn generous bonuses by referring friends",
      gradient: "gradient-1"
    },
    {
      icon: <Users size={28} />,
      title: "Dedicated RM",
      description: "Personal relationship manager for premium support",
      gradient: "gradient-2"
    }
  ];

  const highlights = [
    { number: "0", label: "Brokerage" },
    { number: "500X", label: "Margin" },
    { number: "10Sec", label: "Registration" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section className="features" id="trading">
      <div className="container">
        {/* Section Header */}
        <div className="features-header">
          <div className="features-badge">
            <Star size={18} />
            Premium Features
          </div>
          <h2 className="features-title">
            Everything You Need for <span className="gradient-text">Successful Trading</span>
          </h2>
          <p className="features-description">
            Access powerful trading tools and features designed to help you make smarter investment decisions.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="highlights-bar">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-number">{highlight.number}</div>
              <div className="highlight-label">{highlight.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.gradient}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon-bg">
                  {feature.icon}
                </div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>

              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="features-cta">
          <div className="cta-content">
            <div className="cta-text">
              <h3>Ready to Experience Premium Trading?</h3>
              <p>Join thousands of traders who've already upgraded to StockKida</p>
            </div>
            <a href="https://app.stockkida.com/register" className="cta-button">
              <TrendingUp size={20} />
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;