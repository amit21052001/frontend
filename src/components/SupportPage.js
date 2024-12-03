import React, { useState } from "react";
import "./SupportPage.css";
import { useNavigate } from "react-router-dom";

const SupportPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Function to handle message input and add to chat history
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setChatHistory([...chatHistory, { user: "You", message }]);
      setMessage(""); // Clear the input field
      // Simulate a bot reply
      setTimeout(() => {
        setChatHistory([
          ...chatHistory,
          { user: "You", message },
          { user: "SupportBot", message: "Thank you for reaching out! How can I assist you?" },
        ]);
      }, 1000);
    }
  };

  // FAQ section toggle
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="support-page">
      <header className="support-header">
        <div className="logo-container">
          <img src="/assets/logo-image.jpg" alt="Insurance Logo" className="logo" />
          <h1>InsuranceHub Support</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/policies">Policies</a></li>
            <li><a href="/claims">Claims</a></li>
            <li><a href="/renewal">Renewal</a></li>
          </ul>
        </nav>
      </header>

      {/* Chat Section */}
      <section className="chat-section">
        <h2>Live Chat</h2>
        <div className="chat-window">
          <div className="chat-history">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`chat-message ${chat.user === "You" ? "user" : "bot"}`}>
                <strong>{chat.user}:</strong>
                <p>{chat.message}</p>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message" required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {[
            { question: "How can I claim my insurance?", answer: "You can claim your insurance through our claims section." },
            { question: "How do I renew my policy?", answer: "To renew, visit the renewal section in your account." },
            { question: "What documents do I need to submit for claims?", answer: "Documents include your policy number and incident-related documents." },
            { question: "How can I contact support?", answer: "You can contact support via the contact form or our live chat." },
          ].map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeFAQ === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              {activeFAQ === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h4>About Us</h4>
            <p>InsuranceHub is committed to providing exceptional support to all customers.</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook-icon.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter-icon.png" alt="Twitter" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <p>&copy; 2024 InsuranceHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SupportPage;
