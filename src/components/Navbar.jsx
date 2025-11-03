import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, BookOpen, Users, Phone, LogIn, UserPlus } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on links
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { href: "#markets", label: "Markets", icon: <TrendingUp size={18} /> },
    { href: "#trading", label: "Trading", icon: <TrendingUp size={18} /> },
    { href: "#learn", label: "Learn", icon: <BookOpen size={18} /> },
    { href: "#about", label: "About", icon: <Users size={18} /> },
    { href: "#contact", label: "Contact", icon: <Phone size={18} /> }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo">
              <img 
                src="/image/logo.png" 
                alt="StockKida Logo" 
                className="logo-image"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback">
                <div className="logo-icon">📈</div>
                <h2>StockKida</h2>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  <span className="nav-link-icon">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Desktop Buttons */}
            <div className="nav-buttons">
              <a 
                href="https://web.stockkida.com/login" 
                className="btn btn-outline"
              >
                <LogIn size={18} />
                Login
              </a>
              <a 
                href="https://app.stockkida.com/register" 
                className="btn btn-primary"
              >
                <UserPlus size={18} />
                Register
              </a>
            </div>
            
            {/* Mobile Toggle */}
            <div className="mobile-toggle" onClick={toggleMenu}>
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img 
                src="/image/logo.png" 
                alt="StockKida Logo" 
                className="mobile-logo-image"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="mobile-logo-fallback">
                <div className="logo-icon">📈</div>
                <h3>StockKida</h3>
              </div>
            </div>
            <button className="mobile-close" onClick={closeMenu}>
              <X size={24} />
            </button>
          </div>

          <div className="mobile-menu-content">
            {/* Mobile Navigation Links */}
            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={closeMenu}
                >
                  <div className="mobile-link-icon">{item.icon}</div>
                  <span className="mobile-link-text">{item.label}</span>
                </a>
              ))}
            </div>
            
            {/* Mobile Buttons */}
            <div className="mobile-nav-buttons">
              <a 
                href="https://web.stockkida.com/login" 
                className="mobile-btn outline"
                onClick={closeMenu}
              >
                <LogIn size={20} />
                Login to Account
              </a>
              <a 
                href="https://app.stockkida.com/register" 
                className="mobile-btn primary"
                onClick={closeMenu}
              >
                <UserPlus size={20} />
                Create Account
              </a>
            </div>

            {/* Mobile Footer */}
            <div className="mobile-menu-footer">
              <p>Start trading in just 10 seconds</p>
              <div className="mobile-features">
                <span>Zero Brokerage</span>
                <span>•</span>
                <span>500X Margin</span>
                <span>•</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going behind fixed navbar */}
      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;