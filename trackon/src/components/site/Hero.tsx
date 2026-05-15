import React from "react";
import Button from "./Button";
import HeroPattern from "./HeroPattern";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <HeroPattern />
      <div className="mesh-gradient">
        <div className="blob blob-cyan" />
        <div className="blob blob-blue" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-reviews">
            <span className="google-g">G</span>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="review-text">4.4/5 | 5,000+ REVIEWS</span>
          </div>

          <h1 className="hero-title">
            Track, Protect, and Control Your <br /> Vehicle in Real Time
          </h1>

          <p className="hero-description">
            Trackon GPS helps individuals and businesses monitor vehicles live,
            prevent theft, and make smarter decisions with reliable GPS tracking
            across Nepal.
          </p>

          <div className="hero-actions">
            <Button variant="primary" size="lg">
              Start Tracking Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="btn-dark"
              iconLeading={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            >
              Talk to Sales
            </Button>
          </div>

          <div className="hero-mockups">
            <div className="mockup-placeholder">Mockups Image</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
