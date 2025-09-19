import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Leaf, Users, Shield, TrendingUp, QrCode, MapPin, CheckCircle, Menu, X, ArrowRight, Star, Award, Twitter, Linkedin, Facebook } from 'lucide-react';
import '../styles/LandingPage.css';
import Logo from '../../../assets/logo.png'; // Your logo path
import HeroImage from '../../../assets/hero-image.jpg'; // Your hero image path

// Custom hook for scroll animations
const useIntersectionObserver = (options) => {
  const [elements, setElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    if (elements.length > 0) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, options);

      elements.forEach(el => observer.current.observe(el));
    }
    return () => {
      if (observer.current) {
        elements.forEach(el => observer.current.unobserve(el));
      }
    };
  }, [elements, options]);

  return setElements;
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [activeStep, setActiveStep] = useState(0);

  // Setup for scroll animations
  const setAnimatedElements = useIntersectionObserver({ rootMargin: '0px', threshold: 0.1 });

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    setAnimatedElements(Array.from(animatedElements));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setAnimatedElements]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };
 
  const handleSearch = () => {
    if (searchValue.trim()) console.log('Searching for:', searchValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
 
  const steps = [
    { icon: <Users className="step-icon" />, title: "Farmer Registers", description: "Farmers create a digital record of their harvest on our mobile app." },
    { icon: <QrCode className="step-icon" />, title: "QR Code is Generated", description: "A unique, unchangeable QR code is created as a digital passport for the produce." },
    { icon: <MapPin className="step-icon" />, title: "Journey is Tracked", description: "Every step, from the farm to the store, is securely recorded on the blockchain." },
    { icon: <CheckCircle className="step-icon" />, title: "Consumer Verifies", description: "You scan the QR code to see the full, authentic story of your food." }
  ];

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo-container">
              <div className="logo-placeholder">
                <img src={Logo} alt="FarmTrace Logo" className="logo-image" />
              </div>
              <span className="logo-text">FarmTrace</span>
            </div>

            <div className="nav-links desktop-nav">
              <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How It Works</button>
              <button onClick={() => scrollToSection('value-section')} className="nav-link">For Farmers</button>
              <button onClick={() => scrollToSection('for-business')} className="nav-link">For Business</button>
              <button onClick={() => scrollToSection('value-section')} className="nav-link">For Consumers</button>
            </div>

            <div className="nav-actions">
              <button className="login-btn desktop-only" onClick={handleLoginClick}>Login</button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn">
                {mobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
              </button>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="mobile-menu-content">
            <button onClick={() => scrollToSection('how-it-works')} className="mobile-nav-link">How It Works</button>
            <button onClick={() => scrollToSection('value-section')} className="mobile-nav-link">For Farmers</button>
            <button onClick={() => scrollToSection('for-business')} className="mobile-nav-link">For Business</button>
            <button onClick={() => scrollToSection('value-section')} className="mobile-nav-link">For Consumers</button>
            <button className="mobile-login-btn" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-content animate-on-scroll">
            <h1 className="hero-title">
              <span className="title-line">Seeding Trust from</span>
              <span className="title-highlight">Farm to Fork</span>
            </h1>
            <p className="hero-subtitle">
              Transparent food traceability powered by blockchain technology for a safer, more sustainable agricultural ecosystem.
            </p>
            <div className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Enter Product ID to Trace Your Produce"
                  className="search-input"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="search-btn" onClick={handleSearch}>
                  <span>Trace</span>
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            <div className="trust-indicators">
              <div className="trust-item"><Star className="trust-icon" /><span>Blockchain Secured</span></div>
              <div className="trust-item"><Award className="trust-icon" /><span>Certified Platform</span></div>
              <div className="trust-item"><Shield className="trust-icon" /><span>Data Protected</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">A Journey You Can Trust</h2>
            <p className="section-subtitle">From farm registration to consumer verification, experience complete transparency in your food journey.</p>
          </div>
         
          <div className="progress-bar-container animate-on-scroll">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}></div>
            </div>
          </div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-card animate-on-scroll ${activeStep === index ? 'step-active' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-number-circle">{index + 1}</div>
                <div className="step-icon-container">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value-section" className="value-section">
        <div className="section-container">
            <div className="section-header animate-on-scroll">
                <h2 className="section-title">A Fairer System for Everyone</h2>
                <p className="section-subtitle">Building trust and transparency across the entire agricultural value chain.</p>
            </div>
            <div className="value-cards">
                {[
                    {
                      id: "for-farmers",
                      icon: <Leaf className="value-icon" />,
                      title: "Empowering Farmers",
                      description: "Our platform ensures farmers receive fair prices and guaranteed payments, building their reputation through transparent practices.",
                      features: ["Fair Pricing", "Guaranteed Payments", "Market Access", "Reputation Building"]
                    },
                    {
                      id: "for-consumers",
                      icon: <Shield className="value-icon" />,
                      title: "Assuring Consumers",
                      description: "Know exactly where your food comes from. Verify quality, safety, and farming practices through immutable blockchain records.",
                      features: ["Complete Traceability", "Quality Verification", "Safety Standards", "Informed Choices"]
                    },
                    {
                      id: "for-ecosystem",
                      icon: <TrendingUp className="value-icon" />,
                      title: "Building Sustainability",
                      description: "Transparency reduces food waste by improving supply chain efficiency, supporting local farmers and reducing environmental impact.",
                      features: ["Reduced Waste", "Supply Chain Efficiency", "Local Support", "Eco-friendly"]
                    }
                ].map((card, index) => (
                    <div key={index} id={card.id} className="value-card animate-on-scroll">
                        <div className="value-card-content">
                            <div className="value-card-header">
                                <div className="value-icon-container">{card.icon}</div>
                                <h3 className="value-title">{card.title}</h3>
                            </div>
                            <p className="value-description">{card.description}</p>
                            <ul className="value-features">
                                {card.features.map((feature, idx) => (
                                    <li key={idx} className="value-feature">
                                        <CheckCircle className="feature-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Business CTA Section */}
      <section id="for-business" className="business-cta-section">
        <div className="business-content animate-on-scroll">
          <h2 className="business-title">Partner with FarmTrace for Business Growth</h2>
          <p className="business-description">Join retailers building consumer trust with powerful analytics, improved efficiency, and verified, traceable products that consumers demand.</p>
          <button className="business-btn">
            <span>Register Your Business</span>
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Column 1: Brand and Logo */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-placeholder">
                  <img src={Logo} alt="FarmTrace Logo" className="logo-image" />
                </div>
                <span className="footer-logo-text">FarmTrace</span>
              </div>
              <p className="footer-description">
                Revolutionizing agriculture through blockchain-powered traceability, building trust from farm to fork.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link"><Twitter size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">Platform</h3>
              <ul className="footer-links">
                <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                <li><a href="#value-section" className="footer-link">For Farmers</a></li>
                <li><a href="#for-business" className="footer-link">For Business</a></li>
                <li><a href="#value-section" className="footer-link">For Consumers</a></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="footer-column">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">FAQs</a></li>
              </ul>
            </div>
           
            {/* Column 4: Newsletter */}
            <div className="footer-column">
              <h3 className="footer-title">Stay Updated</h3>
              <p className="footer-description">Get the latest news and updates from FarmTrace.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="newsletter-btn">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 FarmTrace. All Rights Reserved. A project for a transparent future in agriculture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;