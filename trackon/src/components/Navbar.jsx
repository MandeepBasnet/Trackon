import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Features', hasDropdown: true },
    { name: 'Company', hasDropdown: false },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="top-banner">
        <span>Get 15% OFF with your first year with code "WELCOME"</span>
        <a href="#get-started" className="top-banner-link">Get Started Now &gt;</a>
      </div>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <div className="logo-wrapper">
            <img 
              src="https://cms.trackon-gps.com/media/assets/trackon-main-logo.png" 
              alt="Trackon GPS Logo" 
              className="logo-image logo-dark"
            />
            <img 
              src="https://web.trackongps.com/assets/authLogo-C6A24ma7.svg" 
              alt="Trackon GPS Logo" 
              className="logo-image logo-light"
            />
          </div>
        </div>
        
        <div className="navbar-links">
          {navLinks.map((link) => (
            <div key={link.name} className="nav-item">
              <a href={`#${link.name.toLowerCase()}`} className="nav-link">
                {link.name}
                {link.hasDropdown && (
                  <svg className="chevron-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            </div>
          ))}
        </div>
        
        <div className="navbar-actions">
          <Button variant="tertiary" size="small" className="btn-signin">Sign In</Button>
          <Button variant="primary" size="small" className="btn-buy">Buy GPS Tracker</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
