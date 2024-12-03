import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/policies");
  }; 

  return (
    <div className="home-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src="/assets/logo-image.jpg" alt="Insurance Logo" className="logo" />
          <h1>InsuranceHub</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/policies">Policies</a></li>
            <li><a href="/renewal">Renewal</a></li>
            <li><a href="/claims">Claims</a></li>
            <li><a href="/support">Support</a></li>
            <li><button className="secondary-button">Logout</button></li>
          </ul>
        </nav>
        
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Secure Your Future Today</h1>
          <p>Find the perfect insurance policy that meets your needs.</p>
          <button className="primary-button" onClick={handleExploreClick}>Explore Policies</button>
        </div>
        <img src="/assets/insurance-background.jpg" alt="Hero Banner" className="hero-image" />
      </section>

      {/* <section className="hero-section">
        <div className="hero-text">
          <h1>Secure Your Future Today</h1>
          <p>Find the perfect insurance policy that meets your needs.</p>
          <button className="primary-button" onClick={handleExploreClick}>
            Explore Policies
          </button>
        </div>
        <img
          src="/assets/hero-insurance.jpg"
          alt="Hero Banner"
          className="hero-image"
        />
      </section> */}

      {/* Policy Categories */}
      <section className="policy-section">
        <h2>Our Insurance Policies</h2>
        <div className="policy-cards">
          <div className="policy-card">
            <img src="/assets/health-insurance.jpg" alt="Health Insurance" />
            <h3>Health Insurance</h3>
          </div>
          <div className="policy-card">
            <img src="/assets/car-insurance.png" alt="Car Insurance" />
            <h3>Car Insurance</h3>
          </div>
          <div className="policy-card">
            <img src="/assets/life-insurance1.jpg" alt="Life Insurance" />
            <h3>Life Insurance</h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <h3>10M+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat">
          <h3>1M+</h3>
          <p>Claims Settled</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Insurance Partners</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>How do I renew my policy?</h3>
          <p>You can renew your policy easily through our renewal section.</p>
        </div>
        <div className="faq">
          <h3>What documents are required for claims?</h3>
          <p>Typically, you need your policy number and incident proof documents.</p>
        </div>
        <div className="faq">
          <h3>Is my data secure?</h3>
          <p>Yes, we ensure your data is encrypted and protected.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>About Us</h4>
            <p>PolicyCare is dedicated to providing the best insurance services.</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Email: support@policycare.com</p>
            <p>Phone: 1800-123-456</p>
          </div>
          <div>
            <h4>Newsletter</h4>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <p>&copy; 2024 PolicyCare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
