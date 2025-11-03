import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rahul S.",
      role: "Software Engineer",
      content: "Saved ₹50K+ in brokerage with StockKida. Platform speed is incredible for day trading.",
      rating: 5,
      profit: "+₹2.5L"
    },
    {
      name: "Priya P.",
      role: "Financial Advisor",
      content: "500X margin feature is revolutionary. My clients love the zero brokerage model.",
      rating: 5,
      profit: "+₹4.2L"
    },
    {
      name: "Amit K.",
      role: "Business Owner",
      content: "Instant withdrawals saved me during emergencies. Got funds in 10 minutes!",
      rating: 5,
      profit: "+₹1.8L"
    },
    {
      name: "Neha G.",
      role: "Marketing Manager",
      content: "Started with ₹10K, now managing ₹5L portfolio. Mobile app is super intuitive.",
      rating: 5,
      profit: "+₹3.5L"
    },
    {
      name: "Vikram S.",
      role: "Day Trader",
      content: "Lightning fast execution with 500X margin. Perfect for serious traders.",
      rating: 5,
      profit: "+₹6.7L"
    },
    {
      name: "Anjali M.",
      role: "Doctor",
      content: "Automated features help me trade while working. Made ₹1.2L passively.",
      rating: 5,
      profit: "+₹1.2L"
    },
    {
      name: "Rajesh I.",
      role: "Ex-Banker",
      content: "Institutional-grade tools for retail traders. Charting tools are professional.",
      rating: 5,
      profit: "+₹2.9L"
    },
    {
      name: "Sneha R.",
      role: "Student",
      content: "10-second registration, funding my education through trading. Perfect for beginners.",
      rating: 5,
      profit: "+₹85K"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="testimonials" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="section-badge">
            <Star size={16} />
            Success Stories
          </div>
          <h2 className="section-title">
            What Traders <span className="accent">Say</span>
          </h2>
          <p className="section-description">
            Real experiences from our trading community
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="testimonials-slider"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button className="slider-arrow prev" onClick={prevTestimonial}>
            <ChevronLeft size={20} />
          </button>
          
          <button className="slider-arrow next" onClick={nextTestimonial}>
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Container */}
          <div className="testimonials-container">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${currentIndex + index}`}
                className={`testimonial-card ${index === 1 ? 'active' : ''}`}
              >
                {/* Quote Icon */}
                <div className="quote-icon">
                  <Quote size={20} />
                </div>

                {/* Rating Stars */}
                <div className="rating-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>

                {/* Profit Badge */}
                <div className="profit-badge">
                  <span>Profit: {testimonial.profit}</span>
                </div>

                {/* Author Info */}
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-value">4.9/5</div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">50K+</div>
            <div className="stat-label">Reviews</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;