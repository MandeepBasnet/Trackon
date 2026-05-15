import React, { useEffect, useState } from 'react';
import './HeroPattern.css';

const FRAME_WIDTH = 205.14;

const HeroPattern = () => {
  const [frameCount, setFrameCount] = useState(7);

  useEffect(() => {
    const update = () => {
      // +1 buffer so edges always stay covered when the viewport isn't a clean multiple
      setFrameCount(Math.max(3, Math.ceil(window.innerWidth / FRAME_WIDTH) + 1));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="hero-pattern" aria-hidden="true">
      <div className="hero-pattern__grid">
        {Array.from({ length: frameCount }).map((_, i) => (
          <div key={i} className="hero-pattern__frame">
            <div className="hero-pattern__line hero-pattern__line--tall" />
            <div className="hero-pattern__line hero-pattern__line--short" />
            <div className="hero-pattern__line hero-pattern__line--tall" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPattern;
