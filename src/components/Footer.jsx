import React from 'react';
import { Facebook, Youtube, Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StockKida</h3>
            <p>Experience seamless trading with zero brokerage, high margins, and instant withdrawals.</p>
            <div className="social-links">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Why StockKida?</a></li>
              <li><a href="#">Regulations</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Markets</h4>
            <ul>
              <li><a href="#">NSE (Futures & Options)</a></li>
              <li><a href="#">Indian Commodity</a></li>
              <li><a href="#">Forex</a></li>
              <li><a href="#">US Stocks & Indices</a></li>
              <li><a href="#">Cryptos</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 9558644038</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@stockkida.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 StockKida. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;