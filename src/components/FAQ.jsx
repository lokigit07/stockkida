import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Zap, Phone, Mail } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is StockKida?",
      answer: "StockKida is India's fastest growing trading platform offering zero brokerage trading across stocks, commodities, forex, and cryptocurrencies. We provide secure, reliable trading with advanced features for both beginners and professionals."
    },
    {
      question: "Are there really zero brokerage charges?",
      answer: "Yes! Absolutely zero brokerage on all trades - equity, derivatives, commodities, and currencies. No hidden charges, no commission fees. You keep 100% of your trading profits."
    },
    {
      question: "How do I open an account?",
      answer: "Just download our app, enter your mobile number and email. Complete quick KYC in under 10 seconds. No documents needed initially. Start trading immediately after verification."
    },
    {
      question: "What is the minimum deposit required?",
      answer: "You can start trading with as low as ₹500. However, we recommend starting with at least ₹2000 for better risk management and trading flexibility."
    },
    {
      question: "How fast are deposits and withdrawals?",
      answer: "Deposits are instant via UPI, Net Banking, and other methods. Withdrawals are processed within 2 hours, often instantly. We never hold your funds unnecessarily."
    },
    {
      question: "What markets can I trade on?",
      answer: "Trade across 500+ instruments including NSE stocks, futures & options, commodities (gold, silver, crude), forex pairs, global indices, and major cryptocurrencies - all in one app."
    },
    {
      question: "Is my money safe with StockKida?",
      answer: "Absolutely. We are a SEBI-regulated broker with bank-grade security. Your funds are kept in separate bank accounts, and all data is encrypted with advanced security protocols."
    },
    {
      question: "What is 500X margin?",
      answer: "500X margin allows you to trade with 500 times your capital in derivatives. This amplifies your trading power significantly while maintaining proper risk management systems."
    },
    {
      question: "Do you provide customer support?",
      answer: "24/7 customer support via phone, WhatsApp, email, and in-app chat. Our support team includes experienced traders who understand your needs perfectly."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const supportOptions = [
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Support",
      description: "Instant replies within minutes",
      action: "Chat Now",
      link: "https://wa.me/919558644038",
      color: "whatsapp"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      description: "24/7 helpline available",
      action: "Call Now",
      link: "tel:+919558644038",
      color: "phone"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      description: "Detailed assistance",
      action: "Email Us",
      link: "mailto:support@stockkida.com",
      color: "email"
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="section-badge">
            <Zap size={18} />
            Quick Help
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="accent">Questions</span>
          </h2>
          <p className="section-description">
            Get instant answers to common questions about trading with StockKida
          </p>
        </div>

        <div className="faq-content">
          {/* FAQ List */}
          <div className="faq-main">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <div 
                    className="faq-question" 
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="question-content">
                      <span className="question-number">0{index + 1}</span>
                      <h3>{faq.question}</h3>
                    </div>
                    <div className="faq-toggle">
                      {activeIndex === index ? 
                        <ChevronUp size={20} /> : 
                        <ChevronDown size={20} />
                      }
                    </div>
                  </div>
                  
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support Sidebar */}
          <div className="faq-sidebar">
            <div className="support-card">
              <div className="support-header">
                <MessageCircle size={32} />
                <h3>Need More Help?</h3>
                <p>Our support team is here for you 24/7</p>
              </div>

              <div className="support-options">
                {supportOptions.map((option, index) => (
                  <a
                    key={index}
                    href={option.link}
                    className={`support-option ${option.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="option-icon">
                      {option.icon}
                    </div>
                    <div className="option-content">
                      <h4>{option.title}</h4>
                      <p>{option.description}</p>
                    </div>
                    <span className="option-action">{option.action}</span>
                  </a>
                ))}
              </div>

              <div className="support-stats">
                <div className="stat">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
                <div className="stat">
                  <div className="stat-value">2min</div>
                  <div className="stat-label">Avg Response</div>
                </div>
                <div className="stat">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;