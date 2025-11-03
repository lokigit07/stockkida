import React from 'react';
import { Globe, TrendingUp, Coins, Currency, BarChart3, Bitcoin } from 'lucide-react';
import './Markets.css';

const Markets = () => {
  const marketCategories = [
    {
      icon: <TrendingUp size={22} />,
      title: "Indian Equity",
      description: "Stocks, futures & options",
      markets: ["NSE", "BSE", "F&O", "IPOs"],
      count: "5000+",
      color: "blue"
    },
    {
      icon: <Coins size={22} />,
      title: "Commodities",
      description: "Gold, Silver, Crude Oil",
      markets: ["Gold", "Silver", "Crude", "Metals"],
      count: "50+",
      color: "orange"
    },
    {
      icon: <Currency size={22} />,
      title: "Forex",
      description: "Currency pairs trading",
      markets: ["USD/INR", "EUR/INR", "GBP/INR"],
      count: "28+",
      color: "green"
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Global Indices",
      description: "International markets",
      markets: ["S&P 500", "Nasdaq", "Dow Jones"],
      count: "15+",
      color: "purple"
    },
    {
      icon: <Bitcoin size={22} />,
      title: "Crypto",
      description: "Digital currencies",
      markets: ["Bitcoin", "Ethereum", "BNB"],
      count: "25+",
      color: "yellow"
    },
    {
      icon: <Globe size={22} />,
      title: "International",
      description: "Global stocks",
      markets: ["US Stocks", "EU Stocks"],
      count: "1000+",
      color: "indigo"
    }
  ];

  const marketStats = [
    { value: "500+", label: "Instruments" },
    { value: "0", label: "Brokerage" },
    { value: "24/7", label: "Support" },
    { value: "10ms", label: "Execution" }
  ];

  return (
    <section className="markets" id="markets">
      <div className="container">
        {/* Section Header */}
        <div className="markets-header">
          <h2 className="markets-title">
            Trade All Markets in <span className="accent">One Platform</span>
          </h2>
          <p className="markets-description">
            Access stocks, commodities, forex, and cryptocurrencies with zero brokerage.
          </p>
        </div>

        {/* Market Stats */}
        <div className="market-stats">
          {marketStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Compact Cards Grid */}
        <div className="markets-grid">
          {marketCategories.map((category, index) => (
            <div 
              key={index} 
              className={`market-card market-card-${category.color}`}
            >
              <div className="card-main">
                <div className="card-icon">
                  {category.icon}
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">{category.title}</h3>
                    <span className="card-count">{category.count}</span>
                  </div>
                  <p className="card-description">{category.description}</p>
                </div>
              </div>
              
              <div className="card-markets">
                {category.markets.map((market, marketIndex) => (
                  <span key={marketIndex} className="market-tag">
                    {market}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="markets-cta">
          <div className="cta-content">
            <h3>Start Trading Today</h3>
            <p>Join 1,50,000+ successful traders</p>
            <a href="https://app.stockkida.com/register" className="cta-button">
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;