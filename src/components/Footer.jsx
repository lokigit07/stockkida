import React from 'react';
import { Facebook, Youtube, Instagram, MessageCircle, Zap, Rocket, TrendingUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="brand">
              <div className="brand-logo">
                <Zap size={24} />
                <span>StockKida</span>
              </div>
              <p className="brand-tagline">
                India's fastest growing trading platform with zero brokerage and advanced features
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature">
                <Rocket size={18} />
                <span>Instant Withdrawals</span>
              </div>
              <div className="feature">
                <TrendingUp size={18} />
                <span>500X Margin</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          {/* Trading Section */}
          <div className="footer-section">
            <h4>Trading</h4>
            <ul>
              <li><a href="#">NSE Equity</a></li>
              <li><a href="#">Futures & Options</a></li>
              <li><a href="#">Commodities</a></li>
              <li><a href="#">Forex Trading</a></li>
              <li><a href="#">Cryptocurrencies</a></li>
            </ul>
          </div>
          
          {/* Platforms Section */}
          <div className="footer-section">
            <h4>Platforms</h4>
            <ul>
              <li><a href="#">Web Platform</a></li>
              <li><a href="#">Mobile App</a></li>
              <li><a href="#">Advanced Charts</a></li>
              <li><a href="#">Trading Tools</a></li>
              <li><a href="#">API Access</a></li>
            </ul>
          </div>
          
          {/* Company Section */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Why StockKida?</a></li>
              <li><a href="#">Regulations</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 StockKida. All rights reserved.</p>
            </div>
            
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
              <a href="#">Grievance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;