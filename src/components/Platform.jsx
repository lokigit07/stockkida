import React from 'react';
import { Play, Apple, Monitor, Globe, Smartphone, Zap, Download } from 'lucide-react';
import './Platform.css';

const Platform = () => {
  const platforms = [
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App",
      description: "Trade on the go with our powerful mobile application",
      features: ["Live Charts", "One-tap Trading", "Push Notifications"],
      type: "mobile"
    },
    {
      icon: <Monitor size={32} />,
      title: "Desktop",
      description: "Advanced trading platform for professional traders",
      features: ["Multiple Charts", "Advanced Tools", "Custom Layouts"],
      type: "desktop"
    },
    {
      icon: <Globe size={32} />,
      title: "Web Platform",
      description: "Access from any browser without downloads",
      features: ["Instant Access", "Cross-Platform", "Auto Updates"],
      type: "web"
    }
  ];

  const appStats = [
    { value: "4.8★", label: "App Store Rating" },
    { value: "1M+", label: "Downloads" },
    { value: "99.9%", label: "Uptime" },
    { value: "10ms", label: "Order Speed" }
  ];

  return (
    <section className="platform" id="download">
      <div className="container">
        <div className="platform-content">
          {/* Text Content */}
          <div className="platform-text">
            <div className="platform-badge">
              <Zap size={18} />
              Multi-Platform Trading
            </div>
            
            <h2 className="platform-title">
              Trade Anywhere, <span className="accent">Anytime</span>
            </h2>
            
            <p className="platform-description">
              Experience seamless trading across all devices. Our platform is optimized for speed, 
              security, and performance whether you're on mobile, desktop, or web.
            </p>

            {/* App Stats */}
            <div className="app-stats">
              {appStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="download-section">
              <h3 className="download-title">Download Now</h3>
              <div className="download-buttons">
                <a href="#" className="download-btn play-store">
                  <div className="btn-icon">
                    <Play size={20} />
                  </div>
                  <div className="btn-text">
                    <span>Get it on</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
                
                <a href="#" className="download-btn app-store">
                  <div className="btn-icon">
                    <Apple size={20} />
                  </div>
                  <div className="btn-text">
                    <span>Download on</span>
                    <strong>App Store</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="platform-visual">
            <div className="platform-showcase">
              {/* Main Phone Mockup */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <span className="app-name">StockKida</span>
                      <div className="battery">84%</div>
                    </div>
                    <div className="price-chart">
                      <div className="chart-line up"></div>
                    </div>
                    <div className="quick-actions">
                      <button className="action-buy">BUY</button>
                      <button className="action-sell">SELL</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Cards */}
              <div className="platform-cards">
                {platforms.map((platform, index) => (
                  <div key={index} className={`platform-card platform-${platform.type}`}>
                    <div className="card-icon">
                      {platform.icon}
                    </div>
                    <div className="card-content">
                      <h4>{platform.title}</h4>
                      <p>{platform.description}</p>
                      <div className="platform-features">
                        {platform.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;