import React from 'react';
import { Play, ArrowRight, TrendingUp, Zap, Shield, Clock, Download, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Elements */}
      <div className="hero-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <div className="hero-text-content">
            <div className="hero-badge">
              <Zap size={18} />
              <span>Zero Brokerage on All Trades</span>
            </div>
            
            <h1 className="hero-title">
              India's Fastest Growing
              <span className="highlight"> Trading Platform</span>
            </h1>
            
            <p className="hero-description">
              Start trading with zero brokerage, 500X margin & instant withdrawals. 
              Join 1,50,000+ traders who trust StockKida.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-cta-buttons">
              <a href="https://app.stockkida.com/register" className="cta-btn primary">
                <div className="btn-content">
                  <Play size={20} />
                  <span>Start Trading FREE</span>
                  <ArrowRight size={16} />
                </div>
              </a>
              
              <a href="#download" className="cta-btn secondary">
                <div className="btn-content">
                  <Download size={20} />
                  <span>Download App</span>
                </div>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">
                  <Shield size={20} />
                </div>
                <span>Regulated Broker</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <Clock size={20} />
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <TrendingUp size={20} />
                </div>
                <span>500+ Products</span>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="hero-visual-content">
            <div className="phone-showcase">
              {/* Main Phone */}
              <div className="main-phone">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    {/* App Header */}
                    <div className="app-header">
                      <div className="app-logo">StockKida</div>
                      <div className="status-bar">
                        <div className="time">9:41</div>
                        <div className="battery">84%</div>
                      </div>
                    </div>
                    
                    {/* Welcome Section */}
                    <div className="welcome-section">
                      <div className="greeting">Welcome back!</div>
                      <div className="username">Amit Sharma</div>
                    </div>
                    
                    {/* Balance Card */}
                    <div className="balance-card">
                      <div className="balance-label">Available Balance</div>
                      <div className="balance-amount">₹25,430</div>
                      <div className="profit-indicator">
                        <TrendingUp size={14} />
                        <span>+ ₹2,150 today</span>
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="quick-actions">
                      <button className="action-btn primary">
                        <Download size={18} />
                        <span>Deposit</span>
                      </button>
                      <button className="action-btn outline">
                        <ArrowRight size={18} />
                        <span>Withdraw</span>
                      </button>
                    </div>
                    
                    {/* Markets Section */}
                    <div className="markets-section">
                      <div className="section-title">Live Markets</div>
                      <div className="stocks-grid">
                        <div className="stock-card green">
                          <div className="stock-symbol">RELIANCE</div>
                          <div className="stock-price">₹2,845.50</div>
                          <div className="stock-change">+1.2%</div>
                        </div>
                        <div className="stock-card red">
                          <div className="stock-symbol">TCS</div>
                          <div className="stock-price">₹3,412.75</div>
                          <div className="stock-change">-0.8%</div>
                        </div>
                        <div className="stock-card green">
                          <div className="stock-symbol">HDFC BANK</div>
                          <div className="stock-price">₹1,678.30</div>
                          <div className="stock-change">+2.1%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="floating-badge badge-1">
                <Star size={20} />
                <span>Zero Brokerage</span>
              </div>
              
              <div className="floating-badge badge-2">
                <TrendingUp size={20} />
                <span>500X Margin</span>
              </div>
              
              <div className="floating-badge badge-3">
                <Zap size={20} />
                <span>Instant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;