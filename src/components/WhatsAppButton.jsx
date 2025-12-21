import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://walink.online/r/Stockkidacare" 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/image/whatsapp.png" 
        alt="Chat on WhatsApp" 
        className="whatsapp-icon" 
      />
    </a>
  );
};

export default WhatsAppButton;
